!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],t):t(e.ElmslnApps={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function c(){var e,t,n=(e=["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return c=function(){return n},n}var u=function(e){function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i(this,r(u).apply(this,arguments))}var f,p,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(u,t.PolymerElement),f=u,s=[{key:"template",get:function(){return t.html(c())}},{key:"properties",get:function(){return{}}},{key:"tag",get:function(){return"elmsln-apps"}}],(p=[{key:"connectedCallback",value:function(){l(r(u.prototype),"connectedCallback",this).call(this)}}])&&n(f.prototype,p),s&&n(f,s),u}();window.customElements.define(u.tag,u),e.ElmslnApps=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=elmsln-apps.umd.js.map