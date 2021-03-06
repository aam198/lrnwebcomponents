/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { RichTextEditorPickerBehaviors } from "./rich-text-editor-picker.js";
import "@lrnwebcomponents/simple-picker/lib/simple-symbol-picker.js";
/**
 * `rich-text-editor-symbol-picker`
 * a symbol picker for the rich-text-editor
 *
 * @element rich-text-editor-symbol-picker
 * @demo ./demo/buttons.html
 */
class RichTextEditorSymbolPicker extends RichTextEditorPickerBehaviors(
  LitElement
) {
  /**
   * Store the tag name to make it easier to obtain directly.
   *
   */
  static get tag() {
    return "rich-text-editor-symbol-picker";
  }

  static get styles() {
    return [...super.styles];
  }

  // render function for template
  render() {
    return html`
      <simple-symbol-picker
        id="button"
        ?allow-null="${this.allowNull}"
        class="rtebutton ${this.toggled ? "toggled" : ""}"
        ?disabled="${this.disabled}"
        controls="${super.controls}"
        @mouseover="${this._pickerFocus}"
        @keydown="${this._pickerFocus}"
        @value-changed="${this._pickerChange}"
        tabindex="0"
        ?title-as-html="${this.titleAsHtml}"
      >
        <span id="label" class="${super.labelStyle}">${this.currentLabel}</span>
      </simple-symbol-picker>
      <simple-tooltip id="tooltip" for="button"
        >${this.currentLabel}</simple-tooltip
      >
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      /**
       * Symbol types to include
       */
      symbolTypes: {
        name: "symbolTypes",
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.icon = "editor:functions";
    this.label = "Insert symbol";
    this.symbolTypes = ["symbols", "math", "characters", "greek", "misc"];
    this.titleAsHtml = true;
    this.command = "insertHTML";
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "titleAsHtml" && !this.titleAsHtml)
        this.titleAsHtml = true;
    });
  }

  /**
   * Handles default options loaded from an external js file
   */
  _setOptions() {}
}
window.customElements.define(
  RichTextEditorSymbolPicker.tag,
  RichTextEditorSymbolPicker
);
export { RichTextEditorSymbolPicker };
