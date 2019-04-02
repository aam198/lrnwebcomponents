import { SelfCheck } from "./self-check.js";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";

window.StorybookUtilities.requestAvailability();

/**
 * add to the pattern library 
 */
/*const Pattern = {
  "of": "Pattern Library/Molecules/Layout",       //Patter library path
  "name": "Collapse"                              //Pattern name
  "file": require("raw-loader!./demo/index.html"),
  "replacements": []
};
window.StorybookUtilities.instance.addPattern(Pattern);*/

/**
 * add the live demo
 */
/*const Story = {
  "of": "a11y-collpase",                    //component folder
  "name": "a11y-collpase",                  //component tag
  "props": A11yCollapse.properties,         //component properties that will become knobs
  "slots": {                                //slots that will become knobs
    "heading":                              
      {
        "name": "heading",                  //slot name
        "type": "String",                   //slot type
        "value": `Click to expand me.`      //slot content
      }
  }, 
  "attr": ``,                               //attributes that won't become knobs
  "slotted": ``                             //slots that won't become knobs
}
window.StorybookUtilities.instance.addLiveDemo(Story);*/