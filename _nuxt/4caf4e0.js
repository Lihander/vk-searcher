(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{288:function(t,e,r){var content=r(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("106d2092",content,!0,{sourceMap:!1})},292:function(t,e,r){var content=r(315);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("382cc0d8",content,!0,{sourceMap:!1})},304:function(t,e,r){"use strict";r.r(e);r(22),r(197),r(46),r(30);var n=r(188),o={name:"NewsCard",components:{Modal:r(306).default,Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},props:{item:{type:Object,required:!0},single:{type:Boolean,default:!1}},data:function(){return{showModal:!1,imageIndex:0,swiperOption:{slidesPerView:4,spaceBetween:30,freeMode:!0}}},computed:{getNews:function(){return this.$store.getters.getNews}},methods:{getAuthor:function(t){var e="";return t<0?(e=this.getNews.groups.find((function(e){return e.id===Math.abs(t)}))).name:(e=this.getNews.profiles.find((function(e){return e.id===t}))).last_name+" "+e.first_name},getPhotos:function(t,e){if(t){var r=t.filter((function(t){return"photo"===t.type}));if(r)return r.map((function(data){var t=data.photo.sizes.find((function(t){return t.type===e}));return t?t.url:data.photo.sizes[data.photo.sizes.length-1].url}))}return[]},getDate:function(t){var e=new Date(1e3*t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},getFullsizePhoto:function(t,e,r){return this.getPhotos(e,r)[t]},showFullsizeImage:function(t){this.showModal=!0,this.imageIndex=t}}},c=(r(314),r(67)),d=r(88),l=r.n(d),h=r(357),v=(r(21),r(299),r(23),r(300),r(196),r(42),r(43),r(24),r(25),r(8)),m=(r(326),r(307)),f=r(305),_=r(295),x=r(133);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(x.a)(f.a,_.a,m.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return y(y({"v-card":!0},_.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},m.a.options.computed.classes.call(this))},styles:function(){var style=y({},m.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=f.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}}),k=r(6),z=Object(k.e)("v-card__actions"),C=Object(k.e)("v-card__subtitle"),O=Object(k.e)("v-card__text"),j=(Object(k.e)("v-card__title"),r(289)),P=(r(91),r(64),r(31)),$=(r(330),r(301)),E=(r(332),r(294)),I=Object(x.a)(E.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),M=r(134),L=r(135),R=r(35),B="undefined"!=typeof window&&"IntersectionObserver"in window,N=Object(x.a)(I,M.a).extend({name:"v-img",directives:{intersect:$.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(P.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!B||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(R.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):null!=e&&!t.hasError&&setTimeout(r,e)};r()},genContent:function(){var content=I.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=I.options.render.call(this,t),data=Object(L.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:B?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}}),A=(r(206),Object(k.e)("spacer","div","v-spacer")),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"card__item mx-auto",attrs:{outlined:""}},[r("v-card-text",[r("div",{staticClass:"d-flex justify-space-between align-center mb-3"},[r("div",{staticClass:"d-flex justify-start align-center"},[r("v-icon",{staticClass:"icon mr-2"},[t._v("mdi-calendar")]),t._v(" "),r("time",{staticClass:"font-weight-medium"},[t._v(t._s(t.getDate(t.item.date)))])],1),t._v(" "),r("div",{staticClass:"d-flex justify-start align-center"},[r("v-icon",{staticClass:"icon mr-2"},[t._v("mdi-account")]),t._v(" "),r("div",{staticClass:"font-weight-medium"},[t._v(t._s(t.getAuthor(t.item.from_id)))])],1)]),t._v(" "),r("div",{staticClass:"card__item-text",class:{"card__item-text--hide":!t.single}},[t._v(t._s(t.item.text))]),t._v(" "),r("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.getPhotos(t.item.attachments,"p"),(function(e,n){return r("swiper-slide",{key:n},[r("v-card",{staticClass:"card__slide"},[r("v-icon",{staticClass:"card__slide--expand-icon",on:{click:function(e){return t.showFullsizeImage(n)}}},[t._v("mdi-arrow-expand")]),t._v(" "),r("v-img",{attrs:{height:"250",src:e}})],1)],1)})),t._v(" "),r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),r("v-card-actions",{staticClass:"mx-2"},[r("v-icon",{staticClass:"icon mr-2"},[t._v("mdi-heart-outline")]),t._v(" "),r("div",{staticClass:"font-weight-medium"},[t._v(t._s(t.item.likes.count))]),t._v(" "),r("v-spacer"),t._v(" "),t.single?t._e():r("v-btn",{attrs:{color:"primary",to:/news/+t.item.id}},[t._v("\n      Подробнее\n    ")])],1),t._v(" "),t.showModal?r("Modal",{on:{close:function(e){t.showModal=!1}}},[r("v-img",{attrs:{src:t.getFullsizePhoto(t.imageIndex,t.item.attachments,"z")}})],1):t._e()],1)}),[],!1,null,"3679b7a9",null);e.default=component.exports;l()(component,{Modal:r(306).default}),l()(component,{VBtn:h.a,VCard:S,VCardActions:z,VCardText:O,VIcon:j.a,VImg:N,VSpacer:A})},306:function(t,e,r){"use strict";r.r(e);var n={mounted:function(){var t=this;document.body.addEventListener("keyup",(function(e){27===e.keyCode&&t.$emit("close")}))},computed:{},methods:{}},o=(r(310),r(67)),c=r(88),d=r.n(c),l=r(289),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"modal"}},[r("div",{staticClass:"modal__wrapper",on:{click:function(e){return t.$emit("close")}}},[r("div",{staticClass:"modal-content",on:{click:function(t){t.stopPropagation()}}},[r("v-icon",{staticClass:"icon",on:{click:function(e){return t.$emit("close")}}},[t._v("mdi-close")]),t._v(" "),t._t("default")],2)])])}),[],!1,null,"63e1e045",null);e.default=component.exports;d()(component,{VIcon:l.a})},310:function(t,e,r){"use strict";r(288)},311:function(t,e,r){(e=r(40)(!1)).push([t.i,".modal-enter[data-v-63e1e045],.modal-leave-active[data-v-63e1e045]{opacity:0}.modal-enter .modal-content[data-v-63e1e045],.modal-leave-active .modal-content[data-v-63e1e045]{transform:scale(1.2)}.modal__wrapper[data-v-63e1e045]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;bottom:0;left:0;transition:opacity .2s ease;right:0;z-index:998;background-color:rgba(0,0,0,.6);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.modal-content[data-v-63e1e045]{position:relative;max-width:600px;padding:20px 18px;transition:all .2s ease;border-radius:8px;z-index:999;overflow:hidden}@media screen and (min-width:900px){.modal-content[data-v-63e1e045]{min-width:500px}}.modal-content .icon[data-v-63e1e045]{position:absolute;top:0;right:0;border-radius:50%!important;color:#3f8ae0;background-color:#fff;padding:10px;cursor:pointer;z-index:999}",""]),t.exports=e},314:function(t,e,r){"use strict";r(292)},315:function(t,e,r){(e=r(40)(!1)).push([t.i,".card__item[data-v-3679b7a9]{margin:24px}.card__item-text[data-v-3679b7a9]{font-size:18px;margin:18px 0}.card__item-text--hide[data-v-3679b7a9]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card__item-imgs[data-v-3679b7a9]{display:flex;justify-content:flex-start;align-items:flex-start;margin-bottom:10px}.card__item-imgs img[data-v-3679b7a9]{margin-right:20px}.card__item-imgs img[data-v-3679b7a9]:last-child{margin-right:0}.card__slide[data-v-3679b7a9]{position:relative}.card__slide--expand-icon[data-v-3679b7a9]{position:absolute;top:5px;right:5px;width:24px;height:24px;border-radius:50%!important;color:#3f8ae0;background-color:hsla(0,0%,100%,.8);z-index:999;padding:5px;cursor:pointer;transition:all .3s ease-in-out}.card__slide--expand-icon[data-v-3679b7a9]:hover{background-color:#fff}.icon[data-v-3679b7a9]{color:#3f8ae0}",""]),t.exports=e},326:function(t,e,r){var content=r(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("e23b7040",content,!0,{sourceMap:!1})},327:function(t,e,r){(e=r(40)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},330:function(t,e,r){var content=r(331);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("1cdf85c7",content,!0,{sourceMap:!1})},331:function(t,e,r){(e=r(40)(!1)).push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=e},332:function(t,e,r){var content=r(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("2fba213c",content,!0,{sourceMap:!1})},333:function(t,e,r){(e=r(40)(!1)).push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=e}}]);