define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/paper-button/paper-button.js",
  "../node_modules/@polymer/paper-icon-button/paper-icon-button.js",
  "../node_modules/@polymer/paper-tooltip/paper-tooltip.js",
  "../node_modules/@polymer/iron-icons/iron-icons.js",
  "../node_modules/@polymer/iron-icons/editor-icons.js",
  "../node_modules/@polymer/iron-icons/device-icons.js",
  "../node_modules/@polymer/iron-icons/hardware-icons.js",
  "../node_modules/@polymer/iron-icons/social-icons.js",
  "../node_modules/@polymer/iron-icons/av-icons.js",
  "../node_modules/@polymer/iron-icons/image-icons.js",
  "../node_modules/@polymer/iron-icons/maps-icons.js",
  "../node_modules/@polymer/neon-animation/neon-animation.js",
  "./hax-toolbar-item.js"
], function(
  _polymerLegacy,
  _paperButton,
  _paperIconButton,
  _paperTooltip,
  _ironIcons,
  _editorIcons,
  _deviceIcons,
  _hardwareIcons,
  _socialIcons,
  _avIcons,
  _imageIcons,
  _mapsIcons,
  _neonAnimation,
  _haxToolbarItem
) {
  "use strict";
  function _templateObject_50c9d9a0f72011e8896bf72847fe39df() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: inline-flex;\n      }\n      :host([menu]) {\n        display: flex;\n        width: 100%;\n      }\n    </style>\n    <hax-toolbar-item disabled="[[disabled]]" light="[[light]]" mini="[[mini]]" id="button" icon="[[icon]]" hidden$="[[!icon]]" icon-class="[[iconClass]]" on-tap="_fireEvent" tooltip="[[label]]" tooltip-direction="[[direction]]" default="[[default]]" menu="[[menu]]">\n      <slot></slot>\n    </hax-toolbar-item>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: inline-flex;\n      }\n      :host([menu]) {\n        display: flex;\n        width: 100%;\n      }\n    </style>\n    <hax-toolbar-item disabled="[[disabled]]" light="[[light]]" mini="[[mini]]" id="button" icon="[[icon]]" hidden\\$="[[!icon]]" icon-class="[[iconClass]]" on-tap="_fireEvent" tooltip="[[label]]" tooltip-direction="[[direction]]" default="[[default]]" menu="[[menu]]">\n      <slot></slot>\n    </hax-toolbar-item>\n'
      ]
    );
    _templateObject_50c9d9a0f72011e8896bf72847fe39df = function _templateObject_50c9d9a0f72011e8896bf72847fe39df() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_50c9d9a0f72011e8896bf72847fe39df()
    ),
    is: "hax-context-item",
    properties: {
      light: { type: Boolean, value: !1 },
      disabled: { type: Boolean, value: !1, reflectToAttribute: !0 },
      mini: { type: Boolean, value: !1 },
      menu: { type: Boolean, value: !1 },
      direction: { type: String, value: "top" },
      icon: {
        type: String,
        value: "editor:text-fields",
        reflectToAttribute: !0
      },
      iconClass: { type: String, value: "", reflectToAttribute: !0 },
      label: { type: String, value: "", reflectToAttribute: !0 },
      eventName: { type: String, value: "button", reflectToAttribute: !0 },
      inputMethod: { type: String, value: null, reflectToAttribute: !0 },
      propertyToBind: { type: String, value: null, reflectToAttribute: !0 },
      slotToBind: { type: String, value: null, reflectToAttribute: !0 },
      description: { type: String, reflectToAttribute: !0 },
      default: { type: Boolean, value: !1 },
      value: { type: String, value: "" }
    },
    _fireEvent: function _fireEvent(e) {
      this.fire("hax-context-item-selected", {
        target: this,
        eventName: this.eventName,
        value: this.value
      });
    }
  });
});
