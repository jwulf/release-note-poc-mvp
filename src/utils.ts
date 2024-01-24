import fs from 'fs';
import { GitHubIssueInfo } from './constants';

export function extractRepoOwnerIssue(url: string): GitHubIssueInfo {
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

export function loadFile(inputFilename: string) {
    return JSON.parse(fs.readFileSync(inputFilename, {encoding: "utf8"}))
} 

export function saveFile(outputFilename: string, data: any) {
    fs.writeFileSync(outputFilename, JSON.stringify(data, null, 2), {encoding: "utf8"})
    console.log(`Wrote ${data.length} issues to ${outputFilename}`)
}
