import fs from "fs";
import {
  ReleaseNoteItem,
  stage_three_output_filename,
  stage_two_output_filename,
} from "./constants";
import { loadFile } from "./utils";

const inputFile = stage_two_output_filename;
const outputFile = stage_three_output_filename;

const issues: ReleaseNoteItem[] = loadFile(inputFile)

const toRemove = ["🧹 Chore", "Maintenance"];

const removeChores = (issue: ReleaseNoteItem) =>
  !(
    toRemove.includes(issue.context) ||
    (issue.context.includes("Bugfixes") &&
      issue.title.startsWith("fix: update dependency "))
  );

const relevantIssues = issues.filter(removeChores);

fs.writeFileSync(outputFile, JSON.stringify(relevantIssues, null, 2), {
  encoding: "utf8",
});

console.log(`Wrote ${relevantIssues.length} issues to ${outputFile}`);
