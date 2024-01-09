import fs from "fs"
import { stage_three_output_filename, stage_two_output_filename } from "./constants";

const inputFile = stage_two_output_filename
const outputFile = stage_three_output_filename
interface ReleaseNoteItem {
    release: string;
    url: string;
    component: string;
    subcomponent: string;
    context: string;
    title: string;
    releaseNoteText: string;
  }

const issues: ReleaseNoteItem[] = JSON.parse(fs.readFileSync(inputFile, {encoding: "utf8"}))

const toRemove = [
    "🧹 Chore",
    "Maintenance",
]

const removeChores = (issue: ReleaseNoteItem) => !(toRemove.includes(issue.context) || (issue.context.includes('Bugfixes') && issue.title.startsWith('fix: update dependency ')))

const relevantIssues = issues.filter(removeChores)

fs.writeFileSync(outputFile, JSON.stringify(relevantIssues, null, 2), {encoding: "utf8"})

console.log(`Wrote ${relevantIssues.length} issues to ${outputFile}`)