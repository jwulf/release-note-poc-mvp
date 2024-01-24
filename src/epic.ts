import { Octokit } from "octokit";
import { ReleaseNoteItem, epics_issues_output_filename, epics_output_filename, epics_raw_filename, stage_four_output_filename } from "./constants";
import { extractRepoOwnerIssue, loadFile, saveFile } from "./utils";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const camundaCloudOctokit = new Octokit({
  auth: process.env.CAMUNDA_CLOUD_GITHUB_TOKEN,
});

const inputFile = stage_four_output_filename
const outputFile = epics_output_filename
const outputIssuesFile = epics_issues_output_filename
const rawFile = epics_raw_filename

const raw: any[] = []

// Go through all the issues in the release.
// Build a map of epics keyed by GitHub url

// const owner = "camunda"; // Replace with the owner's GitHub username or organization name
// const repo = "zeebe"; // Replace with the name of the GitHub repository
// const issueNumber = 14939; // Replace with the number of the issue

interface IssueSpec {
  owner: string;
  repo: string;
  issueNumber: number;
}

interface Issue {
  title: string;
  number: number;
  closed: boolean;
}

interface Epic {
  issueNumber: number;
  title: string;
  status: 'Closed' | 'Open';
  body: string;
  labels: string[];
  comments: string[];
  completedTasks: number;
  totalTasks: number;
  tasks: Issue[];
  url: string;
  allTasksClosed: boolean;
  allTasksInRelease: boolean;
  tasksInRelease: Issue[]
  tasksMissingFromRelease: Issue[]
}

function getOctokit(owner: string) {
  if (owner === "camunda-cloud") {
    return camundaCloudOctokit;
  }
  return octokit;
}

async function getEpicsForIssue({ owner, repo, issueNumber }: IssueSpec) {
  try {
    const response = await octokit.graphql(
      `
    query GetEpicForIssue($owner: String!, $repo: String!, $issueNumber: Int!) {
      repository(owner: $owner, name: $repo) {
        issue(number: $issueNumber) {
          title
          trackedInIssues(first: 100, after: null) {
            nodes {
              title
              number
              repository {
                nameWithOwner
              }
              labels(first: 100, after: null) {
                nodes {
                  name
                  }
              }
              closed
              bodyText
              comments(first: 100, after: null) {
                nodes {
                  bodyText
                }
              }
              trackedIssuesCount
              trackedIssues(first: 100, after: null) {
                nodes {
                  title
                  number
                  resourcePath
                  closed
                }
              }
            }
            pageInfo {
              endCursor
              startCursor
              hasNextPage
              hasPreviousPage
            }
          }
        } 
      }
    }`,
      {
        owner,
        repo,
        issueNumber,
      }
    );

    console.log(JSON.stringify(response, null, 2));
    // There can be more than one of these
    const res = (response as any).repository.issue.trackedInIssues
    .nodes.map((epicInfo: any) => {
        console.log(
          `Issue: "#${issueNumber}: ${(response as any).repository.issue.title}"`
        );
        console.log(`Epic: #${epicInfo.number}: ${epicInfo.title}`);
        const epicStatus = epicInfo.closed ? "Closed" : "Open";
        const completedTasks = epicInfo.trackedIssues.nodes.reduce(
          (prev: number, curr: any) => prev + (curr.closed ? 1 : 0),
          0
        );
        const totalTasks = epicInfo.trackedIssues.nodes.length;
        console.log(
          `Epic Status: ${epicStatus} | ${completedTasks}/${totalTasks}`
        );
        raw.push(epicInfo)
        return {
            issueNumber: epicInfo.number,
            title: epicInfo.title,
            status: epicStatus,
            labels: epicInfo.labels.nodes.map((label: any) => label.name),
            body: epicInfo.bodyText,
            comments: epicInfo.comments.nodes.map((comment: any) => comment.bodyText),
            completedTasks,
            totalTasks,
            tasks: epicInfo.trackedIssues.nodes,
            url: `https://github.com/${epicInfo.repository.nameWithOwner}/issues/${epicInfo.number}`,
            allTasksClosed: completedTasks === totalTasks,
          } as unknown as Epic
        }) 
  
  if (res.length > 1) {
    return { success: true,
      epics: res };
  } else {
    console.log("No epic found for this issue.");
    return { 
      success: true,
      epics: [] 
    };
  }
    } catch (error: unknown) {
      console.error("Error:", (error as any as Error).message);
      return {
        success: false,
        error: {
          errorMessage: (error as any as Error).message,
          owner,
          repo,
          issueNumber
        },
    };
  }
}

async function main() {
  const issues: ReleaseNoteItem[] = loadFile(inputFile)

  const epics: {[key:number]: Epic} = {}

  for (const issue of issues) {
    const outcome = extractRepoOwnerIssue(issue.url)
    if (outcome.owner && outcome.repo && outcome.issue_number) {
      const { owner, repo, issue_number } = outcome
      const res = await getEpicsForIssue({ owner, repo, issueNumber: issue_number })
      console.log(JSON.stringify(epics, null, 2))
      if (res.success) {
        res.epics.forEach((epic: Epic) => {
          const allTasksInRelease = epic.tasks.every(task => issues.some(issue => extractRepoOwnerIssue(issue.url).issue_number === task.number))
          const tasksInRelease = epic.tasks.filter(task => issues.some(issue => extractRepoOwnerIssue(issue.url).issue_number === task.number))
          const tasksMissingFromRelease = epic.tasks.filter(task => !issues.some(issue => extractRepoOwnerIssue(issue.url).issue_number === task.number))
          epics[epic.issueNumber] = {
            ...epic,
            allTasksInRelease,
            tasksInRelease,
            tasksMissingFromRelease
          }
          issue.partOfEpic = !!issue.partOfEpic ? [...issue.partOfEpic, epic.issueNumber] : [epic.issueNumber]
        }) 
      }
    }
  }
  saveFile(outputFile, epics)
  saveFile(outputIssuesFile, issues)
  saveFile(rawFile, raw)
}

main()