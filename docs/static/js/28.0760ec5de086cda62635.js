webpackJsonp([28],{xNJV:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("9rMa");var o={components:{btn:e("Ky/g").a},data:function(){var n=this;return{buttons:[{name:"制作报告",iconName:"icon-zhizuo",fn:function(){n.goProduceReport()}},{name:"收藏",iconName:"icon-shoucang3",fn:function(){n.collectReport()}},{name:"导出",iconName:"icon-daochu",fn:function(){n.$root.exportEcharts()}}]}},computed:{},methods:{}},c={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"test2"},this._l(this.buttons,function(n,e){return t("btn",{key:e,attrs:{item:n},nativeOn:{click:function(t){return n.fn(t)}}})}))},staticRenderFns:[]},i=e("vSla")(o,c,!1,null,null,null);t.default=i.exports}});