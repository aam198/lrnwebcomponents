define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_cc0e4c50ecf211e88980a9042f76389d() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <h2>[[title]]</h2>\n"
    ]);
    _templateObject_cc0e4c50ecf211e88980a9042f76389d = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_cc0e4c50ecf211e88980a9042f76389d()
    ),
    is: "lrndesign-diff2html",
    properties: { title: { type: String, value: "lrndesign-diff2html" } }
  });
});
