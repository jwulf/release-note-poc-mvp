declare var Assets: any;

import { Meteor } from 'meteor/meteor';
import { Issue, IssuesCollection } from '../imports/api/issues';

async function insertIssue({ 
  title, 
  url, 
  releaseNoteText, 
  component, 
  subcomponent, 
  context 
}: Pick<Issue, 'title' | 'url' | 'releaseNoteText' | 'component' | 'subcomponent' | 'context'>) {
  await IssuesCollection.insertAsync({ title, url, releaseNoteText, component, subcomponent, context, createdAt: new Date() });
}

Meteor.startup(async () => {
  IssuesCollection.remove({});
  console.log(`Emptied collection`)

  // If the Issues collection is empty, add some data.
  if (await IssuesCollection.find().countAsync() === 0) {
    const data = JSON.parse(Assets.getText(`release-notes.json`))
    for (const issue of data) {
      console.log(`Creating ${issue.title}`)
      await insertIssue({
        title: issue.title,
        url: issue.url,
        releaseNoteText: issue.releaseNoteText,
        component: issue.component,
        subcomponent: issue.subcomponent,
        context: issue.context
      })
    }
  }

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("releaseNotes", function () {
    return IssuesCollection.find();
  });
});
