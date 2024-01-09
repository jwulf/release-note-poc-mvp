import Handlebars from 'handlebars';
import fs from "fs"
import { RELEASE_TAG } from "./stage-00-set-release";
import { stage_five_output_filename, stage_four_output_filename } from './constants';

interface ReleaseNoteItem {
    release: string;
    url: string;
    component: string;
    subcomponent: string;
    context: string;
    title: string;
    releaseNoteText: string;
  }
  
  interface IndividualReleaseNote {
    release: string;
    url: string;
    title: string;
    releaseNoteText: string;
  }
  
  interface Context {
    key: string;
    items: IndividualReleaseNote[];
  }
  
  interface SubComponent {
    key: string;
    contexts: Context[];
  }
  
  interface Component {
    key: string;
    subcomponents: SubComponent[];
  }
  
  interface ReleaseNotes {
    components: Component[];
  }
  
  const transformReleaseNoteItems = (releaseNoteItems: ReleaseNoteItem[]): ReleaseNotes => {
    return releaseNoteItems.reduce((acc, curr) => {
      const componentKey = curr.component;
      const subcomponentKey = curr.subcomponent;
      const contextKey = curr.context;
  
      // Check if the current component exists in the accumulator
      let component = acc.components.find(c => c.key === componentKey);
      if (!component) {
        // If it doesn't exist, create a new one and add it to the accumulator
        component = { key: componentKey, subcomponents: [] };
        acc.components.push(component);
      }
  
      // Check if the current subcomponent exists in the component
      let subcomponent = component.subcomponents.find(sc => sc.key === subcomponentKey);
      if (!subcomponent) {
        // If it doesn't exist, create a new one and add it to the component
        subcomponent = { key: subcomponentKey, contexts: [] };
        component.subcomponents.push(subcomponent);
      }
  
      // Check if the current context exists in the subcomponent
      let context = subcomponent.contexts.find(ctx => ctx.key === contextKey);
      if (!context) {
        // If it doesn't exist, create a new one and add it to the subcomponent
        context = { key: contextKey, items: [] };
        subcomponent.contexts.push(context);
      }
  
      // Add the current item to the context
      context.items.push({
        release: curr.release,
        url: curr.url,
        title: curr.title,
        releaseNoteText: curr.releaseNoteText,
      });
  
      return acc;
    }, { components: [] } as ReleaseNotes);
  };
  
const releaseNotes = transformReleaseNoteItems(require(`./${stage_four_output_filename}`))

const template = `# Release Notes for Camunda ${RELEASE_TAG}

{{#each components}}
# {{key}}
{{#each subcomponents}}
## {{../key}} > {{key}}
{{#each contexts}}
### {{../../key}} > {{../key}} > {{key}}
{{#each items}}
#### [{{this.title}}]({{this.url}})

{{this.releaseNoteText}}
{{/each}}
{{/each}}
{{/each}}
{{/each}}`;


const result = Handlebars.compile(template)(releaseNotes);

fs.writeFileSync(stage_five_output_filename, result, {encoding: "utf8"})
