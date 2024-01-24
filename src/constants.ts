import { RELEASE_TAG } from "./stage-00-set-release";

export const stage_one_intermediate_filename = `intermediate/01-raw-github-api-response-${RELEASE_TAG}.json`
export const stage_one_output_filename = `intermediate/02-release-issues-${RELEASE_TAG}.json`

export const stage_two_output_filename = `intermediate/03-release-issues-with-text-${RELEASE_TAG}.json`
export const stage_two_error_filename = `intermediate/03-release-issues-with-errors-${RELEASE_TAG}.json`

export const stage_three_output_filename = `intermediate/04-relevant-issues-with-text-${RELEASE_TAG}.json`

export const stage_four_output_filename = `intermediate/05-ai-release-notes-${RELEASE_TAG}.json`
export const stage_four_errors_filename = `intermediate/05-ai-errors-${RELEASE_TAG}.json`

export const stage_five_output_filename = `output/release-notes-${RELEASE_TAG}.md`

export const epics_output_filename = `intermediate/epics-${RELEASE_TAG}.json`
export const epics_issues_output_filename = `intermediate/epics-issues-${RELEASE_TAG}.json`
export const epics_raw_filename = `intermediate/epics-raw-${RELEASE_TAG}.json`

export const release_description_filename = `intermediate/release-description-${RELEASE_TAG}.json`
export interface ReleaseNoteItem {
  release: string;
  url: string;
  component: string;
  subcomponent: string;
  context: string;
  title: string;
  releaseNoteText: string;
  partOfEpic: number[]
}

export interface GitHubIssueInfo {
    owner: string | null;
    repo: string | null;
    issue_number: number | null;
}