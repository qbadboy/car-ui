(function(t){function n(n){for(var i,c,o=n[0],l=n[1],s=n[2],f=0,d=[];f<o.length;f++)c=o[f],a[c]&&d.push(a[c][0]),a[c]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(n);while(d.length)d.shift()();return r.push.apply(r,s||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,o=1;o<e.length;o++){var l=e[o];0!==a[l]&&(i=!1)}i&&(r.splice(n--,1),t=c(c.s=e[0]))}return t}var i={},a={index:0},r=[];function c(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=i,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)c.d(e,i,function(n){return t[n]}.bind(null,i));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/carp-ui/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=n,o=o.slice();for(var s=0;s<o.length;s++)n(o[s]);var u=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("c31f")},"0ab4":function(t,n,e){},1202:function(t,n,e){},"177c":function(t,n,e){},2100:function(t,n,e){},5084:function(t,n,e){"use strict";var i=e("2100"),a=e.n(i);a.a},"75f5":function(t,n,e){"use strict";var i=e("b7b8"),a=e.n(i);a.a},"809e":function(t,n,e){"use strict";var i=e("efa6"),a=e.n(i);a.a},"833b":function(t,n,e){"use strict";var i=e("8b22"),a=e.n(i);a.a},"8b22":function(t,n,e){},9201:function(t,n,e){"use strict";var i=e("1202"),a=e.n(i);a.a},a8aa:function(t,n,e){"use strict";var i=e("ad1a"),a=e.n(i);a.a},a8d1:function(t,n,e){"use strict";var i=e("177c"),a=e.n(i);a.a},ad1a:function(t,n,e){},b7b8:function(t,n,e){},b881:function(t,n,e){},c31f:function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"carp"}},[e("div",[t._v("CARP")]),e("p",[t._v("- iconFont -")]),e("div",{staticStyle:{color:"#092a44"}},t._l(t.icons,function(t){return e("carp-iconfont",{key:"icon-"+t,attrs:{name:t}})}),1),e("p",[t._v("- Button -")]),e("carp-button",[t._v("TEST")]),e("br"),e("carp-button",{attrs:{loading:""}},[t._v("TEST")]),e("br"),e("carp-button",{attrs:{outline:"",loading:""}},[t._v("TEST")]),e("p",[t._v("- Loading -")]),e("carp-loading"),e("p",[t._v("- Switch -")]),e("carp-switch",{model:{value:t.off.status,callback:function(n){t.$set(t.off,"status",n)},expression:"off.status"}}),e("p",[t._v("- Nav -")]),e("carp-nav",{attrs:{data:t.nav.data},on:{"nav:click":t.onNavClick},model:{value:t.nav.index,callback:function(n){t.$set(t.nav,"index",n)},expression:"nav.index"}}),e("p",[t._v("- Tab -")]),e("carp-tab",{attrs:{data:t.tab.data,border:"","indicator-width":20,"scroll-x":""},model:{value:t.tab.index,callback:function(n){t.$set(t.tab,"index",n)},expression:"tab.index"}}),e("br"),e("carp-tab",{attrs:{data:t.tab.data,width:.5,"scroll-x":!0},model:{value:t.tab.index,callback:function(n){t.$set(t.tab,"index",n)},expression:"tab.index"}}),e("p",[t._v("- Scroll -")]),e("div",{staticStyle:{height:"80px"}},[e("carp-scroll",{attrs:{scrollbar:""}},[e("div",t._l(10,function(n){return e("div",{key:n},[t._v("- 列表"+t._s(n)+" -")])}),0)])],1),e("br"),e("carp-scroll",{attrs:{"scroll-x":!0}},[e("div",{staticClass:"scrollx"},t._l(10,function(n){return e("div",{key:n,staticClass:"scrollx-item"},[t._v("- 列表"+t._s(n)+" -")])}),0)]),e("p",[t._v("- Input -")]),e("carp-input",{attrs:{placeholder:"输入你要搜索的城市",large:!0},model:{value:t.input.value,callback:function(n){t.$set(t.input,"value",n)},expression:"input.value"}},[e("template",{slot:"action"},[e("carp-iconfont",{staticStyle:{color:"orange"},attrs:{name:"love"}}),t._v("搜索\n    ")],1)],2),e("br"),e("carp-input",{attrs:{line:"",placeholder:"填写姓名","action-text":"清除"},model:{value:t.input.value,callback:function(n){t.$set(t.input,"value","string"===typeof n?n.trim():n)},expression:"input.value"}}),e("br"),e("carp-input",{attrs:{line:"",placeholder:"填写姓名"},model:{value:t.input.value,callback:function(n){t.$set(t.input,"value","string"===typeof n?n.trim():n)},expression:"input.value"}})],1)},r=[],c={name:"carp",data:function(){return{input:{value:""},icons:["del","minus","plus","close","success","arrow-top","arrow-right","user","love","coupon"],testData:["aaa","bbb","ccc","ddd","eee"],off:{status:!1},nav:{data:[{name:"接机"},{name:"送机"},{name:"境外接送机"},{name:"定制用车"}],index:0},tab:{data:[{name:"接机"},{name:"送机"},{name:"接机"},{name:"送机"},{name:"接机"}],index:0}}},methods:{onNavClick:function(t){console.log("onNavClick:",t)}}},o=c,l=(e("e0e6"),e("2877")),s=Object(l["a"])(o,a,r,!1,null,"77ac5a5b",null),u=s.exports,f=e("cebc"),d=(e("ac6a"),e("28a5"),function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),p=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("i",{staticClass:"carp-iconfont",class:"carp-icon-"+t.name})}],h={name:"carp-iconfont",props:{name:{type:String,required:!0}}},v=h,b=Object(l["a"])(v,d,p,!1,null,null,null),m=b.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"carp-button",staticClass:"carp-button",class:t.bindClass,on:{click:function(n){(!t.disabled||!t.loading)&&t.$emit("click:button")}}},[t.loading?e("loading",{key:"button-loading",staticClass:"loading"}):t._t("default")],2)},y=[],g=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"carp-loading"},[e("div"),e("div"),e("div")])}],k={name:"carp-loading"},w=k,$=(e("833b"),Object(l["a"])(w,g,x,!1,null,null,null)),E=$.exports,C={name:"carp-button",props:{disabled:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},small:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{bindClass:function(){var t=this.disabled,n=this.radius,e=this.inline,i=this.small,a=this.outline,r=this.loading;return{disabled:t,radius:n,inline:e,small:i,outline:a,relative:r}}},components:{Loading:E},mounted:function(){this.$refs["carp-button"].addEventListener("touchstart",function(){},!1)}},T=C,S=(e("75f5"),Object(l["a"])(T,_,y,!1,null,null,null)),O=S.exports,B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"carp-nav"},[e("div",{ref:"carp-nav-scroll",staticClass:"carp-nav-scroll"},[e("div",{staticClass:"carp-nav-items"},[t._l(t.data,function(n,i){return e("div",{key:"nav-item-"+i,ref:"carp-nav-item",refInFor:!0,staticClass:"carp-nav-item",class:{active:i===t.current},on:{click:function(n){return t.onClick(i)}}},[t._v("\n        "+t._s(n.name)+"\n      ")])}),e("div",{ref:"carp-nav-indicator",staticClass:"carp-nav-indicator"})],2)])])},I=[],j=(e("c5f6"),e("1fba")),P=null;function W(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return function(){null!==P&&clearTimeout(P),P=setTimeout(t,n)}}function L(t){return t&&100*(t/375).toFixed(3)+"vw"}function z(t){var n=["webkit","moz","ms"],e=document.createElement("div").style,i=t.charAt(0).toUpperCase()+t.substr(1);n=n.map(function(t){return"".concat(t).concat(i)}).concat([t]);for(var a=0;a<n.length;a++)if(null!==e[n[a]])return n[a];return!1}var N={name:"carp-nav",props:{data:{type:Array,default:function(){}},current:{type:Number,default:0},animation:{type:Boolean,default:!0}},model:{event:"nav:click",prop:"current"},watch:{current:function(t,n){t!==n&&this.setIndicatorPosition(t,!1)}},methods:{onClick:function(t){this.$emit("nav:click",t),this.setIndicatorPosition(t)},setIndicatorPosition:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=this.$refs["carp-nav-indicator"].style,i=z("transform"),a=z("transition"),r=this.getOffSetLeft(t)+"px";this.animation&&n&&a&&(e[a]="all .2s linear"),i&&(e[i]="translateX(".concat(r,") translateZ(0)"))},getOffSetLeft:function(t){var n=this.$refs["carp-nav-item"][t],e=this.$refs["carp-nav-indicator"],i=n.clientWidth,a=n.offsetLeft,r=e.clientWidth;return a+(i-r)/2},_initScroll:function(){this.scroll||(this.scroll=new j["a"](this.$refs["carp-nav-scroll"],{scrollX:!0,click:!0}))},scrollRefresh:function(){this.scroll&&this.scroll.refresh()},onResize:function(){var t=W(this.scrollRefresh);window.addEventListener("resize",t)}},mounted:function(){this._initScroll(),this.setIndicatorPosition(this.current,!1),this.onResize()}},R=N,X=(e("5084"),Object(l["a"])(R,B,I,!1,null,null,null)),M=X.exports,F=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"carp-tab"},[e("div",{ref:"carp-tab-scroll-"+t.id,staticClass:"carp-tab-scroll"},[e("div",{staticClass:"carp-tab-items"},[t._l(t.data,function(n,i){return e("div",{key:"tab-item-"+i,ref:"carp-tab-item-"+t.id,refInFor:!0,staticClass:"carp-tab-item",class:{active:i===t.current,border:t.border},on:{click:function(n){return t.onClick(i)}}},[t._v("\n        "+t._s(n.name)+"\n      ")])}),e("div",{ref:"carp-tab-indicator-"+t.id,staticClass:"carp-tab-indicator"})],2)])])},A=[],q=e("f499"),D=e.n(q),J=(e("6b54"),{name:"carp-tab",data:function(){return{id:Math.random().toString(36).substr(2,6)}},props:{data:{type:Array,default:function(){}},current:{type:Number,default:0},width:Number,border:{type:Boolean,default:!1},indicatorWidth:Number,scrollX:{type:Boolean,default:!1}},model:{event:"tab:click",prop:"current"},watch:{data:function(t,n){D()(t)!==D()(n)&&this.refresh()},current:function(t,n){t!==n&&this.setIndicatorPosition(t)}},methods:{onClick:function(t){this.$emit("tab:click",t),this.setIndicatorPosition(t)},setIndicatorPosition:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.setIndicatorWidth(t);var e=this.getOffsetLeft(t)+"px",i=z("transform"),a=z("transition"),r=this.indicatorEl.style;n&&(r[a]="all .2s linear"),r[i]="translateX(".concat(e,") translateZ(0)")},getOffsetLeft:function(t){var n=this.tabItemEl[t],e=this.indicatorEl,i=n.clientWidth,a=n.offsetLeft,r=e.clientWidth;return a+(i-r)/2},setIndicatorWidth:function(t){var n=this.tabItemEl[t],e=this.indicatorEl.style,i=n.clientWidth,a=this.indicatorWidth;e.width="number"==typeof a?L(a):i+"px"},_initTabStyle:function(){var t=this.width;if("number"==typeof t){var n=null;n=L(t<1?t*this.scrollEl.clientWidth:t),this.setTabItemWidth(n)}},setTabItemWidth:function(t){if(t){var n=this.tabItemEl;n.map(function(n){n.style.width=t})}},refresh:function(){this._queryDOM(),this.scroll&&this.scroll.refresh(),this.setIndicatorPosition(this.current,!1)},_initScroll:function(){this.scroll||(this.scroll=new j["a"](this.scrollEl,{scrollX:this.scrollX,click:!0}))},onResize:function(){var t=W(this.refresh,500);window.addEventListener("resize",t)},_queryDOM:function(){var t=this.id;this.scrollEl=this.$refs["carp-tab-scroll-".concat(t)],this.tabItemEl=this.$refs["carp-tab-item-".concat(t)],this.indicatorEl=this.$refs["carp-tab-indicator-".concat(t)]},init:function(){this._queryDOM(),this._initTabStyle(),this._initScroll(),this.setTabItemWidth(),this.setIndicatorPosition(this.current,!1)}},mounted:function(){this.init(),this.onResize()}}),U=J,V=(e("a8d1"),Object(l["a"])(U,F,A,!1,null,null,null)),Z=V.exports,G=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"carp-scroll",staticClass:"carp-scroll"},[t._t("default")],2)},H=[],K={name:"carp-scroll",props:{data:{type:Array,default:function(){return[]}},scrollX:Boolean,click:Boolean,bounce:{type:Boolean,default:!0},bounceTime:{type:Number,default:800},scrollbar:[Boolean,Object]},watch:{data:function(t,n){D()(t)!==D()(n)&&this.refresh()}},methods:{scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scrollToElement&&this.scroll.scrollToElement.apply(this.scroll,arguments)},refresh:function(){this.scroll&&this.scroll.refresh()},onResize:function(){var t=W(this.refresh);window.addEventListener("resize",t)},_initScroll:function(){var t=this.$refs["carp-scroll"];this.scroll=new j["a"](t,{scrollX:this.scrollX,click:this.click,bounce:this.bounce,bounceTime:this.bounceTime,scrollbar:this.scrollbar})}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll()}),this.onResize()}},Q=K,Y=(e("a8aa"),Object(l["a"])(Q,G,H,!1,null,null,null)),tt=Y.exports,nt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"carp-input",class:{large:t.large,focus:t.focus,line:t.line}},[e("div",{staticClass:"carp-input-box"},[e("div",{staticClass:"carp-input-control"},[e("input",{attrs:{type:t.type,placeholder:t.placeholder,autofocus:t.autofocus},domProps:{value:t.value},on:{input:function(n){return t.$emit("input",n.target.value)},focus:t.onFocus,blur:t.onBlur}})]),t.value&&t.action?e("div",{staticClass:"carp-input-action",on:{click:function(n){t.$slots.action||t.actionText?t.$emit("click:action"):t.$emit("input","")}}},[t._v("\n      "+t._s(t.actionText)+"\n      "),t._t("action"),t.$slots.action||t.actionText?t._e():e("carp-iconfont",{attrs:{name:"close"}})],2):t._e()])])},et=[],it={name:"carp-input",data:function(){return{focus:!1}},props:{value:[String,Number],type:{type:String,default:"text"},placeholder:String,large:{type:Boolean,default:!1},line:{type:Boolean,default:!1},action:{type:Boolean,default:!0},actionText:String,autofocus:{type:Boolean,default:!1}},methods:{onFocus:function(){this.focus=!0,this.$emit("focus")},onBlur:function(){this.focus=!1,this.$emit("blur")}}},at=it,rt=(e("809e"),Object(l["a"])(at,nt,et,!1,null,null,null)),ct=rt.exports,ot=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"carp-switch",class:{on:t.checked,disabled:t.disabled},on:{click:t.trigger}},[e("input",{ref:"switch-input",attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:t.checked},on:{change:function(n){return t.$emit("change:switch",n.target.checked)}}})])},lt=[],st={name:"carp-switch",props:{checked:Boolean,disabled:Boolean},model:{event:"change:switch",prop:"checked"},methods:{trigger:function(){this.$refs["switch-input"].click()}}},ut=st,ft=(e("9201"),Object(l["a"])(ut,ot,lt,!1,null,null,null)),dt=ft.exports,pt=[m,O,dt,E,M,Z,tt,ct],ht={};function vt(t){var n="carp-";return t=t.split(n),"".concat(t[0].toUpperCase()).concat(t.slice(1))}function bt(t){bt.installed||(bt.installed=!0,pt.forEach(function(n){return t.component(n.name,n)}))}pt.forEach(function(t){var n=vt(t.name);ht[n]=t}),"undefined"!==typeof window&&window.Vue&&bt(window.Vue);var mt=Object(f["a"])({install:bt},ht);e("b881");i["a"].use(mt),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(u)}}).$mount("#app")},e0e6:function(t,n,e){"use strict";var i=e("0ab4"),a=e.n(i);a.a},efa6:function(t,n,e){}});
//# sourceMappingURL=index.9f97cc69.js.map