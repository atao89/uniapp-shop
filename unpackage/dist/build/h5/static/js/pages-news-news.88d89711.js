(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-news"],{"0c16":function(t,e,n){var r=n("fb19");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("4c76571b",r,!0,{sourceMap:!1,shadowMode:!1})},"0ccb":function(t,e,n){var r=n("50c4"),i=n("1148"),o=n("1d80"),a=Math.ceil,c=function(t){return function(e,n,c){var s,u,f=String(o(e)),l=f.length,d=void 0===c?" ":String(c),h=r(n);return h<=l||""==d?f:(s=h-l,u=i.call(d,a(s/d.length)),u.length>s&&(u=u.slice(0,s)),t?f+u:u+f)}};t.exports={start:c(!1),end:c(!0)}},"109a":function(t,e,n){"use strict";n.r(e);var r=n("7cbb"),i=n("db0d");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("606c");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"84b5c89e",null,!1,r["a"],a);e["default"]=s.exports},1148:function(t,e,n){"use strict";var r=n("a691"),i=n("1d80");t.exports="".repeat||function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,s,"next",t)}function s(t){r(a,i,o,c,s,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"1fc9":function(t,e,n){"use strict";var r=n("4ea4");n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("1da1")),o=r(n("21df")),a={components:{"news-item":o.default},data:function(){return{newsList:[]}},onLoad:function(){this.getNews()},methods:{getNews:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/public/v1/goods/search"});case 2:n=e.sent,t.newsList=[],n.message.goods.forEach((function(e){e.goods_small_logo&&t.newsList.push(e)}));case 5:case"end":return e.stop()}}),e)})))()},goDetail:function(t){uni.navigateTo({url:"/pages/news-detail/news-detail?id="+t})}}};e.default=a},"21df":function(t,e,n){"use strict";n.r(e);var r=n("68e5"),i=n("b5e0");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("90aa");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"2afdb946",null,!1,r["a"],a);e["default"]=s.exports},"4d90":function(t,e,n){"use strict";var r=n("23e7"),i=n("0ccb").start,o=n("9a0c");r({target:"String",proto:!0,forced:o},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"606c":function(t,e,n){"use strict";var r=n("0c16"),i=n.n(r);i.a},"68e5":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",t._l(t.list,(function(e){return n("v-uni-view",{key:e.goods_id,staticClass:"news_item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigator(e.goods_id)}}},[n("v-uni-image",{attrs:{src:e.goods_small_logo}}),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tit"},[t._v(t._s(e.goods_name))]),n("v-uni-view",{staticClass:"info"},[n("v-uni-text",[t._v("发表时间："+t._s(t._f("formatDate")(e.add_time)))]),n("v-uni-text",[t._v("浏览："+t._s(e.goods_price))])],1)],1)],1)})),1)},o=[]},"7cbb":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={newsItem:n("21df").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"news"},[n("news-item",{attrs:{list:t.newsList},on:{goDetail:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail.apply(void 0,arguments)}}})],1)},o=[]},"90aa":function(t,e,n){"use strict";var r=n("de4f"),i=n.n(r);i.a},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=b;var l="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},g={};g[a]=function(){return this};var w=Object.getPrototypeOf,m=w&&w(w(F([])));m&&m!==r&&i.call(m,a)&&(g=m);var y=E.prototype=_.prototype=Object.create(g);L.prototype=y.constructor=E,E.constructor=L,E[s]=L.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(y),t},f.awrap=function(t){return{__await:t}},S(j.prototype),j.prototype[c]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,n,r){var i=new j(b(t,e,n,r));return f.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(y),y[s]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=F,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;M(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:F(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var i=e&&e.prototype instanceof _?e:_,o=Object.create(i.prototype),a=new N(r||[]);return o._invoke=O(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function _(){}function L(){}function E(){}function S(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,r,o,a){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(u).then((function(t){s.value=t,o(s)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function O(t,e,n){var r=l;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return D()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?p:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function F(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:D}}function D(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9a0c":function(t,e,n){var r=n("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},b5a2:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.news_item[data-v-2afdb946]{display:flex;padding:%?10?% %?20?%;border-bottom:1px solid #b50e03}.news_item uni-image[data-v-2afdb946]{min-width:%?200?%;max-width:%?200?%;height:%?150?%}.news_item .right[data-v-2afdb946]{display:flex;flex-direction:column;justify-content:space-between;margin-left:%?15?%}.news_item .right .tit[data-v-2afdb946]{font-size:%?30?%}.news_item .right .info[data-v-2afdb946]{font-size:%?24?%}.news_item .right .info uni-text[data-v-2afdb946]:nth-child(2){margin-left:%?30?%}',""]),t.exports=e},b5e0:function(t,e,n){"use strict";n.r(e);var r=n("d270"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},d270:function(t,e,n){"use strict";n("d3b7"),n("25f0"),n("4d90"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:["list"],filters:{formatDate:function(t){t=new Date(1e3*t);var e=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,0),r=t.getDate().toString().padStart(2,0),i=t.getHours().toString().padStart(2,0),o=t.getMinutes().toString().padStart(2,0),a=t.getSeconds().toString().padStart(2,0);return e+"-"+n+"-"+r+" "+i+":"+o+":"+a}},methods:{navigator:function(t){this.$emit("goDetail",t)}}};e.default=r},db0d:function(t,e,n){"use strict";n.r(e);var r=n("1fc9"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},de4f:function(t,e,n){var r=n("b5a2");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("2a127ff2",r,!0,{sourceMap:!1,shadowMode:!1})},fb19:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.news .news_item[data-v-84b5c89e]{display:flex;padding:%?10?% %?20?%;border-bottom:1px solid #b50e03}.news .news_item uni-image[data-v-84b5c89e]{min-width:%?200?%;max-width:%?200?%;height:%?150?%}.news .news_item .right[data-v-84b5c89e]{display:flex;flex-direction:column;justify-content:space-between;margin-left:%?15?%}.news .news_item .right .tit[data-v-84b5c89e]{font-size:%?30?%}.news .news_item .right .info[data-v-84b5c89e]{font-size:%?24?%}.news .news_item .right .info uni-text[data-v-84b5c89e]:nth-child(2){margin-left:%?30?%}',""]),t.exports=e}}]);