webpackJsonp([12],{"0s5S":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={props:{list:[Object,Array]},data:function(){return{mark:0,activeIndex:0,transLate:0,width:509,nextActive:!(this.list.list.length>3),prevActive:!0}},computed:{newList:function(){return this.list.list}},watch:{list:{handler:function(i,t){},deep:!0},newList:{handler:function(i,t){var e=i.length,n=t.length;e>n?this.commonClick(e,Math.ceil(e/3)-1):n>e&&this.activeIndex==Math.ceil(e/3)&&this.commonClick(e,Math.ceil(e/3)-1),e<=3&&(this.prevActive=!0,this.nextActive=!0)},deep:!0}},methods:{commonClick:function(i,t){var e=Math.ceil(i/3);return!(t<0)&&(!(t>=e)&&(this.mark=t,t<=0?(this.prevActive=!0,this.nextActive=!1):t>=e-1?(this.nextActive=!0,this.prevActive=!1):(this.nextActive=!1,this.prevActive=!1),this.width=510*e,this.transLate=-510*this.mark,void(this.activeIndex=t)))},subClick:function(i,t){this.activeIndex=i,this.commonClick(t,i)},open:function(){var i=this;this.$prompt("请输入类名","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(t){var e=t.value;console.log(e),i.list.name=e}).catch(function(){})},deleteBanner:function(i){var t=this.$parent.arr,e=this.$parent.list;t.forEach(function(n,a){n.id==i.id&&(t.splice(a,1),console.log(n.list),n.list.length>0&&n.list.forEach(function(i,t){e.push(i)}))})}},created:function(){},mounted:function(){},destroyed:function(){}},a={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"ify_vessel"},[e("div",{staticClass:"ify_name"},[e("p",[i._v("\n\t\t\t"+i._s(i.list.name)+"\n\t\t\t"),e("i",{staticClass:"iconfont icon-bi opacity",on:{click:i.open}})]),i._v(" "),e("i",{staticClass:"delete_banner iconfont icon-unie639 opacity",on:{click:function(t){i.deleteBanner(i.list)}}})]),i._v(" "),e("div",{staticClass:"banner_conter"},[e("div",{staticClass:"banner_ves"},[e("vuedraggable",{staticClass:"banner clearfix",style:"width:"+this.width+"px;transform:translateX("+this.transLate+"px) scale(1);transition:.5s",attrs:{options:{group:"people",sort:!1,ghostClass:"placeholder"}},on:{start:function(t){i.drag=!0},end:function(t){i.drag=!1}},model:{value:i.list.list,callback:function(t){i.$set(i.list,"list",t)},expression:"list.list"}},i._l(i.list.list,function(t,n){return e("div",{staticClass:"ify_file"},[e("ul",{staticClass:"cursor-move"},[e("li",[i._v(i._s(t.name))]),i._v(" "),i._l(t.childer,function(t,n){return e("li",[i._v(i._s(t.name))])})],2)])}))],1),i._v(" "),e("div",{staticClass:"prev clearfix",class:{prevActive:i.prevActive},on:{click:function(t){t.stopPropagation(),i.commonClick(i.list.list.length,i.mark-1)}}}),i._v(" "),e("div",{staticClass:"next clearfix",class:{nextActive:i.nextActive},on:{click:function(t){t.stopPropagation(),i.commonClick(i.list.list.length,i.mark+1)}}}),i._v(" "),e("div",{staticClass:"subscript"},[e("ul",i._l(Math.ceil(i.list.list.length/3),function(t,n){return e("li",{key:n,class:{active:i.activeIndex==n},on:{click:function(t){i.subClick(n,i.list.list.length)}}})}))])])])},staticRenderFns:[]};var s={components:{banner:e("vSla")(n,a,!1,function(i){e("1cAv")},"data-v-4761a482",null).exports},data:function(){return{list:[{id:1221,name:"企业信息1",childer:[{id:99,name:"企业名称"},{id:110,name:"企业ID"},{id:120,name:"企业名称"},{id:130,name:"企业地址"}]},{id:1231,name:"企业信息1",childer:[{id:99,name:"企业名称"},{id:110,name:"企业ID"},{id:120,name:"企业名称"},{id:130,name:"企业地址"}]},{id:1241,name:"企业信息1",childer:[{id:99,name:"企业名称"},{id:110,name:"企业ID"},{id:120,name:"企业名称"},{id:130,name:"企业地址"}]},{id:121,name:"企业信息1",childer:[{id:99,name:"企业名称"},{id:110,name:"企业ID"},{id:120,name:"企业名称"},{id:130,name:"企业地址"}]},{id:11,name:"企业信息1",childer:[{id:99,name:"企业名称"},{id:110,name:"企业ID"},{id:120,name:"企业名称"},{id:130,name:"企业地址"}]},{id:12,name:"投资情况1",childer:[{id:140,name:"投资方名称"},{id:150,name:"被投资方名称"},{id:160,name:"经营状况"},{id:170,name:"年利润"}]}],arr:[{id:10001,name:"商品类",list:[{id:1,name:"企业信息1",childer:[{id:10,name:"企业名称"},{id:11,name:"企业ID"},{id:12,name:"企业名称"},{id:13,name:"企业地址"}]},{id:2,name:"投资情况1",childer:[{id:14,name:"投资方名称"},{id:15,name:"被投资方名称"},{id:16,name:"经营状况"},{id:17,name:"年利润"}]},{id:3,name:"投资情况2",childer:[{id:18,name:"投资方名称"},{id:19,name:"被投资方名称"},{id:20,name:"经营状况"},{id:21,name:"年利润"}]},{id:4,name:"投资情况3",childer:[{id:22,name:"投资方名称"},{id:23,name:"被投资方名称"},{id:24,name:"经营状况"},{id:25,name:"年利润"}]}]},{id:10002,name:"工商类",list:[{id:5,name:"企业信息2",childer:[{id:26,name:"企业名称"},{id:27,name:"企业ID"},{id:28,name:"企业名称"},{id:29,name:"企业地址"}]},{id:6,name:"投资情况4",childer:[{id:30,name:"投资方名称"},{id:31,name:"被投资方名称"},{id:32,name:"经营状况"},{id:33,name:"年利润"}]},{id:7,name:"投资情况5",childer:[{id:34,name:"投资方名称"},{id:35,name:"被投资方名称"},{id:36,name:"经营状况"},{id:37,name:"年利润"}]},{id:8,name:"投资情况6",childer:[{id:38,name:"投资方名称"},{id:39,name:"被投资方名称"},{id:40,name:"经营状况"},{id:41,name:"年利润"}]}]}],add:{name:"工商类",list:[{id:54,name:"企业信息32",childer:[{id:226,name:"企业名称"},{id:247,name:"企业ID"},{id:285,name:"企业名称"},{id:269,name:"企业地址"}]},{id:26,name:"投资情况34",childer:[{id:303,name:"投资方名称"},{id:341,name:"被投资方名称"},{id:325,name:"经营状况"},{id:363,name:"年利润"}]},{id:71,name:"投资情况53",childer:[{id:3474,name:"投资方名称"},{id:357,name:"被投资方名称"},{id:376,name:"经营状况"},{id:637,name:"年利润"}]},{id:58,name:"投资情况64",childer:[{id:338,name:"投资方名称"},{id:394,name:"被投资方名称"},{id:450,name:"经营状况"},{id:461,name:"年利润"}]}]},activeIndex:0,transLate:0,mark:0,id:100003}},computed:{},watch:{},methods:{bannerAdd:function(){this.arr.push({id:this.id++,name:"新增分类",list:[]})},btn_add:function(){}},created:function(){},mounted:function(){}},c={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"classify"},[e("div",{staticClass:"ify_left"},[i._l(i.arr,function(i,t){return e("banner",{key:t,attrs:{list:i}})}),i._v(" "),e("div",{staticClass:"ify_vessel"},[i._m(0),i._v(" "),e("div",{staticClass:"left_banner"},[e("div",{staticClass:"left_banner_add",on:{click:i.bannerAdd}},[e("div",{staticClass:"lba_x"}),i._v(" "),e("div",{staticClass:"lba_y"})])])])],2),i._v(" "),e("div",{staticClass:"ify_right"},[e("div",{staticClass:"ify_right_explain"},[e("span",[i._v("拖拽列表将其加入分类，或从分类中删除")]),i._v(" "),e("div",{staticClass:"ire_btn"},[e("button",{staticClass:"test el-btn save",on:{click:i.btn_add}},[i._v("保存")]),i._v(" "),e("button",{staticClass:"next el-btn cancel"},[i._v("取消")])])]),i._v(" "),e("vuedraggable",{staticClass:"clearfix ify_container",attrs:{options:{group:"people",ghostClass:"placeholder"}},on:{start:function(t){i.drag=!0},end:function(t){i.drag=!1}},model:{value:i.list,callback:function(t){i.list=t},expression:"list"}},i._l(i.list,function(t,n){return e("div",{key:t.id,staticClass:"ify_file"},[e("ul",{staticClass:"cursor-move"},[e("li",[i._v(i._s(t.name))]),i._v(" "),i._l(t.childer,function(t,n){return e("li",{key:n},[i._v(i._s(t.name))])})],2)])}))],1)])},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"ify_name"},[t("p",[this._v("\n\t\t\t\t\t增加分类\n\t\t\t\t")])])}]};var d=e("vSla")(s,c,!1,function(i){e("1WG5")},"data-v-a8838c48",null);t.default=d.exports},"1WG5":function(i,t){},"1cAv":function(i,t){}});