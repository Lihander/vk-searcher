(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{287:function(t,e,n){var content=n(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("784a409c",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";n(287)},309:function(t,e,n){(e=n(40)(!1)).push([t.i,".news[data-v-6fec5d54]{height:100%;width:100%}.news__top-line[data-v-6fec5d54]{display:flex;align-items:center;justify-content:flex-start;margin-bottom:32px}.news__top-line h2[data-v-6fec5d54]{color:#3f8ae0;margin-left:20px}",""]),t.exports=e},354:function(t,e,n){"use strict";n.r(e);n(29),n(136);var r={name:"news",computed:{getNews:function(){return this.$store.getters.getNews}},created:function(){this.$store.dispatch("setNews",{search:this.$route.query.search})}},o=(n(308),n(67)),c=n(88),l=n.n(c),d=n(357),f=n(351),w=n(289),v=n(352),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("div",{staticClass:"news__top-line"},[n("v-btn",{attrs:{color:"primary",to:"/"}},[n("v-icon",[t._v("mdi-arrow-left-bold")])],1),t._v(" "),n("h2",[t._v("Найденные новости")])],1),t._v(" "),n("div",{staticClass:"news__list"},t._l(t.getNews.items,(function(e,r){return n("div",{key:r,staticClass:"news__item"},[e.text?n("NewsCard",{attrs:{item:e}}):t._e()],1)})),0)])],1)],1)}),[],!1,null,"6fec5d54",null);e.default=component.exports;l()(component,{NewsCard:n(304).default}),l()(component,{VBtn:d.a,VCol:f.a,VIcon:w.a,VRow:v.a})}}]);