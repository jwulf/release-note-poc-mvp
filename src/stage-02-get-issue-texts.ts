
import { Octokit } from "@octokit/rest";
import dotenv from "dotenv"
import fs from "fs"
import { stage_one_output_filename, stage_two_error_filename, stage_two_output_filename } from "./constants";

dotenv.config()

const octokitCamunda = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

const octokitCamundaCloud = new Octokit({auth: process.env.CAMUNDA_CLOUD_GITHUB_TOKEN})

interface GitHubIssueInfo {
    owner: string | null;
    repo: string | null;
    issue_number: number | null;
}

const octokit = (owner: string) => {
    return owner === 'camunda-cloud' ? octokitCamundaCloud : octokitCamunda
}

export async function getGitHubPullRequestText(githubIssueUrl: string) {
    // Extract information from the URL
    const {owner, repo, issue_number: pull_number} = extractRepoOwnerIssue(githubIssueUrl);
    if (!owner || !repo || !pull_number) {
        return ""
    }

    const i = await octokit(owner).pulls.get({
        pull_number,
        repo,
        owner
    })

    console.log(`Title: ${i.data.title}`)

    return  {
        gitHubText: `${i.data.body}`,
        title: i.data.title
    }
}

export async function getGitHubIssueText(githubIssueUrl: string) {
    // Extract information from the URL
    const {owner, repo, issue_number} = extractRepoOwnerIssue(githubIssueUrl);
    if (!owner || !repo || !issue_number) {
        return ""
    }

    const i = await octokit(owner).issues.get({
        issue_number,
        repo,
        owner
    })

    const comments = await octokit(owner).issues.listComments({
        owner,
        repo,
        issue_number
    })

    const commentText = comments.data.reduce((prev, curr) =>  {
        if (!curr.body) {
            return prev
        }
        return `${prev}\n ${curr.user?.login}: ${curr.body}`  
    }, "")

    console.log(`Title: ${i.data.title}`)

    return  {
        gitHubText: `${i.data.body}\n${commentText}`,
        title: i.data.title
    }
}

function extractRepoOwnerIssue(url: string): GitHubIssueInfo {
    // Define a regular expression pattern to match the GitHub issue URL format
    const pattern = url.includes('/pull/') ? /https:\/\/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)/ : /https:\/\/github\.com\/([^/]+)\/([^/]+)\/issues\/(\d+)/;

    // Use match to find matches in the URL
    const match = url.match(pattern);

    if (match) {
        const repoOwner = match[1];
        const repoName = match[2];
        const issue_number = parseInt(match[3]);
        return {
            owner: repoOwner,
            repo: repoName,
            issue_number
        };
    } else {
        return {
            owner: null,
            repo: null,
            issue_number: null
        };
    }
}

function delay(ms: number) {
    return new Promise(res => setTimeout(() => res(null), ms))
} 

async function main() {
    const issues = JSON.parse(fs.readFileSync(stage_one_output_filename, {encoding: "utf8"}))
    const issuesWithText: any[] = []
    const issuesWithError: any[] = []
    for (let issue of issues) {
        console.log(`\nGetting ${issue.url}`)
        try {
            const gitHubText = issue.url.includes(`/pull/`) ? await getGitHubPullRequestText(issue.url) : await getGitHubIssueText(issue.url)
            issuesWithText.push({...issue, ...gitHubText})
            console.log(`Got text`)
        } catch (e: any) {
            issuesWithError.push({...issue, gitHubText: `Error: ${e.message}`})
            console.log(`Error: ${e.message}`)
        }
        await delay(1000)
    }
    fs.writeFileSync(stage_two_output_filename, JSON.stringify(issuesWithText, null, 2), {encoding: "utf8"})
    fs.writeFileSync(stage_two_error_filename, JSON.stringify(issuesWithError, null, 2), {encoding: "utf8"})
    console.log(`Wrote ${issuesWithText.length} issues to ${stage_two_output_filename}`)
    console.log(`Wrote ${issuesWithError.length} issues to ${stage_two_error_filename}`)
}

main()