define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/polymer/lib/legacy/templatizer-behavior.js",
  "./node_modules/@polymer/polymer/lib/legacy/mutable-data-behavior.js"
], function(
  _polymerLegacy,
  _polymerDom,
  _templatizerBehavior,
  _mutableDataBehavior
) {
  "use strict";
  function _templateObject_ba8286f0ecf111e8870fd574e18c710a() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <div id="dom">\n      <slot></slot>\n    </div>\n'
    ]);
    _templateObject_ba8286f0ecf111e8870fd574e18c710a = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_ba8286f0ecf111e8870fd574e18c710a()
    ),
    is: "grafitto-filter",
    behaviors: [
      _templatizerBehavior.Templatizer,
      _mutableDataBehavior.OptionalMutableDataBehavior
    ],
    properties: {
      items: { type: Array, value: [] },
      like: { type: String, value: "" },
      where: { type: String, value: "name" },
      caseSensitive: { type: Boolean, value: !1, reflectToAttribute: !0 },
      as: { type: String, value: "items" },
      filtered: {
        type: Array,
        computed: "_computeFiltered(items, where, like, caseSensitive)",
        observer: "_onFilter"
      },
      f: { type: Function, notify: !0 }
    },
    observers: ["_populateUserTemplate(filtered)"],
    filter: function filter() {
      this.where = "";
    },
    _computeFiltered: function _computeFiltered(
      items,
      where,
      like,
      caseSensitive
    ) {
      var regex = null;
      if (caseSensitive) {
        regex = new RegExp(like);
      } else {
        regex = new RegExp(like, "i");
      }
      var filtered = [];
      if (this.f) {
        var customFunction = this.f.bind(this);
        filtered = items.filter(customFunction);
      } else {
        var decompose = this._decomposeWhere.bind(this);
        filtered = items.filter(function(item) {
          if ("object" == babelHelpers.typeof(item)) {
            var decomposed = decompose(where, item);
            if ("undefined" == typeof decomposed && "" != where) {
              console.warn(
                "grafitto-filter was unable to find a property in '" +
                  where +
                  "'"
              );
            }
            return regex.test(decomposed);
          }
          if ("string" == typeof item) {
            return regex.test(item);
          }
          if ("number" == typeof item) {
            return regex.test(item.toString());
          }
        });
      }
      return filtered;
    },
    _populateUserTemplate: function _populateUserTemplate(filtered) {
      if (this.ctor) {
        this.__clone[this.as] = filtered;
        return;
      }
      this._userTemplate = this.queryEffectiveChildren("template");
      if (!this._userTemplate) {
        console.warn(
          "grafitto-filter requires a template to be provided in light-dom"
        );
      }
      this.templatize(this._userTemplate);
      this.__clone = this.stamp(null);
      this.__clone[this.as] = filtered;
      (0, _polymerDom.dom)(this).appendChild(this.__clone);
    },
    _decomposeWhere: function _decomposeWhere(where, item) {
      return where.split(".").reduce(function(a, b) {
        return a && a[b];
      }, item);
    },
    _onFilter: function _onFilter() {
      this.fire("filter");
    }
  });
});
