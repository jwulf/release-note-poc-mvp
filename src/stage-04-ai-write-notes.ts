import fs from "fs"
import axios from 'axios';
import dotenv from "dotenv"
import { stage_four_errors_filename, stage_four_output_filename, stage_three_output_filename } from "./constants";
dotenv.config()

const apiKey = process.env.OPENAI_API_KEY; // Replace with your ChatGPT API key

const issues = JSON.parse(fs.readFileSync(stage_three_output_filename, {encoding: "utf8"}))

const prompt = "You take GitHub issue text and produce a release note consisting of four parts: a consequence, a cause, a fix, and a result. The consequence is the impact of the issue, expressed in the observable behaviour of the system for the user, and written in the past tense. The cause is the underlying cause of the issue, expressed in terms of the technical engineering of the product, and written in the past tense. The fix is a description of the technical fix to the product, written in the past tense. The result is a description of the observable behaviour of the system for the user when this fix is applied, written in present tense. Avoid repetition. Use active voice.";

const delay = (ms: number) => new Promise(res => setTimeout(() => res(null), ms))

async function generateChatGPTResponse(text: string) {
    console.log('Contacting ChatGPT...')
    const data = {
      model: "gpt-4", //"gpt-3.5-turbo",
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: text },
        { role: 'assistant', content: "Please generate the release note for the following GitHub issue" },
      ],
    };
  
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );
  
    //   console.log('ChatGPT', response.data)
    //   console.log(JSON.stringify(response.data, null, 2))
      return response.data.choices[0].message.content;
    } catch (error) {
      console.log("Error generating response from ChatGPT:", error);
      return 'An error occurred while generating a response.';
    }
}

async function main() {
    const withRelNote: any[] = [] 
    const withError: any[] = []
    let total = issues.length
    let done = 1
    for (const issue of issues) {
        const {title, gitHubText} = issue
        try {
            const releaseNoteText = cleanAIEntry(await generateChatGPTResponse(`${title}\n${gitHubText}`))
            if (releaseNoteText == 'An error occurred while generating a response.') {
              throw new Error(releaseNoteText)
            }
            withRelNote.push({...removeGithubText(issue), releaseNoteText})
            console.log(`\n${title}\n${releaseNoteText}`)
        } catch (e: any) {
            console.log(title, e.message)
            withError.push({...issue, releaseNoteText: `Error: ${e.message}`})
        }
    
        // Incremental update to file
        fs.writeFileSync(stage_four_output_filename, JSON.stringify(withRelNote, null, 2), {encoding: "utf8"})
        fs.writeFileSync(stage_four_errors_filename, JSON.stringify(withError, null, 2), {encoding: "utf8"})
        
        console.log(`${done++}/${total}...`)
        if (done == total) {
          console.log(`Wrote ${withRelNote.length} release notes to ${stage_four_output_filename}`)
          console.log(`Wrote ${withError.length} errors to ${stage_four_errors_filename}`)
        }
        await delay(200)
      }
}

const removeGithubText = (issue: any) => {
    const {gitHubText, ...rest} = issue
    return rest
}

const cleanAIEntry = (text: string) => text
        .replace('**Consequence:**', '')
        .replace('**Consequence**:', '')
        .replace('**Consequence**', '')
        .replace('Consequence: ', '')

        .replace('**Cause:**', '')
        .replace('**Cause**:', '')
        .replace('**Cause**', '')
        .replace('Cause: ', '')

        .replace('**Fix:**', '')
        .replace('**Fix**:', '')
        .replace('**Fix**', '')
        .replace('Fix: ', '')

        .replace('**Result:**', '')
        .replace('**Result**:', '')
        .replace('**Result**', '')
        .replace('Result: ', '')

        .replaceAll('\n\n\n\n', '\n')
        .replaceAll('\n\n\n', '\n')
        .replaceAll('\n\n', '\n')
        .replaceAll('\r\n\r\n', '\r\n')

main()