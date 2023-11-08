import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Issue, IssuesCollection } from '/imports/api/issues';
declare var Meteor: any 

export const ReleaseNotes = () => {
  const { docs, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('releaseNotes');
    if (!subscription.ready()) {
      return { docs: [], isLoading: true };
    }
    const docs = IssuesCollection.find({}).fetch();
    return { docs, isLoading: false };
  }, []);

  // Group the documents by component, subcomponent, and context
  const groupedData = groupDocs(docs);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render your component with the groupedData
  // ...

  return (
    <div>
      {/* Iterate over the data and render your release notes */}
      {Object.entries(groupedData).map(([component, subcomponents]) => (
        <div key={component}>
          <h2>{component}</h2>
          {Object.entries(subcomponents).map(([subcomponent, contexts]) => (
            <div key={subcomponent}>
              <h3>{subcomponent}</h3>
              {Object.entries(contexts).map(([context, notes]) => (
                <div key={context}>
                  <h4>{context}</h4>
                  {notes.map((note, index) => (
                    <p><div key={index} className="release-note" style={{ whiteSpace: 'pre-wrap' }}>
                      <a href={note.url}><strong>{note.title}</strong></a>
                      <p>{note.releaseNoteText}</p>
                    </div></p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Helper function to group the documents
function groupDocs(docs: Issue[]) {
  return docs.reduce((acc, doc) => {
    if (!acc[doc.component]) {
      acc[doc.component] = {};
    }
    if (!acc[doc.component][doc.subcomponent]) {
      acc[doc.component][doc.subcomponent] = {};
    }
    if (!acc[doc.component][doc.subcomponent][doc.context]) {
      acc[doc.component][doc.subcomponent][doc.context] = [];
    }
    acc[doc.component][doc.subcomponent][doc.context].push({
      title: doc.title,
      releaseNoteText: doc.releaseNoteText,
      url: doc.url
    });
    return acc;
  }, {} as {[key: string]: {[key:string]: {[key: string]: {title: string, url: string, releaseNoteText: string}[]}}});
}

