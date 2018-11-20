!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/app-layout/app-drawer/app-drawer.js"),require("@polymer/app-layout/app-header/app-header.js"),require("@polymer/app-layout/app-toolbar/app-toolbar.js"),require("@polymer/iron-flex-layout/iron-flex-layout.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/paper-toast/paper-toast.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("@polymer/iron-image/iron-image.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/multiple-choice/multiple-choice.js"),require("@lrnwebcomponents/responsive-grid/lib/responsive-grid-row.js"),require("@lrnwebcomponents/responsive-grid/lib/responsive-grid-col.js"),require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js"),require("@polymer/paper-dialog/paper-dialog.js"),require("@polymer/paper-button/paper-button.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/app-layout/app-drawer/app-drawer.js","@polymer/app-layout/app-header/app-header.js","@polymer/app-layout/app-toolbar/app-toolbar.js","@polymer/iron-flex-layout/iron-flex-layout.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icon/iron-icon.js","@polymer/paper-toast/paper-toast.js","@polymer/iron-ajax/iron-ajax.js","@polymer/iron-image/iron-image.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/multiple-choice/multiple-choice.js","@lrnwebcomponents/responsive-grid/lib/responsive-grid-row.js","@lrnwebcomponents/responsive-grid/lib/responsive-grid-col.js","@polymer/polymer/polymer-legacy.js","@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js","@polymer/paper-dialog/paper-dialog.js","@polymer/paper-button/paper-button.js"],n):n(t.polymer_dom_js,null,null,null,null,null,null,null,null,null,null,null,null,null,t.polymerLegacy_js)}(this,function(t,n,e,i,o,a,r,s,d,p,l,c,u,h,m){"use strict";function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function v(){var t=b(['\n    <style>\n      :host {\n        display: block;\n      }\n      #dialog {\n        min-width: 60%;\n        top: 5%;\n        bottom: 5%;\n        margin: 0;\n        padding: 0;\n        left: 15%;\n        right: 15%;\n        position: fixed;\n        overflow: hidden;\n      }\n      .content {\n        font-size: 16px;\n        overflow: scroll;\n        min-height: 60vh;\n        height: 80vh;\n        margin: 0;\n        padding: 0;\n      }\n      h2 {\n        font-size: 32px;\n        background-color: var(--game-show-bg-color);\n        color: var(--game-show-text-color);\n        margin: 0;\n        padding: 16px;\n        text-align: center;\n      }\n      .buttons {\n        font-size: 20px;\n        font-weight: bold;\n        background-color: var(--game-show-bg-color);\n        bottom: 0;\n        position: absolute;\n        left: 0;\n        right: 0;\n      }\n      .buttons ::slotted(*) {\n        width: 50%;\n        margin: 0 auto;\n        color: var(--game-show-bg-color);\n        background-color: var(--game-show-text-color);\n      }\n      .buttons ::slotted(*[disabled]) {\n        background: #eaeaea;\n        color: #a8a8a8;\n      }\n      .buttons ::slotted(#continue) {\n        color: #004400;\n        background-color: #EEFFEE;\n      }\n      @media screen and (max-width: 600px) {\n        #dialog {\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n        }\n        h2 {\n          font-size: 20px;\n        }\n        .buttons {\n          font-size: 12px;\n        }\n        .buttons ::slotted(*) {\n          width: 100%;\n        }\n        .content {\n          font-size: 12px;\n        }\n      }\n    </style>\n    <paper-dialog id="dialog" modal="">\n      <h2>[[title]]</h2>\n      <div class="content">\n        <slot name="content"></slot>\n      </div>\n      <div class="buttons">\n        <slot name="buttons"></slot>\n      </div>\n    </paper-dialog>\n']);return v=function(){return t},t}function y(){var t=b(['\n    <style>\n      :host {\n        display: block;\n        --game-show-bg-color: #4285f4;\n        --game-show-text-color: #ffffff;\n      }\n      app-toolbar {\n        background-color: var(--game-show-bg-color, blue);\n        color: var(--game-show-text-color, white);\n        font-size: 24px;\n        display: flex;\n      }\n      iron-icon {\n        display: inline-block;\n      }\n\n      paper-button {\n        --paper-button-ink-color: var(--game-show-bg-color, blue);\n        text-transform: none;\n        display: block;\n      }\n      #helpbutton {\n        text-align: center;\n        padding: 8px;\n        font-size: 12px;\n        vertical-align: middle;\n        display: inline-flex;\n      }\n      paper-button + [main-title] {\n        margin-left: 24px;\n        display: inline-flex;\n      }\n      app-header {\n        color: var(--game-show-text-color, white);\n        --app-header-background-rear-layer: {\n          background-color: #ef6c00;\n        };\n      }\n      responsive-grid-row {\n        --responsive-grid-row-inner: {\n          margin-left: 0;\n          margin-right: 0;\n        }\n      }\n      responsive-grid-col {\n        --responsive-grid-col-inner: {\n          padding-left: 0;\n          padding-right: 0;\n        }\n      }\n      #contentcontainer {\n        margin: 0 auto;\n        font-size: 16px;\n      }\n      .grid-button {\n        width: 100%;\n        height: 80px;\n        text-align: center;\n        min-width: unset;\n        padding: 0;\n        margin: 0;\n      }\n      .status-icon {\n        width: 64px;\n        height: 64px;\n        opacity: .25;\n        position: absolute;\n      }\n      .correct {\n        color: green;\n      }\n      .incorrect {\n        color: red;\n      }\n      .row-0 paper-button[disabled] {\n        font-weight: bold;\n        font-size: 16px;\n      }\n      @media screen and (max-width: 600px) {\n        app-toolbar {\n          font-size: 14px;\n        }\n        paper-button {\n          padding: 0;\n          margin: 0;\n          width: 16px;\n          height: 16px;\n          min-width: unset;\n        }\n        .grid-button {\n          font-size: 9px;\n        }\n        .status-icon {\n          width: 24px;\n          height: 24px;\n          opacity: 1;\n          display: inline-block;\n        }\n        .row-0 paper-button[disabled] {\n          font-weight: bold;\n          font-size: 10px;\n        }\n      }\n    </style>\n    <app-header>\n      <app-toolbar>\n        <paper-button id="helpbutton" on-tap="directionsToggle"><iron-icon icon="help"></iron-icon> Directions</paper-button>\n        <div main-title="">[[title]]</div>\n      </app-toolbar>\n    </app-header>\n    <div id="contentcontainer">\n      <template is="dom-repeat" items="[[gameBoard]]" as="row">\n        <responsive-grid-row gutter="0" class$="row row-[[index]]">\n        <template is="dom-repeat" items="[[row.cols]]" as="col">\n          <responsive-grid-col xl="3" lg="3" md="3" sm="3" xs="3">\n            <paper-button class="grid-button" raised="[[!col.notRaised]]" data-question-data$="[[col.question]]" data-value$="[[col.points]]" data-type$="[[col.type]]" disabled$="[[col.disabled]]">[[col.title]]<br>[[col.points]]</paper-button>\n          </responsive-grid-col>\n        </template>\n      </responsive-grid-row>\n      </template>\n      <div>\n        <h3>Scoreboard</h3>\n        <table>\n          <tbody><tr>\n            <th></th>\n            <th>Slide ID</th>\n            <th>Terms</th>\n            <th>Reading</th>\n            <th>Lecture</th>\n            <th>Bonus</th>\n            <th>Total</th>\n          </tr>\n          <tr>\n            <th>Points Attempted</th>\n            <td>[[points.slide.attempted]]</td>\n            <td>[[points.terms.attempted]]</td>\n            <td>[[points.reading.attempted]]</td>\n            <td>[[points.lecture.attempted]]</td>\n            <td>[[points.bonus.attempted]]</td>\n            <td>[[points.total.attempted]]</td>\n          </tr>\n          <tr>\n            <th>Points Earned</th>\n            <td>[[points.slide.earned]]</td>\n            <td>[[points.terms.earned]]</td>\n            <td>[[points.reading.earned]]</td>\n            <td>[[points.lecture.earned]]</td>\n            <td>[[points.bonus.earned]]</td>\n            <td>[[points.total.earned]]</td>\n          </tr>\n          <tr>\n            <th>Category Percentage</th>\n            <td>[[points.slide.percent]]</td>\n            <td>[[points.terms.percent]]</td>\n            <td>[[points.reading.percent]]</td>\n            <td>[[points.lecture.percent]]</td>\n            <td>[[points.bonus.percent]]</td>\n            <td>[[points.total.percent]]</td>\n          </tr>\n        </tbody></table>\n      <div>Points Remaining to Attempt: [[remainingAttempts]]</div>\n      </div>\n    </div>\n    <paper-toast id="toast"></paper-toast>\n    <game-show-quiz-modal id="directions" title="[[directionsTitle]]">\n      <div slot="content"><slot name="directions"></slot></div>\n      <paper-button slot="buttons" id="dismiss" dialog-confirm="" raised="">Good luck!</paper-button>\n    </game-show-quiz-modal>\n    <game-show-quiz-modal id="dialog" title="[[activeQuestion.title]]">\n      <iron-image slot="content" style="min-width:100px; width:100%; min-height:25vh; height:40vh; background-color: lightgray;" sizing="contain" preload="" src$="[[activeQuestion.image]]"></iron-image>\n      <multiple-choice disabled$="[[activeQuestion.submitted]]" slot="content" id="question" hide-buttons="" title="[[activeQuestion.title]]" answers="[[activeQuestion.data]]"></multiple-choice>\n      <paper-button slot="buttons" hidden$="[[activeQuestion.submitted]]" id="submit" raised="" disabled$="[[__submitDisabled]]">Submit answer <iron-icon hidden$="[[__submitDisabled]]" icon="icons:touch-app"></iron-icon></paper-button>\n      <paper-button slot="buttons" id="continue" hidden$="[[!activeQuestion.submitted]]" dialog-confirm="" raised="">Continue <iron-icon icon="icons:arrow-forward"></iron-icon></paper-button>\n    </game-show-quiz-modal>\n    <iron-ajax auto="" id="gamedata" url="[[gameData]]" handle-as="json" last-response="{{gameBoard}}"></iron-ajax>\n    <iron-ajax id="questiondata" url="[[__questionEndpoint]]" handle-as="json" last-response="{{activeQuestion}}"></iron-ajax>\n'],['\n    <style>\n      :host {\n        display: block;\n        --game-show-bg-color: #4285f4;\n        --game-show-text-color: #ffffff;\n      }\n      app-toolbar {\n        background-color: var(--game-show-bg-color, blue);\n        color: var(--game-show-text-color, white);\n        font-size: 24px;\n        display: flex;\n      }\n      iron-icon {\n        display: inline-block;\n      }\n\n      paper-button {\n        --paper-button-ink-color: var(--game-show-bg-color, blue);\n        text-transform: none;\n        display: block;\n      }\n      #helpbutton {\n        text-align: center;\n        padding: 8px;\n        font-size: 12px;\n        vertical-align: middle;\n        display: inline-flex;\n      }\n      paper-button + [main-title] {\n        margin-left: 24px;\n        display: inline-flex;\n      }\n      app-header {\n        color: var(--game-show-text-color, white);\n        --app-header-background-rear-layer: {\n          background-color: #ef6c00;\n        };\n      }\n      responsive-grid-row {\n        --responsive-grid-row-inner: {\n          margin-left: 0;\n          margin-right: 0;\n        }\n      }\n      responsive-grid-col {\n        --responsive-grid-col-inner: {\n          padding-left: 0;\n          padding-right: 0;\n        }\n      }\n      #contentcontainer {\n        margin: 0 auto;\n        font-size: 16px;\n      }\n      .grid-button {\n        width: 100%;\n        height: 80px;\n        text-align: center;\n        min-width: unset;\n        padding: 0;\n        margin: 0;\n      }\n      .status-icon {\n        width: 64px;\n        height: 64px;\n        opacity: .25;\n        position: absolute;\n      }\n      .correct {\n        color: green;\n      }\n      .incorrect {\n        color: red;\n      }\n      .row-0 paper-button[disabled] {\n        font-weight: bold;\n        font-size: 16px;\n      }\n      @media screen and (max-width: 600px) {\n        app-toolbar {\n          font-size: 14px;\n        }\n        paper-button {\n          padding: 0;\n          margin: 0;\n          width: 16px;\n          height: 16px;\n          min-width: unset;\n        }\n        .grid-button {\n          font-size: 9px;\n        }\n        .status-icon {\n          width: 24px;\n          height: 24px;\n          opacity: 1;\n          display: inline-block;\n        }\n        .row-0 paper-button[disabled] {\n          font-weight: bold;\n          font-size: 10px;\n        }\n      }\n    </style>\n    <app-header>\n      <app-toolbar>\n        <paper-button id="helpbutton" on-tap="directionsToggle"><iron-icon icon="help"></iron-icon> Directions</paper-button>\n        <div main-title="">[[title]]</div>\n      </app-toolbar>\n    </app-header>\n    <div id="contentcontainer">\n      <template is="dom-repeat" items="[[gameBoard]]" as="row">\n        <responsive-grid-row gutter="0" class\\$="row row-[[index]]">\n        <template is="dom-repeat" items="[[row.cols]]" as="col">\n          <responsive-grid-col xl="3" lg="3" md="3" sm="3" xs="3">\n            <paper-button class="grid-button" raised="[[!col.notRaised]]" data-question-data\\$="[[col.question]]" data-value\\$="[[col.points]]" data-type\\$="[[col.type]]" disabled\\$="[[col.disabled]]">[[col.title]]<br>[[col.points]]</paper-button>\n          </responsive-grid-col>\n        </template>\n      </responsive-grid-row>\n      </template>\n      <div>\n        <h3>Scoreboard</h3>\n        <table>\n          <tbody><tr>\n            <th></th>\n            <th>Slide ID</th>\n            <th>Terms</th>\n            <th>Reading</th>\n            <th>Lecture</th>\n            <th>Bonus</th>\n            <th>Total</th>\n          </tr>\n          <tr>\n            <th>Points Attempted</th>\n            <td>[[points.slide.attempted]]</td>\n            <td>[[points.terms.attempted]]</td>\n            <td>[[points.reading.attempted]]</td>\n            <td>[[points.lecture.attempted]]</td>\n            <td>[[points.bonus.attempted]]</td>\n            <td>[[points.total.attempted]]</td>\n          </tr>\n          <tr>\n            <th>Points Earned</th>\n            <td>[[points.slide.earned]]</td>\n            <td>[[points.terms.earned]]</td>\n            <td>[[points.reading.earned]]</td>\n            <td>[[points.lecture.earned]]</td>\n            <td>[[points.bonus.earned]]</td>\n            <td>[[points.total.earned]]</td>\n          </tr>\n          <tr>\n            <th>Category Percentage</th>\n            <td>[[points.slide.percent]]</td>\n            <td>[[points.terms.percent]]</td>\n            <td>[[points.reading.percent]]</td>\n            <td>[[points.lecture.percent]]</td>\n            <td>[[points.bonus.percent]]</td>\n            <td>[[points.total.percent]]</td>\n          </tr>\n        </tbody></table>\n      <div>Points Remaining to Attempt: [[remainingAttempts]]</div>\n      </div>\n    </div>\n    <paper-toast id="toast"></paper-toast>\n    <game-show-quiz-modal id="directions" title="[[directionsTitle]]">\n      <div slot="content"><slot name="directions"></slot></div>\n      <paper-button slot="buttons" id="dismiss" dialog-confirm="" raised="">Good luck!</paper-button>\n    </game-show-quiz-modal>\n    <game-show-quiz-modal id="dialog" title="[[activeQuestion.title]]">\n      <iron-image slot="content" style="min-width:100px; width:100%; min-height:25vh; height:40vh; background-color: lightgray;" sizing="contain" preload="" src\\$="[[activeQuestion.image]]"></iron-image>\n      <multiple-choice disabled\\$="[[activeQuestion.submitted]]" slot="content" id="question" hide-buttons="" title="[[activeQuestion.title]]" answers="[[activeQuestion.data]]"></multiple-choice>\n      <paper-button slot="buttons" hidden\\$="[[activeQuestion.submitted]]" id="submit" raised="" disabled\\$="[[__submitDisabled]]">Submit answer <iron-icon hidden$="[[__submitDisabled]]" icon="icons:touch-app"></iron-icon></paper-button>\n      <paper-button slot="buttons" id="continue" hidden\\$="[[!activeQuestion.submitted]]" dialog-confirm="" raised="">Continue <iron-icon icon="icons:arrow-forward"></iron-icon></paper-button>\n    </game-show-quiz-modal>\n    <iron-ajax auto="" id="gamedata" url="[[gameData]]" handle-as="json" last-response="{{gameBoard}}"></iron-ajax>\n    <iron-ajax id="questiondata" url="[[__questionEndpoint]]" handle-as="json" last-response="{{activeQuestion}}"></iron-ajax>\n']);return y=function(){return t},t}m.Polymer({_template:m.html(v()),is:"game-show-quiz-modal",properties:{title:{type:String}},toggle:function(){this.$.dialog.toggle()}}),m.Polymer({_template:m.html(y()),is:"game-show-quiz",behaviors:[HAXBehaviors.PropertiesBehaviors],properties:{title:{type:String},points:{type:Object,value:{slide:{attempted:0,earned:0,percent:0},terms:{attempted:0,earned:0,percent:0},reading:{attempted:0,earned:0,percent:0},lecture:{attempted:0,earned:0,percent:0},bonus:{attempted:0,earned:0,percent:0},total:{attempted:0,earned:0,percent:0}}},remainingAttempts:{type:Number,value:30},directionsTitle:{type:String,value:"Directions"},gameBoard:{type:Array,observer:"_gameBoardChanged"},gameData:{type:String},activeQuestion:{type:Object}},directionsToggle:function(t){this.$.directions.toggle()},continueGameTap:function(n){"undefined"!==g(this.__activeTap)&&null!=t.dom(this.__activeTap).parentNode.nextElementSibling.firstElementChild?(t.dom(this.__activeTap).parentNode.nextElementSibling.firstElementChild.firstElementChild.focus(),delete this.__activeTap):"undefined"!==g(this.__activeTap)&&null==t.dom(this.__activeTap).parentNode.nextElementSibling.firstElementChild&&(this.__activeTap.focus(),delete this.__activeTap)},registerTap:function(t){this.__submitDisabled=!1},submitAnswer:function(n){this.set("activeQuestion.submitted",!0),this.$.continue.focus(),this.__activeTap.disabled=!0;var e=document.createElement("iron-icon");e.classList.add("status-icon");var i=parseInt(this.points[this.__activeType].attempted)+parseInt(this.__activeValue);this.set("points."+this.__activeType+".attempted",i);var o=parseInt(this.points.total.attempted)+parseInt(this.__activeValue);if(this.set("points.total.attempted",o),this.remainingAttempts=this.remainingAttempts-parseInt(this.__activeValue),this.$.question.checkAnswers()){this.$.toast.show("Correct!");var a=parseInt(this.points[this.__activeType].earned)+parseInt(this.__activeValue);this.set("points."+this.__activeType+".earned",a),e.icon="icons:check-circle",e.classList.add("correct");var r=parseInt(this.points.total.earned)+parseInt(this.__activeValue);this.set("points.total.earned",r)}else this.$.toast.show(":( You got it wrong"),e.icon="icons:cancel",e.classList.add("incorrect");var s=(parseInt(this.points[this.__activeType].earned)/parseInt(this.points[this.__activeType].attempted)*100).toFixed(1);this.set("points."+this.__activeType+".percent",s),o=(parseInt(this.points.total.earned)/parseInt(this.points.total.attempted)*100).toFixed(1),this.set("points.total.percent",o),t.dom(this.__activeTap).appendChild(e)},_gameBoardTap:function(n){var e=this,i=t.dom(n).localTarget;null!=i.getAttribute("data-question-data")&&(this.__submitDisabled=!0,this.__questionEndpoint=i.getAttribute("data-question-data"),this.__activeTap=i,this.__activeType=i.getAttribute("data-type"),this.__activeValue=i.getAttribute("data-value"),this.$.questiondata.answers=[],setTimeout(function(){e.$.questiondata.generateRequest(),e.$.dialog.toggle()},100))},_gameBoardChanged:function(t,n){},resetFocus:function(t){this.$.helpbutton.focus()},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Game show",description:"Tweak the game show options",icon:"av:play-circle-filled",color:"grey",groups:["Video","Media"],handles:[{type:"video",url:"source"}],meta:{author:"Your organization on github"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}}),this.$.dismiss.addEventListener("tap",this.resetFocus.bind(this)),this.$.contentcontainer.addEventListener("tap",this._gameBoardTap.bind(this)),this.$.submit.addEventListener("tap",this.submitAnswer.bind(this)),this.$.continue.addEventListener("tap",this.continueGameTap.bind(this)),this.$.question.addEventListener("tap",this.registerTap.bind(this))},detached:function(){this.$.dismiss.removeEventListener("tap",this.resetFocus.bind(this)),this.$.contentcontainer.removeEventListener("tap",this._gameBoardTap.bind(this)),this.$.submit.removeEventListener("tap",this.submitAnswer.bind(this)),this.$.continue.removeEventListener("tap",this.continueGameTap.bind(this)),this.$.question.removeEventListener("tap",this.registerTap.bind(this))}})});
//# sourceMappingURL=game-show-quiz.umd.js.map
