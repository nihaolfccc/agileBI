webpackJsonp([12],{"4ysO":function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c={data:function(){return{dataList:[{value:"1",name:"工商社区",icon:"iconfont icon-1"},{value:"2",name:"财务社区",icon:"iconfont icon-qiandai"},{value:"3",name:"金融社区",icon:"iconfont icon-19"},{value:"4",name:"文化社区",icon:"iconfont icon-jiaoyupeixun"},{value:"5",name:"保险社区",icon:"iconfont icon-baoxianxiaoshou1"},{value:"6",name:"能源社区",icon:"iconfont icon-jiayouzhan"},{value:"7",name:"健康社区",icon:"iconfont icon-2jiankangzhishi"},{value:"8",name:"电商社区",icon:"iconfont icon-shangdian"},{value:"9",name:"教育社区",icon:"iconfont icon-jiaoyu"},{value:"10",name:"工业社区",icon:"iconfont icon-qiyegongchangjianzhu2"},{value:"11",name:"物流社区",icon:"iconfont icon-wuliu2"},{value:"12",name:"银行社区",icon:"iconfont icon-yinhangqia"},{value:"13",name:"农业社区",icon:"iconfont icon-zhiwu"},{value:"14",name:"地理社区",icon:"iconfont icon-diliweizhi"},{value:"15",name:"气象社区",icon:"iconfont icon-qixiangzhan"},{value:"16",name:"房产社区",icon:"iconfont icon-ai-home"},{value:"17",name:"环境社区",icon:"iconfont icon-huanjing"}],selected:sessionStorage.getItem("communityCheckList")?sessionStorage.getItem("communityCheckList").split(","):[],communityCheckList:[]}},components:{},computed:{},watch:{},methods:{check:function(e){if(1==e.target.checked)-1==this.communityCheckList.indexOf(e.target.value)&&this.communityCheckList.push(e.target.value);else for(var n=e.target.value,i=0;i<this.communityCheckList.length;i++)this.communityCheckList[i]==n&&(this.communityCheckList.splice(i,1),i--);sessionStorage.setItem("communityCheckList",this.communityCheckList)}},mounted:function(){}},t={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"search-result"},[i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("div",{staticClass:"clearfix community_wrap"},[i("ul",e._l(e.dataList,function(n,c){return i("li",[i("span",{staticClass:"circle"},[i("i",{class:n.icon})]),e._v(" "),i("span",{staticClass:"txt"},[e._v(e._s(n.name))]),e._v(" "),i("div",{staticClass:"med_checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],key:n.value,staticClass:"med_real",attrs:{type:"checkbox"},domProps:{value:n.name,checked:Array.isArray(e.selected)?e._i(e.selected,n.name)>-1:e.selected},on:{click:function(n){e.check(n)},change:function(i){var c=e.selected,t=i.target,a=!!t.checked;if(Array.isArray(c)){var o=n.name,s=e._i(c,o);t.checked?s<0&&(e.selected=c.concat([o])):s>-1&&(e.selected=c.slice(0,s).concat(c.slice(s+1)))}else e.selected=a}}})])])}))])])])},staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"clearfix main_sum"},[n("div",{staticClass:"main_echarts"},[n("div",{staticClass:"main_hed"},[n("h2",[this._v("推荐社区")])])])])}]};var a=i("vSla")(c,t,!1,function(e){i("H5dD")},"data-v-f70ab074",null);n.default=a.exports},H5dD:function(e,n){}});