webpackJsonp([12],{BKLs:function(s,e){},IyU0:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("4YfN"),a=t.n(r),n=t("9rMa"),o=(t("aozt"),t("VPSd")),i=t("gyMJ"),c={components:{progressBar:o.a},data:function(){return{showProgress:!1,progress:0,missionId:""}},computed:a()({},Object(n.c)(["requests"])),watch:{},methods:{relatuinAjax:function(){var s=this;Object(i.q)({userId:this.$root.userId}).then(function(e){"success"==e.message?e.data.status&&(s.missionId=e.data.missionId,s.showProgress=!0,s.getKGBuildProgressAjax()):s.$message({type:"error",duration:1e3,message:e.message})}).catch(function(e){s.$message({type:"error",duration:1e3,message:e})})},cancelKGBuildAjax:function(){var s=this;Object(i.c)({userId:this.$root.userId,missionId:this.missionId}).then(function(e){"success"==e.message?e.data.status&&(s.showProgress=!1,s.$message({type:"success",duration:1e3,message:"成功终止知识图谱构建任务"})):s.$message({type:"error",duration:1e3,message:e.message})}).catch(function(e){s.$message({type:"error",duration:1e3,message:e})})},getKGBuildProgressAjax:function(){var s=this;Object(i.u)({userId:this.$root.userId,missionId:this.missionId}).then(function(e){"success"==e.message?-2!=e.data.process&&-1!=e.data.process?(s.progress=e.data.process,s.progress>=100?(s.progress=100,s.$message({type:"success",duration:1e3,message:"知识图谱构建成功！"}),s.$router.push({name:"hotWord"})):setTimeout(function(){s.getKGBuildProgressAjax()},2e3)):(s.$message({type:"error",duration:1e3,message:-2==e.data.process?"任务id不存在":"任务已取消"}),s.progress=0):(s.$message({type:"error",duration:1e3,message:e.message}),s.progress=0)}).catch(function(e){s.$message({type:"error",duration:1e3,message:e}),s.progress=0})}},created:function(){},mounted:function(){}},u={render:function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"relationExtraction"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!s.showProgress,expression:"!showProgress"}],staticClass:"re_begin"},[r("img",{attrs:{src:t("Q6/3"),alt:""}}),s._v(" "),r("button",{staticClass:"begin_task",on:{click:s.relatuinAjax}},[s._v("知识图谱构建")]),s._v(" "),r("p",[s._v("此抽取过程中耗时较久，未完成之前系统不可查询，请您耐心等待")])]),s._v(" "),s.showProgress?r("progress-bar",{attrs:{"module-name":"知识图谱构建进度",progress:s.progress},on:{"cancel-event":s.cancelKGBuildAjax}}):s._e()],1)},staticRenderFns:[]};var d=t("vSla")(c,u,!1,function(s){t("BKLs")},"data-v-7c216ea0",null);e.default=d.exports},"PV/g":function(s,e){},"Q6/3":function(s,e,t){s.exports=t.p+"static/img/relation-extraction.5f9dc7c.png"},VPSd:function(s,e,t){"use strict";var r={components:{},props:{moduleName:{type:String},progress:{type:[String,Number]}},data:function(){return{}},computed:{},watch:{},methods:{btn_cancel:function(){this.$emit("cancel-event")}},created:function(){},mounted:function(){}},a={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"re_begin"},[t("div",{staticClass:"re_percent"},[t("span",[s._v(s._s(s.progress))]),s._v(" "),t("i",{staticClass:"iconfont icon-baifenbi "})]),s._v(" "),t("span",{staticClass:"re_begin_plan"},[s._v(s._s(s.moduleName))]),s._v(" "),t("div",{staticClass:"progress_my"},[t("div",{staticClass:"progress_my_bar"},[t("div",{staticClass:"pmb_backgfound transition",style:{width:s.progress+"%"}})])]),s._v(" "),t("button",{staticClass:"begin_cancel el-btn cancel",on:{click:s.btn_cancel}},[s._v("取消")])])},staticRenderFns:[]};var n=t("vSla")(r,a,!1,function(s){t("PV/g")},"data-v-796cb804",null);e.a=n.exports}});