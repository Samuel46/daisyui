(window.webpackJsonp=window.webpackJsonp||[]).push([[101,11,40,44],{404:function(t,e,n){var r=n(18),o="["+n(405)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},405:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},407:function(t,e,n){"use strict";var r=n(10),o=n(4),l=n(82),c=n(14),d=n(12),f=n(36),h=n(163),v=n(60),m=n(5),y=n(62),C=n(61).f,x=n(26).f,_=n(13).f,w=n(404).trim,S="Number",N=o.Number,E=N.prototype,T=f(y(E))==S,I=function(t){var e,n,r,o,l,c,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=w(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l(S,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var D,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(T?m((function(){E.valueOf.call(n)})):f(n)!=S)?h(new N(I(e)),n,O):I(e)},A=r?C(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;A.length>k;k++)d(N,D=A[k])&&!d(O,D)&&_(O,D,x(N,D));O.prototype=E,E.constructor=O,c(o,S,O)}},408:function(t,e,n){"use strict";n.r(e);n(39),n(407),n(22),n(38),n(63),n(114),n(37),n(40),n(164),n(48),n(162),n(83),n(47);var r={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){n(410)},410:function(t,e,n){"use strict";var r=n(2),o=n(18),l=n(84),c=n(85),d=n(165),f=n(3),h=n(23),v=f("replace"),m=RegExp.prototype,y=Math.max,C=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,f,x,_,w,S,N,E=o(this),T=0,I=0,D="";if(null!=t){if((n=l(t))&&!~String(o("flags"in m?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=t[v]))return r.call(t,E,e);if(h&&n)return String(E).replace(t,e)}for(f=String(E),x=String(t),(_="function"==typeof e)||(e=String(e)),w=x.length,S=y(1,w),T=C(f,x,0);-1!==T;)N=_?String(e(x,T,f)):d(x,f,T,[],void 0,e),D+=f.slice(I,T)+N,I=T+w,T=C(f,x,T+S);return I<f.length&&(D+=f.slice(I)),D}})},411:function(t,e,n){"use strict";var r=n(2),o=n(404).trim;r({target:"String",proto:!0,forced:n(412)("trim")},{trim:function(){return o(this)}})},412:function(t,e,n){var r=n(5),o=n(405);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},413:function(t,e,n){"use strict";n.r(e);n(409),n(411),n(114);var r={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var r,o=new Array(1+n++).join("  "),l=new Array(n-1).join("  "),i=0;i<e.children.length;i++)r=document.createTextNode("\n"+o),e.insertBefore(r,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(r=document.createTextNode("\n"+l),e.appendChild(r));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(408).default})},424:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tabs:[{title:"Tailwind Plugin",url:"/docs/install"},{title:"Use CDN",url:"/docs/install/cdn"},{title:"WindiCSS",url:"/docs/install/windicss"},{title:"Tachyons",url:"/docs/install/tachyons"},{title:"BassCSS",url:"/docs/install/basscss"}]}}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-x-auto mb-10"},[n("div",{staticClass:"tabs flex-nowrap whitespace-nowrap"},[t._l(t.tabs,(function(e,r){return n("NuxtLink",{key:e.url,staticClass:"tab tab-lifted tab-lg",class:{"tab-active":t.$nuxt.$route.path==e.url},attrs:{to:e.url}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),t._v(" "),n("a",{staticClass:"tab tab-lifted tab-lg",attrs:{target:"_blank",rel:"noopener",href:"https://github.com/saadeghi/daisyui/tree/master/examples"}},[n("span",{staticClass:"text-xs link flex items-center"},[t._v("\n        More examples on github\n        "),n("svg",{staticClass:"fill-current ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V12H19V19Z"}})])])]),t._v(" "),n("span",{staticClass:"tab tab-lifted tab-lg flex-grow cursor-default"})],2)])}),[],!1,null,null,null);e.default=component.exports},518:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{DAISYUI_VERSION:"1.13.0"}},head:function(){return{title:"daisyUI — Use CDN file",meta:[{hid:"description",name:"description",content:"Use Tailwind CSS and daisyUI from CDN"}]}}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TabHandler"),t._v(" "),t._m(0),t._v(" "),n("Wrapper",{attrs:{nocode:""}},[n("p",{staticClass:"prose text-base-content"},[t._v("\n        You don't need to install anything. Just add the CSS file to your <head> tag.\n        "),n("br"),t._v("However, these files are large for production and you can't purge unused styles.\n      ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"text-sm shadow-lg mockup-code"},[n("pre",[n("code",[t._v("\n  "),n("span",{staticClass:"text-neutral-content text-opacity-40"},[t._v('<link href="')]),t._v("https://cdn.jsdelivr.net/npm/tailwindcss@2.1/dist/tailwind.min.css"),n("span",{staticClass:"text-neutral-content text-opacity-40"},[t._v('" rel="stylesheet" type="text/css" />')]),t._v("\n  "),n("span",{staticClass:"text-neutral-content text-opacity-40"},[t._v('<link href="')]),t._v("https://cdn.jsdelivr.net/npm/daisyui@"+t._s(t.DAISYUI_VERSION)+"/dist/full.css"),n("span",{staticClass:"text-neutral-content text-opacity-40"},[t._v('" rel="stylesheet" type="text/css" />')]),t._v("\n\n")])])])])]),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/docs/use"}},[t._v("\n        Next: How to use\n        "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Use CDN file")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TabHandler:n(424).default,Wrapper:n(413).default,Icon:n(115).default})}}]);