!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/license-element/license-element.js"),require("@lrnwebcomponents/utils/utils.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/license-element/license-element.js","@lrnwebcomponents/utils/utils.js"],t):t((e=e||self).CitationElement={},e.litElement_js,e.schemaBehaviors_js,e.licenseElement_js,e.utils_js)}(this,function(e,t,n,i,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return h(this,n)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function m(){var e=y(['\n        :host {\n          display: block;\n          color: var(--license-text-color);\n        }\n        :host([display-method="footnote"]) {\n          visibility: hidden;\n          opacity: 0;\n        }\n        :host([display-method="popup"]) {\n          display: block;\n        }\n        .license-link {\n          font-size: 16px;\n          line-height: 16px;\n          font-style: italic;\n        }\n        .citation-date {\n          font-size: 16px;\n          line-height: 16px;\n          font-style: italic;\n        }\n        .license-link img {\n          margin-right: 8px;\n        }\n      ']);return m=function(){return e},e}function g(){var e=y(['\n      <meta\n        about="','"\n        property="cc:attributionUrl"\n        content="','"\n      />\n      <meta\n        about="','"\n        property="cc:attributionName"\n        typeof="oer:Text"\n        content="','"\n      />\n      <meta\n        rel="cc:license"\n        href="','"\n        content="License: ','"\n      />\n      <cite\n        ><a target="_blank" rel="noopener noreferrer" href="','"\n          >',"</a\n        >\n        by ",', licensed under\n        <a\n          class="license-link"\n          rel="noopener noreferrer"\n          target="_blank"\n          href="','"\n          ><img\n            loading="lazy"\n            alt="',' graphic"\n            src="','"\n            ?hidden="','"\n            width="44px"\n            height="16px"\n          />','</a\n        >. Accessed <span class="citation-date">',"</span>.</cite\n      >\n    "]);return g=function(){return e},e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(l,n.SchemaBehaviors(t.LitElement));var c=d(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=c.call(this)).scope="sibling",e.source="",e}return s(l,[{key:"render",value:function(){return t.html(g(),this.relatedResource,this.source,this.relatedResource,this.title,this.licenseLink,this.licenseName,this.source,this.title,this.creator,this.licenseLink,this.licenseName,this.licenseImage,!this.licenseImage,this.licenseName,this.date)}}],[{key:"styles",get:function(){return[t.css(m())]}},{key:"tag",get:function(){return"citation-element"}}]),s(l,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"scope"==n&&t._scopeChanged(t[n]),"license"==n&&t._licenseUpdated(t[n]),["relatedResource","licenseLink"].includes(n)&&(t._aboutLink=t._generateAboutLink(t.relatedResource,t.licenseLink)),"source"==n&&(t._licenseLink=t._generateLicenseLink(t.source))})}},{key:"_generateLicenseLink",value:function(e){this._licenseLink&&document.head.removeChild(this._licenseLink);var t=document.createElement("link");return t.setAttribute("typeof","resource"),t.setAttribute("rel","license"),t.setAttribute("src",e),document.head.appendChild(t),t}},{key:"_generateAboutLink",value:function(e,t){this._aboutLink&&document.head.removeChild(this._aboutLink);var n=document.createElement("link");return n.setAttribute("about",e),n.setAttribute("property","cc:license"),n.setAttribute("content",t),document.head.appendChild(n),n}},{key:"_scopeChanged",value:function(e){if("sibling"===e&&null!==this.previousElementSibling){if(this.previousElementSibling.getAttribute("resource"))this.relatedResource=this.previousElementSibling.getAttribute("resource");else{var t=r.generateResourceID();this.relatedResource=t,this.previousElementSibling.setAttribute("resource",t)}this.previousElementSibling.setAttribute("prefix",this.getAttribute("prefix"))}else if("parent"===e){if(this.parentNode.getAttribute("resource"))this.relatedResource=this.parentNode.getAttribute("resource");else{var n=r.generateResourceID();this.relatedResource=n,this.parentNode.setAttribute("resource",n)}this.parentNode.setAttribute("prefix",this.getAttribute("prefix"))}}},{key:"_licenseUpdated",value:function(e){if("undefined"!==o(e)){var t=new i.licenseList;"undefined"!==o(t[e])&&(this.licenseName=t[e].name,this.licenseLink=t[e].link,this.licenseImage=t[e].image)}}}],[{key:"properties",get:function(){return a(a({},b(p(l),"properties",this)),{},{title:{type:String},scope:{type:String},displayMethod:{type:String,reflect:!0,attribute:"display-method"},creator:{type:String},source:{type:String},date:{type:String},licenseName:{type:String,attribute:"license-name"},licenseLink:{type:String,attribute:"license-link"},license:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Citation",description:"A basic citation element with 3 presentation modes",icon:"editor:title",color:"grey",groups:["Content","Copyright"],handles:[{type:"citation",source:"source",title:"title",author:"creator",license:"license",accessDate:"date"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"The title of the work being cited.",inputMethod:"textfield",icon:"editor:title"},{property:"source",title:"Source link",description:"The source url for the element this is citing.",inputMethod:"textfield",icon:"link",validationType:"url"},{property:"date",title:"Date accessed",description:"The date this was accessed.",inputMethod:"textfield",icon:"link"},{property:"scope",title:"Scope",description:"Scope of what to cite.",inputMethod:"select",options:{sibling:"Sibling element",parent:"Parent element"},icon:"code"},{property:"license",title:"License",description:"The source url for the element this is citing.",inputMethod:"select",options:new i.licenseList("select"),icon:"link"},{property:"creator",title:"Creator",description:"Who made or owns this.",inputMethod:"textfield",icon:"link"}],advanced:[]}}}}]),l}();window.customElements.define(v.tag,v),e.CitationElement=v,Object.defineProperty(e,"__esModule",{value:!0})});
