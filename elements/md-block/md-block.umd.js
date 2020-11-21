!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/marked-element/marked-element.js"),require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/marked-element/marked-element.js","lit-element/lit-element.js"],t):t((e=e||self).MdBlock={},null,e.litElement_js)}(this,function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function p(e,t,r){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(){var e=d(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n      "]);return y=function(){return e},e}function m(){var e=d(['\n\n<div>\n  <marked-element markdown="','">\n    <div slot="markdown-html"></div>\n      <script type="text/markdown" .src="','"><\/script>\n  </marked-element>\n</div>']);return m=function(){return e},e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(n,r.LitElement);var t=s(n);function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=t.call(this)).markdown="",e.source="",e}return o(n,[{key:"render",value:function(){return r.html(m(),this.markdown,this.source?this.source:void 0)}}],[{key:"styles",get:function(){return[r.css(y())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Markdown",description:"A block of markdown content directly or remote loaded",icon:"icons:code",color:"yellow",groups:["Block"],handles:[{type:"markdown",source:"source",src:"source"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"markdown",title:"Markdown",description:"Raw markdown",inputMethod:"code-editor"},{property:"source",title:"Source",description:"Source file for markdown",inputMethod:"haxupload"}],advanced:[]},demoSchema:[{tag:"md-block",properties:{source:"https://raw.githubusercontent.com/elmsln/HAXcms/master/HAXDocs.md"},content:""}]}}},{key:"properties",get:function(){return u(u({},p(l(n),"properties",this)),{},{source:{type:String},markdown:{type:String}})}}]),o(n,null,[{key:"tag",get:function(){return"md-block"}}]),n}();window.customElements.define(b.tag,b),e.MdBlock=b,Object.defineProperty(e,"__esModule",{value:!0})});
