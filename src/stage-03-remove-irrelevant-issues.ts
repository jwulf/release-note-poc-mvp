import fs from "fs"
import { RELEASE_TAG } from "./stage-00-set-release";

const inputFile = `03-release-issues-with-text-${RELEASE_TAG}.json`
const outputFile = `04-relevant-issues-with-text-${RELEASE_TAG}.json`

const issues = JSON.parse(fs.readFileSync(inputFile, {encoding: "utf8"}))

const toRemove = [
    "🧹 Chore",
    "Maintenance",
]

const removeChores = (issue: any) => !toRemove.includes(issue.context)

const relevantIssues = issues.filter(removeChores)

fs.writeFileSync(outputFile, JSON.stringify(relevantIssues, null, 2), {encoding: "utf8"})

console.log(`Wrote ${relevantIssues.length} issues to ${outputFile}`)