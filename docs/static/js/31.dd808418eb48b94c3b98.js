webpackJsonp([31],{w6H6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){if("twoSbarY"===e.type)return{legend:{right:"4%",textStyle:{color:"#333"},itemWidth:20,itemHeight:5,data:[]},tooltip:{trigger:"axis",axisPointer:{type:"shadow",z:0},padding:15},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{name:e.data.coordinateY,type:"value",axisLabel:{color:"#333"},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}}},yAxis:[{type:"category",name:e.data.coordinateX,axisLabel:{color:"#333",formatter:function(e){return e.substring(0,6)}},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#9f9f9f"}},splitLine:{show:!0},data:e.data.handleNameArr}],series:[{name:e.data.name,type:"bar",barMaxWidth:60,data:e.data.handleDataArr}]};console.error("数据类型错误")}}});