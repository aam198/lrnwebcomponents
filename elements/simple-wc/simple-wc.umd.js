!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).SimpleWc={},e.litElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(){var e,t,n=(e=["\n          /* this style helps ease FOUC w/ dynamic imports */\n          :host *:not(:defined) {\n            display: none;\n          }\n        "],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return f=function(){return n},n}function p(e){return e.replace(/([A-Z])/g,function(e){return"-".concat(e[0].toLowerCase())})}e.createSWC=function(e){var y=function(y){function d(){var t;for(var n in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),t=l(this,c(d).call(this)),e.callbacks)t[n]=e.callbacks[n];for(var r in e.data.values)t[r]=e.data.values[r];return setTimeout(function(){e.deps.map(function(e){import("../../".concat(e))})},0),t}var b,v,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(d,t.LitElement),b=d,h=[{key:"tag",get:function(){return e.name}},{key:"styles",get:function(){return[t.css(f()),e.css(this,t.css)]}},{key:"properties",get:function(){var t={};for(var r in e.data.values){t[r]={type:n(e.data.values[r])},t[r].type=t[r].type.charAt(0).toUpperCase()+t[r].type.slice(1);var a=p(r);a!==r&&(t[r].attribute=a),e.data.reflect&&e.data.reflect.includes(r)&&(t[r].reflect=!0)}return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},u(c(d),"properties",this),{},t)}}],(v=[{key:"render",value:function(){return e.html(this,t.html)}},{key:"updated",value:function(t){var n=this;u(c(d.prototype),"updated",this)&&u(c(d.prototype),"updated",this).call(this,t),t.forEach(function(t,r){e.data.observe&&e.data.observe.forEach(function(o,i){if(o[0].includes(r)){var c;if(1===o[0].length)c=e.callbacks[o[1]](n[o[0][0]],t);else{var a,l=[];o[0].map(function(e){l.push(n[e])}),c=(a=e.callbacks)[o[1]].apply(a,l)}3==o.length&&(n[o[2]]=Array.isArray(c)?s(c):c)}}),e.data.notify&&e.data.notify.includes(r)&&n.dispatchEvent(new CustomEvent("".concat(p(r),"-changed"),{detail:{value:n[r]}}))})}},{key:"__applyWinEvents",value:function(t){if(e.events&&e.events.window)for(var n in e.events.window)window["".concat(t?"add":"remove","EventListener")](n,e.callbacks[e.events.window[n]].bind(this))}},{key:"firstUpdated",value:function(){if(e.events&&e.events.shadow)for(var t in e.events.shadow)for(var n in e.events.shadow[t])this.shadowRoot.querySelector(t).addEventListener(n,e.callbacks[e.events.shadow[t][n]].bind(this))}},{key:"connectedCallback",value:function(){u(c(d.prototype),"connectedCallback",this)&&u(c(d.prototype),"connectedCallback",this).call(this),this.__applyWinEvents(!0)}},{key:"disconnectedCallback",value:function(){this.__applyWinEvents(!1),u(c(d.prototype),"disconnectedCallback",this)&&u(c(d.prototype),"disconnectedCallback",this).call(this)}},{key:"haxProperties",value:function(){return{}}}])&&r(b.prototype,v),h&&r(b,h),d}();return customElements.define(y.tag,y),y},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-wc.umd.js.map