import { Octokit } from "@octokit/rest";
import fs from 'fs'
import dotenv from "dotenv"
import { RELEASE_TAG } from "./stage-00-set-release";
dotenv.config()

if (!process.env.GITHUB_TOKEN) {
    console.log('Warning! No GITHUB_TOKEN in environment.')
}

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

// Grab the release RELEASE_TAG from GitHub via the API, and create a JSON object containing the issues in the release
async function main() {
    const {data} = await octokit.repos.listReleases({owner: 'camunda',repo: 'camunda-platform', per_page: 1000})
    const relevant_releases = data.filter(({tag_name}) => tag_name.includes(RELEASE_TAG) /** && !tag_name.includes('alpha') */)

    console.log(`Retrieved ${relevant_releases.length} releases for ${RELEASE_TAG}`)

    fs.writeFileSync(`01-raw-github-api-response-${RELEASE_TAG}.json`, JSON.stringify(relevant_releases, null, 2), {encoding: 'utf8'})

    const releases = relevant_releases.map(release => ({
        release: release.tag_name,
        notes: getIssues(release.body ?? '').filter(e => !!e)
    }))

    const releaseWithIssues = releases
        .filter(rel => rel.release.includes(RELEASE_TAG))
        .flatMap(rel => rel.notes.map(note => ({
            release: rel.release,
            ...note})))

    const outputFileName = `02-release-issues-${RELEASE_TAG}.json`
    fs.writeFileSync(outputFileName, JSON.stringify(releaseWithIssues, null, 2))
    console.log(`Wrote file ${outputFileName}`)
}

// Parse the release notes body text, and extract the issues in the release to JSON
function getIssues(note: string) {
    const githubFragment = 'https://github.com/'
    const lines = note
        .split('\n')
        .map(l => l.replace('\r', ''))
        .filter(l => !!l)
        .filter(l => !l.startsWith('# Release '))
        .filter(l => !l.startsWith('# 8'))
    let component: string
    let subcomponent: string
    let context: string
    const issues = lines
        .map(line => {
            if (line.includes(githubFragment)) {
                return {
                    url: githubFragment + line.split(githubFragment)[1].replace('))', ''),
                    component,
                    subcomponent,
                    context
                }
            } else {
                if (line.startsWith('# ')) {
                    component = line.replace('# ', '').replace('\r\n', '')
                    return {isContext: true}
                } 
                if (line.startsWith('## ')) {
                    context = line.replace('## ', '').replace('\r\n', '')
                    return {isContext: true}
                }
                if (line.startsWith('### ')) {
                    subcomponent = line.replace('### ', '').replace('\r\n', '')
                    return {isContext: true}
                }
            }
        })
        .filter(line => !line?.isContext === true)
    return issues
}


main()

