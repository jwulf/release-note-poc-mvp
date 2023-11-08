import { Mongo } from 'meteor/mongo';

export interface Issue {
  _id?: string;
  title: string;
  url: string;
  createdAt: Date;
  releaseNoteText: string; 
  component: string; 
  subcomponent: string; 
  context: string;
}

export const IssuesCollection = new Mongo.Collection<Issue>('issues');
