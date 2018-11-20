import {
  html,
  Polymer
} from "./node_modules/@polymer/polymer/polymer-legacy.js";
import { dom } from "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js";
import { FlattenedNodesObserver } from "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js";
import { pathFromUrl } from "./node_modules/@polymer/polymer/lib/utils/resolve-url.js";
import "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
import "./node_modules/@lrnwebcomponents/es-global-bridge/es-global-bridge.js";
Polymer({
  _template: html`
    <style>
       :host {
        display: inline;
      }
    </style>
    [[prefix]] [[math]] [[suffix]]
`,
  is: "lrn-math",
  behaviors: [HAXBehaviors.PropertiesBehaviors],
  properties: {
    prefix: { type: String, value: "$$" },
    suffix: { type: String, value: "$$" },
    inline: { type: Boolean, value: !0, reflectToAttribute: !0 },
    math: { type: String },
    mathText: { type: String, observer: "_mathChanged" }
  },
  observers: ["_inlineChanged(inline)"],
  _inlineChanged: function(inline) {
    if (inline) {
      this.prefix = "\\(";
      this.suffix = "\\)";
    }
  },
  _mathChanged: function(newValue, oldValue) {
    if (newValue !== oldValue) {
      while (null !== dom(this).firstChild) {
        dom(this).removeChild(dom(this).firstChild);
      }
      let frag = document.createTextNode(newValue);
      dom(this).appendChild(frag);
    }
  },
  attached: function() {
    this.setHaxProperties({
      canScale: !0,
      canPosition: !0,
      canEditSource: !0,
      gizmo: {
        title: "Math",
        description: "Present math in a nice looking way.",
        icon: "places:all-inclusive",
        color: "grey",
        groups: ["Content"],
        handles: [
          { type: "math", math: "mathText" },
          { type: "inline", text: "mathText" }
        ],
        meta: { author: "LRNWebComponents" }
      },
      settings: {
        quick: [
          {
            property: "inline",
            title: "Inline",
            description: "Display this math inline",
            inputMethod: "boolean",
            icon: "remove"
          }
        ],
        configure: [
          {
            property: "mathText",
            title: "Math",
            description: "Math",
            inputMethod: "textfield",
            icon: "editor:format-quote"
          },
          {
            property: "inline",
            title: "Inline",
            description: "Display this math inline",
            inputMethod: "boolean",
            icon: "remove"
          }
        ],
        advanced: []
      }
    });
    const name = "mathjax",
      basePath = pathFromUrl(import.meta.url);
    window.addEventListener(
      `es-bridge-${name}-loaded`,
      this._mathjaxLoaded.bind(this)
    );
    window.ESGlobalBridge.requestAvailability();
    window.ESGlobalBridge.instance.load(
      name,
      `${basePath}lib/mathjax/latest.js`
    );
  },
  _mathjaxLoaded: function() {
    this._observer = new FlattenedNodesObserver(this, info => {
      this.math = info.addedNodes.map(node => node.textContent).toString();
      window.MathJax.Hub.Config({
        skipStartupTypeset: !0,
        jax: ["input/TeX", "output/HTML-CSS"],
        messageStyle: "none",
        tex2jax: { preview: "none" }
      });
      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, "lrn-math"]);
    });
  }
});
