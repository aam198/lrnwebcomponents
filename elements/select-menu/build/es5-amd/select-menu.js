define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js",
  "./node_modules/@polymer/paper-item/paper-item.js",
  "./node_modules/@polymer/paper-listbox/paper-listbox.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_28b80730ecf211e88ea95f916473248a() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n  <custom-style>\n    <style is="custom-style">\n      paper-dropdown-menu, paper-listbox {\n        width: 250px;\n      }\n      paper-dropdown-menu {\n        height: 200px;\n        margin: auto;\n        display: block;\n      }\n    </style>\n  </custom-style>\n  <paper-dropdown-menu id="menu" label$="[[label]]" on-tap="_menubuttonTap" on-selected-item-changed="_setSelectedValue">\n    <paper-listbox id="listbox" slot="dropdown-content" selected="{{selectedIndex}}">\n      <slot></slot>\n    </paper-listbox>\n  </paper-dropdown-menu>\n'
      ],
      [
        '\n  <custom-style>\n    <style is="custom-style">\n      paper-dropdown-menu, paper-listbox {\n        width: 250px;\n      }\n      paper-dropdown-menu {\n        height: 200px;\n        margin: auto;\n        display: block;\n      }\n    </style>\n  </custom-style>\n  <paper-dropdown-menu id="menu" label\\$="[[label]]" on-tap="_menubuttonTap" on-selected-item-changed="_setSelectedValue">\n    <paper-listbox id="listbox" slot="dropdown-content" selected="{{selectedIndex}}">\n      <slot></slot>\n    </paper-listbox>\n  </paper-dropdown-menu>\n'
      ]
    );
    _templateObject_28b80730ecf211e88ea95f916473248a = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_28b80730ecf211e88ea95f916473248a()
    ),
    is: "select-menu",
    properties: {
      label: { type: String, value: "Select an option." },
      value: { type: String, value: null },
      selectedIndex: {
        type: Number,
        reflectToAttribute: !0,
        notify: !0,
        computed: "_getSelectedIndex()"
      }
    },
    _setSelectedValue: function _setSelectedValue(e) {
      if (null !== e.detail.value) {
        var val = e.detail.value.getAttribute("value");
        this.setAttribute("value", val);
        this.fire("change", { value: val });
      }
    },
    _getSelectedIndex: function _getSelectedIndex() {
      this.__items = this.getElementsByTagName("paper-item");
      for (var i = 0; i < this.__items.length; i++) {
        console.log(
          this.value,
          this.__items[i],
          this.__items[i].getAttribute("value")
        );
        if (this.value == this.__items[i].getAttribute("value")) {
          return i;
        }
      }
      return null;
    }
  });
});
