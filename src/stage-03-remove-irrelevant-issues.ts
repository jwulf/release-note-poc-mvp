import fs from "fs"
import { stage_three_output_filename, stage_two_output_filename } from "./constants";

const issues = JSON.parse(fs.readFileSync(stage_two_output_filename, {encoding: "utf8"}))

const toRemove = [
    "🧹 Chore",
    "Maintenance",
]

const removeChores = (issue: any) => !toRemove.includes(issue.context)

const relevantIssues = issues.filter(removeChores)

fs.writeFileSync(stage_three_output_filename, JSON.stringify(relevantIssues, null, 2), {encoding: "utf8"})

console.log(`Wrote ${relevantIssues.length} issues to ${stage_three_output_filename}`)