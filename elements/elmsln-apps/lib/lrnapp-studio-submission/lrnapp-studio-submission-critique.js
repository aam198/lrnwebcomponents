import "./lrnapp-studio-submission-media-editoverlay.js";
import "./lrnapp-studio-submission-edit-images.js";
import "./lrnapp-studio-submission-edit-files.js";
import "./lrnapp-studio-submission-edit-video.js";
import "./lrnapp-studio-submission-edit-links.js";
import "./lrnapp-studio-submission-edit-textarea.js";
import "./lrnapp-studio-block.js";
import "./lrnapp-studio-submission-critique-panel.js";
Polymer({
  _template: `
    <style>
       :host {
        display: block;
      }

      .submission-critique {
        display: flex;
        justify-content: space-around;
      }

      .submission-critique-panel {
        flex: 1 1 auto;
        width: 100%;
        flex-wrap: nowrap;
        margin: .3em;
      }
    </style>
    <template is="dom-if" if="{{submission}}">
      <template is="dom-if" if="[[!edit]]">
        <div class="submission-critique">
          <!-- critique panel -->
          <div class="submission-critique-panel" id="crititque-panel">
            <lrnapp-studio-submission-display submission="[[submission.relationships.relatedSubmission]]"></lrnapp-studio-submission-display>
          </div>
          <!-- critique panel -->
          <div class="submission-critique-panel">
            <lrnapp-studio-submission-critique-panel submission="[[submission]]" edit="[[edit]]"></lrnapp-studio-submission-critique-panel>
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[edit]]">
        <vaadin-split-layout class="submission-critique">
          <!-- critique panel -->
          <div class="submission-critique-panel" id="crititque-panel">
            <lrnapp-studio-submission-display submission="[[submission.relationships.relatedSubmission]]"></lrnapp-studio-submission-display>
          </div>
          <!-- critique panel -->
          <div class="submission-critique-panel">
            <lrnapp-studio-submission-critique-panel submission="{{submission}}" edit="[[edit]]"></lrnapp-studio-submission-critique-panel>
          </div>
        </vaadin-split-layout>
      </template>
    </template>
`,

  is: "lrnapp-studio-submission-critique",

  properties: {
    submission: {
      type: Object,
      notify: true
    },
    edit: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },

  /**
   * Simple way to convert from object to array.
   */
  _toArray: function(obj) {
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  },

  ready: function() {}
});
