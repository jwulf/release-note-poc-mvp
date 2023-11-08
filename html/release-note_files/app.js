var require = meteorInstall({"imports":{"api":{"issues.ts":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// imports/api/issues.ts                                                                                       //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
!function (module1) {
  module1.export({
    IssuesCollection: () => IssuesCollection
  });
  let Mongo;
  module1.link("meteor/mongo", {
    Mongo(v) {
      Mongo = v;
    }
  }, 0);
  ___INIT_METEOR_FAST_REFRESH(module);
  const IssuesCollection = new Mongo.Collection('issues');
}.call(this, module);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"App.tsx":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// imports/ui/App.tsx                                                                                          //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
!function (module1) {
  module1.export({
    App: () => App
  });
  let React;
  module1.link("react", {
    default(v) {
      React = v;
    }
  }, 0);
  let ReleaseNotes;
  module1.link("./Issues", {
    ReleaseNotes(v) {
      ReleaseNotes = v;
    }
  }, 1);
  ___INIT_METEOR_FAST_REFRESH(module);
  const App = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Camunda 8 version 8.3.0 Release Notes"), /*#__PURE__*/React.createElement(ReleaseNotes, null));
  _c = App;
  var _c;
  $RefreshReg$(_c, "App");
}.call(this, module);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Issues.tsx":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// imports/ui/Issues.tsx                                                                                       //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
!function (module1) {
  module1.export({
    ReleaseNotes: () => ReleaseNotes
  });
  let React;
  module1.link("react", {
    default(v) {
      React = v;
    }
  }, 0);
  let useTracker;
  module1.link("meteor/react-meteor-data", {
    useTracker(v) {
      useTracker = v;
    }
  }, 1);
  let IssuesCollection;
  module1.link("/imports/api/issues", {
    IssuesCollection(v) {
      IssuesCollection = v;
    }
  }, 2);
  ___INIT_METEOR_FAST_REFRESH(module);
  var _s = $RefreshSig$();
  const ReleaseNotes = () => {
    _s();
    const {
      docs,
      isLoading
    } = useTracker(() => {
      const subscription = Meteor.subscribe('releaseNotes');
      if (!subscription.ready()) {
        return {
          docs: [],
          isLoading: true
        };
      }
      const docs = IssuesCollection.find({}).fetch();
      return {
        docs,
        isLoading: false
      };
    }, []);
    // Group the documents by component, subcomponent, and context
    const groupedData = groupDocs(docs);
    if (isLoading) {
      return /*#__PURE__*/React.createElement("div", null, "Loading...");
    }
    // Render your component with the groupedData
    // ...
    return /*#__PURE__*/React.createElement("div", null, Object.entries(groupedData).map(_ref => {
      let [component, subcomponents] = _ref;
      return /*#__PURE__*/React.createElement("div", {
        key: component
      }, /*#__PURE__*/React.createElement("h2", null, component), Object.entries(subcomponents).map(_ref2 => {
        let [subcomponent, contexts] = _ref2;
        return /*#__PURE__*/React.createElement("div", {
          key: subcomponent
        }, /*#__PURE__*/React.createElement("h3", null, subcomponent), Object.entries(contexts).map(_ref3 => {
          let [context, notes] = _ref3;
          return /*#__PURE__*/React.createElement("div", {
            key: context
          }, /*#__PURE__*/React.createElement("h4", null, context), notes.map((note, index) => /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", {
            key: index,
            className: "release-note",
            style: {
              whiteSpace: 'pre-wrap'
            }
          }, /*#__PURE__*/React.createElement("a", {
            href: note.url
          }, /*#__PURE__*/React.createElement("strong", null, note.title)), /*#__PURE__*/React.createElement("p", null, note.releaseNoteText)))));
        }));
      }));
    }));
  };
  // Helper function to group the documents
  _s(ReleaseNotes, "gZ9UHlU/B9D+qiDtoJTy70wbvKQ=", false, function () {
    return [useTracker];
  });
  _c = ReleaseNotes;
  function groupDocs(docs) {
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
    }, {});
  }
  var _c;
  $RefreshReg$(_c, "ReleaseNotes");
}.call(this, module);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.tsx":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// client/main.tsx                                                                                             //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
!function (module1) {
  let React;
  module1.link("react", {
    default(v) {
      React = v;
    }
  }, 0);
  let createRoot;
  module1.link("react-dom/client", {
    createRoot(v) {
      createRoot = v;
    }
  }, 1);
  let Meteor;
  module1.link("meteor/meteor", {
    Meteor(v) {
      Meteor = v;
    }
  }, 2);
  let App;
  module1.link("/imports/ui/App", {
    App(v) {
      App = v;
    }
  }, 3);
  ___INIT_METEOR_FAST_REFRESH(module);
  Meteor.startup(() => {
    const container = document.getElementById('react-target');
    const root = createRoot(container);
    root.render( /*#__PURE__*/React.createElement(App, null));
  });
}.call(this, module);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".d.ts",
    ".ts",
    ".d.ts.map",
    ".tsx",
    ".mjs",
    ".css"
  ]
});

var exports = require("/client/main.tsx");