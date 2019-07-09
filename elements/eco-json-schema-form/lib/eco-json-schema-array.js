import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { dom } from "@polymer/polymer/lib/legacy/polymer.dom.js";
import "@polymer/iron-flex-layout/iron-flex-layout-classes.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-icons/editor-icons.js";
import "@polymer/paper-icon-button/paper-icon-button.js";
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";
import { AppLocalizeBehavior } from "@polymer/app-localize-behavior/app-localize-behavior.js";
import { mixinBehaviors } from "@polymer/polymer/lib/legacy/class.js";
import "./eco-json-schema-boolean.js";
import "./eco-json-schema-enum.js";
import "./eco-json-schema-input.js";
import "./eco-json-schema-object.js";
import "./eco-json-schema-file.js";
/**
`eco-json-schema-array` takes in a JSON schema of type array and builds a form,
exposing a `value` property that represents an array described by the schema.

Please see the `eco-json-schema-object` documentation for further information.

@group eco Elements
@element eco-json-schema-array
* @demo demo/index.html
*/
class EcoJsonSchemaArray extends mixinBehaviors(
  [AppLocalizeBehavior],
  PolymerElement
) {
  static get tag() {
    return "eco-json-schema-array";
  }
  static get template() {
    return html`
      <custom-style>
        <style is="custom-style" include="iron-flex iron-flex-alignment">
          :host ([hidden]) {
            display: none;
            color: var(--eco-json-form-color);
            background-color: var(--eco-json-form-bg);
            font-family: var(--eco-json-form-font-family);
          }
          :host #legend {
            transition: all 0.5s;
            color: var(--eco-json-form-faded-color);
          }
          :host(:focus) #legend,
          :host(:focus-within) #legend {
            color: var(--eco-json-form-active-color);
          }
          :host #fieldset {
            border-radius: var(--eco-json-form-border-radius);
            border: 1px solid var(--eco-json-form-faded-color);
            transition: all 0.5s;
          }
          :host .array-item-button {
            color: var(--eco-json-form-faded-color);
            background-color: var(--eco-json-form-bg);
            text-transform: none;
            margin-bottom: 0;
          }
          :host .array-item-button:focus,
          :host .array-item-button:hover {
            color: var(--eco-json-form-active-color);
          }
          :host .add-array-item iron-icon {
            padding: 8px;
          }
          :host .add-array-item {
            color: var(--eco-json-form-add-color);
            border-radius: 0 0 var(--eco-json-form-border-radius);
            border: 1px solid var(--eco-json-form-bg);
            margin: 0;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          :host .add-array-item:focus,
          :host .add-array-item:hover {
            color: var(--eco-json-form-add-color);
            background-color: var(--eco-json-form-faded-bg);
            border: 1px solid var(--eco-json-form-faded-color);
          }
          :host .remove-array-item {
            color: var(--eco-json-form-remove-color);
            background-color: var(--eco-json-form-bg);
            margin: 15px 0 0 0;
            border-radius: 100%;
          }
          :host .remove-array-item:focus,
          :host .remove-array-item:hover {
            color: var(--eco-json-form-remove-color);
            background-color: var(--eco-json-form-faded-bg);
          }
          :host a11y-collapse-group {
            margin: 0;
            border-radius: var(--eco-json-form-border-radius);
            --a11y-collapse-border: 1px solid var(--eco-json-form-faded-color);
          }
          :host a11y-collapse {
            border: 1px solid var(--eco-json-form-bg);
            --a11y-collapse-heading: {
              color: var(--eco-json-form-faded-color);
              background-color: var(--eco-json-form-bg);
              font-weight: normal;
              margin: 0;
            }
          }
          :host a11y-collapse:focus,
          :host a11y-collapse:hover,
          :host a11y-collapse[expanded] {
            border: 1px solid var(--eco-json-form-faded-color);
            --a11y-collapse-heading: {
              color: var(--eco-json-form-color);
              background-color: var(--eco-json-form-faded-bg);
              font-weight: normal;
              margin: 0;
            }
          }
          :host p[slot="heading"] {
            margin: 0;
          }
          :host div[slot="content"] > div {
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
          }
          :host eco-json-schema-object {
            flex: 1 0 auto;
          }
        </style>
      </custom-style>
      <fieldset>
        <legend id="legend" class="flex" hidden\$="[[!label]]">
          [[label]]
        </legend>
        <a11y-collapse-group
          id="form"
          icon="settings"
          class="vertical flex layout"
          global-options="[[globalOptions]]"
        >
          <template
            is="dom-repeat"
            items="[[__validatedSchema]]"
            as="item"
            restamp
          >
            <a11y-collapse id="item-[[index]]">
              <p slot="heading">{{item.value.name}}</p>
              <div slot="content">
                <div>
                  <eco-json-schema-object
                    id="schemaobject"
                    autofocus$="[[autofocus]]"
                    hide-line-numbers$="[[hideLineNumbers]]"
                    on-form-changed="_formChanged"
                    schema="[[item]]"
                    value="{{item.value}}"
                  >
                  </eco-json-schema-object>
                  <paper-icon-button
                    id="remove-[[index]]"
                    icon="icons:delete"
                    aria-label="Remove this item"
                    aria-describedby="item-[[index]]"
                    class="remove-array-item array-item-button"
                    controls="item-[[index]]"
                    on-tap="_onRemoveItem"
                    role="button"
                  >
                  </paper-icon-button>
                  <paper-tooltip for="remove-[[index]]"
                    >Remove this item</paper-tooltip
                  >
                </div>
              </div>
            </a11y-collapse>
          </template>
        </a11y-collapse-group>
        <paper-button
          class="add-array-item array-item-button"
          on-click="_onAddItem"
          role="button"
        >
          Add an item
          <iron-icon icon="add-circle"></iron-icon>
        </paper-button>
      </fieldset>
    `;
  }
  static get properties() {
    return {
      /**
       * automatically set focus on the first field if that field has autofocus
       */
      autofocus: {
        type: "Boolean",
        value: false
      },
      /**
       * hide code-editor line numbers
       */
      hideLineNumbers: {
        type: Boolean,
        value: false
      },
      schema: {
        type: Object,
        notify: true,
        observer: "_schemaChanged"
      },
      label: {
        type: String
      },
      globalOptions: {
        type: Object,
        value: {
          icon: "settings",
          tooltip: "configure item"
        }
      },
      _schemaArrayItems: {
        type: Array,
        notify: true
      },
      /**
       * Fields to conver to JSON Schema.
       */
      __validatedSchema: {
        type: Array,
        value: []
      }
    };
  }
  _onAddItem(e) {
    console.log("_onAddItem", this.schema);
    this.push("schema.value", {});
    this._setValues();
  }
  _onRemoveItem(e) {
    let id = e.target.controls.split("-");
    this.splice("schema.value", id[1], 1);
    this._setValues();
  }
  /**
   * when form changes, sets focus on the first field if this has auto-focus
   */
  _formChanged(e) {
    this.dispatchEvent(
      new CustomEvent("array-form-changed", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: e.detail
      })
    );
  }

  /**
   * fires when the fields array changes
   * @param {object} oldValue the old value
   * @param {object} newValue the new value
   */
  _schemaChanged(oldValue, newValue) {
    let root = this;
    //prevent a potential feedback loop
    if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
      this._setValues();
    }
    this.dispatchEvent(
      new CustomEvent("array-schema-changed", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: root
      })
    );
  }
  /**
   * when either the fields or the value changes, updates the schema and form to match
   */
  _setValues() {
    let schema = [];
    for (let i = 0; i < this.schema.value.length; i++) {
      let item = this.schema.value[i];
      schema[i] = JSON.parse(JSON.stringify(this.schema.items));
      for (let prop in item) {
        if (schema[i].properties[prop])
          schema[i].properties[prop].value = item[prop];
      }
    }
    this.__validatedSchema = [];
    this.__validatedSchema = schema;
  }
}
window.customElements.define(EcoJsonSchemaArray.tag, EcoJsonSchemaArray);
export { EcoJsonSchemaArray };
