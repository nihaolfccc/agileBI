webpackJsonp([24],{eh7n:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=function(e){if("hotWord"===e.type)return function(a){var o,n=[],r=[],t=0;return a.forEach(function(e){r.push(e.value),t+=parseInt(e.value)}),r.sort(function(e,a){return a-e}),a.forEach(function(a,o){n.push({value:a.value,name:a.name,itemStyle:{normal:{borderColor:e.color[o%5],borderWidth:1,color:e.color[o%5]}}})}),{tooltip:{show:!0},grid:{},series:[{type:"graph",layout:"force",symbol:"rRect",force:{repulsion:120},symbolSize:function(e){var a=80+60*e/o.maxVal*.9,n=40+30*e/o.maxVal*.9;return[a,n]},roam:!0,animation:!0,draggable:!1,label:{normal:{show:!0,position:"inside",color:"#fff",formatter:function(e){return(100*e.value/o.totalNum).toFixed(1),e.name}}},data:(o={id:"chart01",maxVal:r[0],data:n,totalNum:t}).data}]}}([{name:"美的格力开打专利战",value:500},{name:"法律纠纷",value:100},{name:"监管",value:100},{name:"内幕",value:50},{name:"发放高温补贴",value:200},{name:"格兰仕",value:300},{name:"格力开打专利战",value:500},{name:"纠纷",value:100},{name:"管",value:100},{name:"幕",value:50},{name:"高温补贴",value:200},{name:"兰仕",value:300}]);console.error("数据类型错误")}}});