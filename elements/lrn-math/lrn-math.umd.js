!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).LrnMath={})}(this,function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function u(t,e,n){return(u=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=c();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var p,h,d=window.document,y={start:1,loading:2,ready:3,typesetting:4,error:5},m=[],v=y.start,b="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js";function w(){if(m.length){var t=[],e=[];m.forEach(function(n){var r=d.createElement("script"),o=d.createElement("div");r.type=n[1]?"math/tex; mode=display":"math/tex",r.text=n[0],o.style.position="fixed",o.style.top=0,o.style.left="99999px",o.appendChild(r),d.body.appendChild(o),t.push(r),e.push([o,n[2]])}),m=[],v=y.typesetting,p.Queue(["Typeset",p,t]),p.Queue(function(){var t,n;h||(t=d.querySelectorAll("style"),n=Array.prototype.filter.call(t,function(t){return t.sheet&&t.sheet.cssRules.length>100&&".mjx-chtml"===t.sheet.cssRules[0].selectorText}),h=n[0]),e.forEach(function(t){var e=t[0],n="SPAN"===e.firstElementChild.tagName?e.firstElementChild:null;t[1](n,h),d.body.removeChild(e)}),v=y.ready,w()})}}function g(){v=y.loading,window.MathJax={skipStartupTypeset:!0,showMathMenu:!1,jax:["input/TeX","output/CommonHTML"],TeX:{extensions:["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"]},AuthorInit:function(){(p=window.MathJax.Hub).Register.StartupHook("End",function(){v=y.ready,w()})}};var t=d.createElement("script");t.type="text/javascript",t.src=b,t.async=!0,t.onerror=function(){console.warn("Error loading MathJax library "+b),v=y.error,m=[]},d.head.appendChild(t)}var x=function(t){o(i,l(HTMLElement));var n=f(i);function i(){return e(this,i),n.apply(this,arguments)}return r(i,[{key:"connectedCallback",value:function(){this.hasAttribute("src")&&(b=this.getAttribute("src")),this.hasAttribute("lazy")||g()}},{key:"typeset",value:function(t,e,n){v!==y.error&&(m.push([t,e,n]),v===y.start?g():v===y.ready&&w())}}]),i}();window.customElements.define("lrn-math-controller",x);var M,E="lrn-math",C="lrn-math-controller",j={childList:!0,characterData:!0,attributes:!0,subtree:!0};function k(t){var e=t.shadowRoot,n=t.textContent.trim(),r="display"===t.getAttribute("mode"),o=(r?"D":"I")+n;if(o!==t._private.check){for(;e.firstChild;)e.removeChild(e.firstChild);t._private.check=o,n.length&&M.typeset(n,r,function(t,n){e.appendChild(n.cloneNode(!0)),e.appendChild(t)})}}var T=function(t){o(i,l(HTMLElement));var n=f(i);function i(){var t;return e(this,i),(t=n.call(this)).attachShadow({mode:"open"}),t}return r(i,[{key:"connectedCallback",value:function(){var t=this;M||((M=d.querySelector(C)||d.createElement(C)).setAttribute("lazy","lazy"),M&&"function"==typeof M.typeset?d.contains(M)||d.head.appendChild(M):(console.warn("no %s element defined; %s element will not work",C,E),M=void 0)),window.requestAnimationFrame(function(){var e,n,r;t._private={check:"",observer:new MutationObserver((e=function(){k(t)},n=300,function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];clearTimeout(r),r=setTimeout(function(){clearTimeout(r),e.apply(void 0,o)},n)}))},k(t),t._private.observer.observe(t,j)})}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"math-text":if(""!==n&&null!==n){var r=d.createElement("span");r.innerText=n,this.innerHTML="",this.appendChild(r),this.removeAttribute("math-text")}}}},{key:"refresh",value:function(){var t=d.createElement("lrn-math");this.parentNode.insertBefore(t,this),t.innerHTML=this.innerHTML,this.remove()}},{key:"disconnectedCallback",value:function(){this._private&&(this._private.observer.disconnect(),delete this._private)}}],[{key:"tag",get:function(){return"lrn-math"}},{key:"observedAttributes",get:function(){return["math-text"]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Math",description:"Present math in a nice looking way.",icon:"hax:pi",color:"grey",groups:["Content"],handles:[{type:"math",math:"mathText"},{type:"inline",text:"mathText"}],meta:{author:"ELMS:LN",inlineOnly:!0}},settings:{configure:[{slot:"",title:"Math",description:"Enter equation as MathML",inputMethod:"code-editor",icon:"editor:format-quote"}],advanced:[]}}}}]),i}();window.customElements.define(T.tag,T),t.LrnMath=T,t.LrnMathController=x,Object.defineProperty(t,"__esModule",{value:!0})});
