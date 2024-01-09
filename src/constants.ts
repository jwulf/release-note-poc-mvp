import { RELEASE_TAG } from "./stage-00-set-release";

export const stage_one_intermediate_filename = `intermediate/01-raw-github-api-response-${RELEASE_TAG}.json`
export const stage_one_output_filename = `intermediate/02-release-issues-${RELEASE_TAG}.json`

export const stage_two_output_filename = `intermediate/03-release-issues-with-text-${RELEASE_TAG}.json`
export const stage_two_error_filename = `intermediate/03-release-issues-with-errors-${RELEASE_TAG}.json`

export const stage_three_output_filename = `intermediate/04-relevant-issues-with-text-${RELEASE_TAG}.json`

export const stage_four_output_filename = `intermediate/05-ai-release-notes-${RELEASE_TAG}.json`
export const stage_four_errors_filename = `intermediate/05-ai-errors-${RELEASE_TAG}.json`

export const stage_five_output_filename = `output/release-notes-${RELEASE_TAG}.md`