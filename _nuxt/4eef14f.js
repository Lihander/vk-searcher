(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{355:function(t,e,n){"use strict";n.r(e);n(197),n(9),n(14);var r={data:function(){return{}},computed:{getNewsItem:function(){var t=this;return this.$store.getters.getNews.items.find((function(e){return e.id.toString()===t.$route.params.id}))}}},o=n(67),c=n(88),l=n.n(c),w=n(351),d=n(352),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[e("NewsCard",{attrs:{item:this.getNewsItem,single:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{NewsCard:n(304).default}),l()(component,{VCol:w.a,VRow:d.a})}}]);