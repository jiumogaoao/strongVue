!function(t){function e(e){for(var r,o,s=e[0],i=e[1],c=e[2],l=0,d=[];l<s.length;l++)o=s[l],u[o]&&d.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);for(f&&f(e);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==u[i]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},u={3:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://speed.lhs11.com/fxc/";var s=window.webpackJsonp=window.webpackJsonp||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var f=i;a.push([62,0]),n()}({102:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,u=n(103),a=(r=u)&&r.__esModule?r:{default:r};e.default=a.default},103:function(t,e,n){"use strict";n.r(e);var r=n(39),u=n(21);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n(104);var o=n(5),s=Object(o.a)(u.default,r.a,r.b,!1,null,null,null);s.options.__file="src/component/test/template.vue",e.default=s.exports},104:function(t,e,n){"use strict";var r=n(23);n.n(r).a},105:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getFetchTest=void 0;var r=s(n(27)),u=s(n(28)),a=n(106),o=n(107);function s(t){return t&&t.__esModule?t:{default:t}}var i;e.getFetchTest=(i=(0,u.default)(r.default.mark(function t(){var e;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.getFetch)(a.testUrl);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,void 0)})),function(){return i.apply(this,arguments)})},106:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.testUrl="/fxapi/services/system/ctmall/homepage@getAllCitys.japi"},107:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.postFetch=e.getFetch=void 0;var r=o(n(27)),u=o(n(28)),a=o(n(108));function o(t){return t&&t.__esModule?t:{default:t}}var s=n(9);a.default.defaults.baseURL=s.API,a.default.defaults.timeout=12e4;var i,c;e.getFetch=(i=(0,u.default)(r.default.mark(function t(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.default.get(e,u);case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{code:-1,message:t.t0.message,status:!1});case 10:case"end":return t.stop()}},t,void 0,[[0,7]])})),function(t){return i.apply(this,arguments)}),e.postFetch=(c=(0,u.default)(r.default.mark(function t(e){var n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.default.post(e,u);case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{code:-1,message:t.t0.message,status:!1});case 10:case"end":return t.stop()}},t,void 0,[[0,7]])})),function(t){return c.apply(this,arguments)})},108:function(t,e){t.exports=axios},109:function(t,e,n){"use strict";var r=n(24);n.n(r).a},19:function(t,e,n){"use strict";n.r(e);var r=n(20),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},20:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(n(27)),u=s(n(28)),a=s(n(102)),o=n(105);function s(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Test:a.default},created:function(){this.getInitialFetch()},data:function(){return{greeting:"HELLO WORLD",test:"Loading..."}},methods:{getInitialFetch:function(){var t=(0,u.default)(r.default.mark(function t(){var e;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.getFetchTest)();case 2:e=t.sent,this.test=e;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},21:function(t,e,n){"use strict";n.r(e);var r=n(22),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e.default=u.a},22:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"Test"}}}},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e){t.exports=Vue},26:function(t,e,n){},38:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("p",[t._v(t._s(t.greeting))]),t._v(" "),n("Test"),t._v(" "),n("div",{staticClass:"box"},[t._v(t._s(t.test))])],1)},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},39:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("我是 "+this._s(this.name)+" 组件")])},u=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},62:function(t,e,n){"use strict";var r=a(n(25)),u=a(n(63));function a(t){return t&&t.__esModule?t:{default:t}}n(26),new r.default({render:function(t){return t(u.default)}}).$mount("#app")},63:function(t,e,n){"use strict";n.r(e);var r=n(38),u=n(19);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n(109);var o=n(5),s=Object(o.a)(u.default,r.a,r.b,!1,null,null,null);s.options.__file="src/page/index/template.vue",e.default=s.exports},9:function(t,e,n){"use strict";t.exports={OSS:"https://speed.lhs11.com/fxc/",API:"http://fx3t-ysqg.lhs11.com/"}}});