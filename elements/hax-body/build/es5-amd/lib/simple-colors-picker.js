define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/iron-icons/iron-icons.js",
  "../node_modules/@polymer/iron-icons/image-icons.js",
  "./simple-colors-picker-swatch.js",
  "../node_modules/@lrnwebcomponents/simple-colors/simple-colors.js"
], function(
  _polymerLegacy,
  _ironIcons,
  _imageIcons,
  _simpleColorsPickerSwatch,
  _simpleColors
) {
  "use strict";
  function _templateObject_5029f020f72011e8896bf72847fe39df() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n  <custom-style>\n    <style is="custom-style">\n      :host {\n        display: inline-block;\n        position: relative;\n      }\n      :host, :host #button, :host #palette {\n        margin: 0;\n        padding: 0;\n      }\n      :host #collapse {\n        position: absolute;\n        top: var(--simple-colors-picker-preview-size, 20px);\n        margin-top: 12px;\n      }\n      :host([disabled]) #collapse,\n      :host([collapsed]) #collapse {\n        height: 0;\n        overflow: hidden;\n        transition: all 0.25s;\n        transition-delay: 0.25s;\n      }\n      :host #palette {\n        position: absolute;\n        left: 0;\n        right: 0;\n        display: table;\n        border-collapse: collapse;\n        z-index: 1000;\n        border: 1px solid;\n        border-color: var(--simple-colors-picker-button-border-color, --simple-colors-background3);\n      }\n      :host .row {\n        display: table-row;\n      }\n      :host simple-colors-picker-swatch {\n        display: table-cell;\n        padding-top: var(--simple-colors-picker-swatch-size, 20px);\n        padding-left: var(--simple-colors-picker-swatch-size, 20px);\n      }\n      :host simple-colors-picker-swatch[disabled] {\n        display: none;\n      }\n      :host .sr-only {\n        display: table-cell;\n        font-size: 0;\n      }\n      :host #button {\n        display: flex;\n        align-items: center;\n        border: 1px solid;\n        border-radius: 4px;\n        color: var(--simple-colors-picker-button-color, --simple-colors-foreground2);\n        border-color: var(--simple-colors-picker-button-border-color, --simple-colors-background3);\n        background-color: var(--simple-colors-picker-button-bg-color, --simple-colors-background2);\n      }\n      :host([disabled]) #button, \n      :host #button[disabled] {\n        color: var(--simple-colors-picker-button-disabled-color, --simple-colors-foreground4);\n        border-color: var(--simple-colors-picker-button-disabled-border-color, --simple-colors-background5);\n        background-color: var(--simple-colors-picker-button-disabled-bg-color, --simple-colors-background4);\n        cursor: not-allowed;\n      }\n      :host(:not([disabled])) #button:focus,\n      :host(:not([disabled])) #button:hover {\n        color: var(--simple-colors-picker-button-hover-color, --simple-colors-foreground1);\n        border-color: var(--simple-colors-picker-button-hover-color, --simple-colors-background5);\n        background-color: var(--simple-colors-picker-button-hover-bg-color, --simple-colors-background1);\n      }\n      :host #button > div {\n        margin: 5px;\n        border: 1px solid;\n        flex-grow: 1;\n        border-color: var(--simple-colors-picker-button-hover-color, --simple-colors-background5);\n        display: inline-block;\n      }\n      :host #button > div, :host #button > div iron-icon {\n        width: var(--simple-colors-picker-preview-size, 20px);\n        height: var(--simple-colors-picker-preview-size, 20px);\n      }\n      :host(:not([collapsed])) #icon {\n        transform: rotate(-90deg);\n        transition: transform 0.25s;\n      }\n      :host #empty {\n        padding: 15px;\n      }\n      @media screen and (max-width: 600px) {\n        :host {\n          position: static;\n        }\n        :host #collapse {\n          top: 0;\n          margin-top: 0;\n          position: relative;\n        } \n        :host #palette {\n          position: sticky;\n        }  \n      }\n    </style>\n  </custom-style>\n  <button id="button" label="[[label]]" disabled$="[[disabled]]">\n    <div id="swatch" style="[[selectedStyle]]"><iron-icon id="texture" icon="image:texture"></iron-icon></div>\n    <span id="icon"><iron-icon icon="arrow-drop-down"></iron-icon></span>\n  </button>\n  <div id="collapse" aria-collapsed="[[collapse]]">\n    <div id="palette">\n      <div id="empty">No colors available.</div>\n      <template id="rows" is="dom-repeat" items="[[swatches]]" as="row" index-as="level">\n        <div class="row">\n          <span id="level" class="sr-only">lightness level [[level]]</span>\n          <template id="swatches" is="dom-repeat" items="[[row]]" as="swatch" index-as="order">\n            <simple-colors-picker-swatch aria-describedby="level" disabled="[[disabled]]" hex="[[swatch.hex]]" label="[[swatch.label]]" level="[[swatch.level]]" order="[[order]]" role="button" selected="[[swatch.selected]]" tabindex="0">\n            </simple-colors-picker-swatch>\n          </template>\n        </div>\n      </template>\n    </div>\n  </div>\n'
      ],
      [
        '\n  <custom-style>\n    <style is="custom-style">\n      :host {\n        display: inline-block;\n        position: relative;\n      }\n      :host, :host #button, :host #palette {\n        margin: 0;\n        padding: 0;\n      }\n      :host #collapse {\n        position: absolute;\n        top: var(--simple-colors-picker-preview-size, 20px);\n        margin-top: 12px;\n      }\n      :host([disabled]) #collapse,\n      :host([collapsed]) #collapse {\n        height: 0;\n        overflow: hidden;\n        transition: all 0.25s;\n        transition-delay: 0.25s;\n      }\n      :host #palette {\n        position: absolute;\n        left: 0;\n        right: 0;\n        display: table;\n        border-collapse: collapse;\n        z-index: 1000;\n        border: 1px solid;\n        border-color: var(--simple-colors-picker-button-border-color, --simple-colors-background3);\n      }\n      :host .row {\n        display: table-row;\n      }\n      :host simple-colors-picker-swatch {\n        display: table-cell;\n        padding-top: var(--simple-colors-picker-swatch-size, 20px);\n        padding-left: var(--simple-colors-picker-swatch-size, 20px);\n      }\n      :host simple-colors-picker-swatch[disabled] {\n        display: none;\n      }\n      :host .sr-only {\n        display: table-cell;\n        font-size: 0;\n      }\n      :host #button {\n        display: flex;\n        align-items: center;\n        border: 1px solid;\n        border-radius: 4px;\n        color: var(--simple-colors-picker-button-color, --simple-colors-foreground2);\n        border-color: var(--simple-colors-picker-button-border-color, --simple-colors-background3);\n        background-color: var(--simple-colors-picker-button-bg-color, --simple-colors-background2);\n      }\n      :host([disabled]) #button, \n      :host #button[disabled] {\n        color: var(--simple-colors-picker-button-disabled-color, --simple-colors-foreground4);\n        border-color: var(--simple-colors-picker-button-disabled-border-color, --simple-colors-background5);\n        background-color: var(--simple-colors-picker-button-disabled-bg-color, --simple-colors-background4);\n        cursor: not-allowed;\n      }\n      :host(:not([disabled])) #button:focus,\n      :host(:not([disabled])) #button:hover {\n        color: var(--simple-colors-picker-button-hover-color, --simple-colors-foreground1);\n        border-color: var(--simple-colors-picker-button-hover-color, --simple-colors-background5);\n        background-color: var(--simple-colors-picker-button-hover-bg-color, --simple-colors-background1);\n      }\n      :host #button > div {\n        margin: 5px;\n        border: 1px solid;\n        flex-grow: 1;\n        border-color: var(--simple-colors-picker-button-hover-color, --simple-colors-background5);\n        display: inline-block;\n      }\n      :host #button > div, :host #button > div iron-icon {\n        width: var(--simple-colors-picker-preview-size, 20px);\n        height: var(--simple-colors-picker-preview-size, 20px);\n      }\n      :host(:not([collapsed])) #icon {\n        transform: rotate(-90deg);\n        transition: transform 0.25s;\n      }\n      :host #empty {\n        padding: 15px;\n      }\n      @media screen and (max-width: 600px) {\n        :host {\n          position: static;\n        }\n        :host #collapse {\n          top: 0;\n          margin-top: 0;\n          position: relative;\n        } \n        :host #palette {\n          position: sticky;\n        }  \n      }\n    </style>\n  </custom-style>\n  <button id="button" label="[[label]]" disabled\\$="[[disabled]]">\n    <div id="swatch" style="[[selectedStyle]]"><iron-icon id="texture" icon="image:texture"></iron-icon></div>\n    <span id="icon"><iron-icon icon="arrow-drop-down"></iron-icon></span>\n  </button>\n  <div id="collapse" aria-collapsed="[[collapse]]">\n    <div id="palette">\n      <div id="empty">No colors available.</div>\n      <template id="rows" is="dom-repeat" items="[[swatches]]" as="row" index-as="level">\n        <div class="row">\n          <span id="level" class="sr-only">lightness level [[level]]</span>\n          <template id="swatches" is="dom-repeat" items="[[row]]" as="swatch" index-as="order">\n            <simple-colors-picker-swatch aria-describedby="level" disabled="[[disabled]]" hex="[[swatch.hex]]" label="[[swatch.label]]" level="[[swatch.level]]" order="[[order]]" role="button" selected="[[swatch.selected]]" tabindex="0">\n            </simple-colors-picker-swatch>\n          </template>\n        </div>\n      </template>\n    </div>\n  </div>\n'
      ]
    );
    _templateObject_5029f020f72011e8896bf72847fe39df = function _templateObject_5029f020f72011e8896bf72847fe39df() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_5029f020f72011e8896bf72847fe39df()
    ),
    is: "simple-colors-picker",
    listeners: {
      "click-swatch": "_onClickSwatch",
      "previous-swatch": "_onPreviousSwatch",
      "next-swatch": "_onNextSwatch",
      "previous-level": "_onPreviousLevel",
      "next-level": "_onNextLevel"
    },
    properties: {
      theme: { type: String, value: null },
      contrast: { type: String, value: null },
      contrastLargeText: { type: Boolean, value: !1 },
      disabled: { type: Boolean, value: !1, reflectToAttribute: !0 },
      collapsed: { type: Boolean, value: !0, reflectToAttribute: !0 },
      label: { type: String, value: "Pick a color." },
      swatches: { type: Array, value: [] },
      value: { type: Object, value: null },
      selectedStyle: { type: String, computed: "_setSelectedStyle(value)" }
    },
    ready: function ready() {
      var root = this;
      root.updateSwatches(root.contrast, root.contrastLargeText);
      root.$.button.addEventListener("click", function() {
        root.toggleCollapse();
      });
      root.$.button.addEventListener("keyup", function(e) {
        if (13 === e.keyCode || 32 === e.keyCode) root.toggleCollapse(!1);
      });
    },
    updateSwatches: function updateSwatches(contrast, contrastLargeText) {
      contrast = null !== contrast ? contrast : this.contrast;
      contrastLargeText =
        null !== contrastLargeText ? contrastLargeText : this.contrastLargeText;
      this.contrast = contrast;
      this.contrastLargeText = contrastLargeText;
      var root = this,
        hasContrast = contrast !== void 0 && null !== contrast,
        isColor = !1,
        level = 1,
        isForeground = !0,
        rows = [],
        count = 0;
      if (root.__hexCodes !== void 0 && null !== root.__hexCodes) {
        if (hasContrast) {
          var cssVariable = contrast
              .replace("--simple-colors-", "")
              .split("-theme-"),
            theme = 1 < cssVariable.length ? cssVariable[0] : "",
            colorLevelFg = cssVariable[cssVariable.length - 1].split("-");
          isColor = 1 < colorLevelFg[0].length;
          var levelFg = colorLevelFg[colorLevelFg.length - 1];
          (isForeground = -1 < levelFg.indexOf("foreground")),
            (size = !contrastLargeText);
          level = levelFg[levelFg.length - 1];
        }
        for (var i = 0, swatches; i < root.__hexCodes.colorLevels.length; i++) {
          swatches = [];
          for (var property in root.__hexCodes) {
            var temp =
                isColor || "grey" !== property
                  ? root.__wcagaa.colors
                  : root.__wcagaa.greys,
              highestLevel = contrastLargeText
                ? temp.large[parseInt(level) - 1]
                : temp.small[parseInt(level) - 1];
            if (
              "colorLevels" !== property &&
              "accent" !== property &&
              root.__hexCodes.hasOwnProperty(property)
            ) {
              var disabledColor = isColor && "grey" !== property,
                disabledLevel = !1,
                lightFg =
                  ("light" === root.theme && isForeground) ||
                  ("dark" === root.theme && !isForeground);
              if (!lightFg && (5 > i || 10 - i > highestLevel)) {
                disabledLevel = !0;
              } else if (lightFg && (4 < i || i + 1 > highestLevel)) {
                disabledLevel = !0;
              }
              if (!hasContrast || (!disabledColor && !disabledLevel)) {
                swatches.push({
                  label: property,
                  level: i + 1,
                  hex: root.__hexCodes[property][i],
                  selected: !1
                });
                count++;
              }
            }
          }
          rows.push(swatches);
        }
      }
      root.$.empty.style.display = 0 < count ? "none" : "block";
      root.$.rows.style.display = 0 === count ? "none" : "block";
      root._updateSelection(rows);
    },
    _onClickSwatch: function _onClickSwatch(e) {
      console.log("_onClickSwatch", e);
      var dark = "dark" === this.theme,
        theme = null === this.theme ? "" : "-" + this.theme + "-theme",
        color = e.detail.label
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .toLowerCase(),
        isForeground,
        suffix,
        level = parseInt(e.detail.level),
        hex = e.detail.hex;
      if (!dark) {
        if (6 > e.detail.level) {
          isForeground = !0;
        } else {
          isForeground = !1;
          level = 11 - level;
        }
      } else {
        if (6 > e.detail.level) {
          isForeground = !1;
        } else {
          isForeground = !0;
          level = 11 - level;
        }
      }
      if ("dark" === theme) isForeground = !isForeground;
      color = "grey" === color ? "" : color;
      suffix = isForeground ? "foreground" : "background";
      this.value = {
        cssVariable:
          "--simple-colors" + theme + "-" + color + "-" + suffix + level,
        hexCode: hex
      };
      this._updateSelection(this.swatches);
      this.toggleCollapse(!0);
    },
    _updateSelection: function _updateSelection(swatches) {
      var root = this,
        hasHex =
          root.value !== void 0 &&
          null !== root.value &&
          root.value.hexCode !== void 0;
      if (swatches !== void 0 && 0 < swatches.length) {
        for (var rows = [], i = 0, row; i < swatches.length; i++) {
          row = [];
          for (var j = 0, swatch; j < swatches[i].length; j++) {
            swatch = swatches[i][j];
            swatch.selected = hasHex && root.value.hexCode === swatch.hex;
            row.push(swatch);
          }
          rows.push(row);
        }
        root.set("swatches", []);
        root.$.rows.render();
        root.set("swatches", rows);
        root.$.rows.render();
      }
    },
    _onPreviousSwatch: function _onPreviousSwatch(e) {
      var target = this.shadowRoot.querySelector(
        'simple-colors-picker-swatch[order="' +
          (e.detail.order - 1) +
          '"][level="' +
          e.detail.level +
          '"]'
      );
      if (null !== target) target.focus();
    },
    _onNextSwatch: function _onNextSwatch(e) {
      var target = this.shadowRoot.querySelector(
        'simple-colors-picker-swatch[order="' +
          (e.detail.order + 1) +
          '"][level="' +
          e.detail.level +
          '"]'
      );
      if (null !== target) target.focus();
    },
    _onPreviousLevel: function _onPreviousLevel(e) {
      var target = this.shadowRoot.querySelector(
        'simple-colors-picker-swatch[order="' +
          e.detail.order +
          '"][level="' +
          (e.detail.level + 1) +
          '"]'
      );
      if (null !== target) target.focus();
    },
    _onNextLevel: function _onNextLevel(e) {
      var target = this.shadowRoot.querySelector(
        'simple-colors-picker-swatch[order="' +
          e.detail.order +
          '"][level="' +
          (e.detail.level - 1) +
          '"]'
      );
      if (null !== target) target.focus();
    },
    _setSelectedStyle: function _setSelectedStyle(value) {
      var hex = null !== value ? value.hexCode : "transparent";
      this.$.texture.style.display = null !== value ? "none" : "block";
      if (this.__init !== void 0) {
        this.__init = !0;
      } else {
        this.fire("change", this.value);
      }
      return "background: " + hex + ";";
    },
    toggleCollapse: function toggleCollapse(collapse) {
      collapse = collapse !== void 0 ? collapse : !this.collapsed;
      this.collapsed = collapse;
      this.fire("toggleCollapse", this);
    }
  });
});
