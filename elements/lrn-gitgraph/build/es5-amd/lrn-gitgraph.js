define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./lib/gitgraph.js/src/gitgraph.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_e3f86360ecf111e8b7c90984a6304f17() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n        overflow-x: scroll;\n      }\n    </style>\n    <canvas id="gitGraph"></canvas>\n'
    ]);
    _templateObject_e3f86360ecf111e8b7c90984a6304f17 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_e3f86360ecf111e8b7c90984a6304f17()
    ),
    is: "lrn-gitgraph",
    properties: {
      commits: { type: Array, value: [] },
      template: { type: String, value: "blackarrow" },
      orientation: { type: String, value: "horizontal" },
      mode: { type: String, value: "" },
      reverseArrow: { type: Boolean, value: !1 },
      config: { type: Object }
    },
    observers: ["_commitsChanged(commits)"],
    _commitsChanged: function _commitsChanged(commits) {
      var root = this;
      if (root.config) {
        if (0 < commits.length) {
          var gitgraph = new GitGraph(root.config),
            tree = [];
          commits.forEach(function(item) {
            if (item.commits) {
              item.commits.forEach(function(commit) {
                commit.branch = item.branch;
                tree.push(commit);
              });
            }
          });
          console.log("befor", tree);
          tree = root._treeRemoveDuplicates(tree);
          tree = tree.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
          });
          tree.reverse();
          var branches = [];
          tree.forEach(function(item) {
            if ("undefined" === typeof branches[item.branch]) {
              branches[item.branch] = gitgraph.branch(item.branch);
            }
            branches[item.branch].commit({
              sha1: item.commit,
              message: item.subject,
              author: item.author,
              tag: item.refs
            });
          });
        }
      }
    },
    _treeRemoveDuplicates: function _treeRemoveDuplicates(tree) {
      var htTree = [],
        htCommits = [];
      tree.forEach(function(t) {
        if (!htCommits.includes(t.commit)) {
          htTree.push(t);
          htCommits.push(t.commit);
        }
      });
      return htTree;
    },
    ready: function ready() {
      var root = this,
        config = {
          template: root.template,
          reverseArrow: !1,
          orientation: root.orientation,
          element: root.shadowRoot.querySelector("#gitGraph")
        };
      if ("" !== root.mode) {
        config.mode = root.mode;
      }
      root.config = config;
    }
  });
});
