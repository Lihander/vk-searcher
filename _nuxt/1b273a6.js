(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{132:function(t,e,n){"use strict";var r=n(0),o=n(188),c=n.n(o);n(273);r.default.use(c.a)},173:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("7388ab72",content,!0,{sourceMap:!1})},195:function(t,e,n){"use strict";var r={data:function(){return{}}},o=n(67),c=n(88),f=n.n(c),l=n(280),d=n(281),h=n(282),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("span",{staticClass:"bg"}),this._v(" "),e("v-main",[e("v-container",{attrs:{"fill-height":""}},[e("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VApp:l.a,VContainer:d.a,VMain:h.a})},208:function(t,e,n){n(209),t.exports=n(210)},232:function(t,e,n){"use strict";n(173)},233:function(t,e,n){(e=n(40)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},238:function(t,e,n){var content=n(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("5c670272",content,!0,{sourceMap:!1})},239:function(t,e,n){(e=n(40)(!1)).push([t.i,".bg{position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(/bg.png);background-repeat:repeat;opacity:.1}",""]),t.exports=e},249:function(t,e,n){"use strict";n.r(e);n(29),n(136),n(71);var r=n(10),o=n(63),c=n(192);e.default=function(){return new o.a({state:{news:[]},getters:{getNews:function(t){return t.news}},mutations:{setNews:function(t,e){t.news=e}},actions:{setNews:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o={q:e.search,access_token:"efcd594aefcd594aefcd594a3aefb9a163eefcdefcd594ab07e5df3be11e5af546a04b4",v:"5.126",extended:1},r.next=3,n.$axios.get("/api/newsfeed.search",{params:o});case 3:c=r.sent,t.commit("setNews",c.data.response);case 5:case"end":return r.stop()}}),r)})))()}},plugins:[Object(c.a)()]})}},52:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(232),n(67)),c=n(88),f=n.n(c),l=n(280),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;f()(component,{VApp:l.a})}},[[208,7,3,8]]]);