import fs from "fs"
import axios from 'axios';
import dotenv from "dotenv"
import { epics_output_filename, release_description_filename, stage_four_errors_filename, stage_four_output_filename, stage_three_output_filename } from "./constants";
import { loadFile, saveFile } from "./utils";
import { RELEASE_TAG } from "./stage-00-set-release";
dotenv.config()

const apiKey = process.env.OPENAI_API_KEY; // Replace with your ChatGPT API key
const inputFile = epics_output_filename
const epics = loadFile(inputFile)

const output_file = release_description_filename

const prompt = `Given the following JSON object that describes the epics in release ${RELEASE_TAG}, generate a high-level description of the release and its features.` 
const delay = (ms: number) => new Promise(res => setTimeout(() => res(null), ms))

async function generateChatGPTResponse(text: string) {
    console.log('Contacting ChatGPT...')
    const data = {
      model: "gpt-4", //"gpt-3.5-turbo",
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: text },
        { role: 'assistant', content: "Please generate the release note for the following release" },
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
    const releaseNoteText = await generateChatGPTResponse(epics)
    saveFile(output_file, releaseNoteText)
}

main()