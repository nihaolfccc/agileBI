webpackJsonp([37],{sbAm:function(t,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=function(t){var a=[];return t.forEach(function(t,r){var e={name:t};a.push(e)}),a},n=function(t,a){var r=[];return a.forEach(function(a,e){var n={name:a,type:"radar",data:[]},o=[];t.forEach(function(t,a){o.push(t[e])}),n.data.push(o),r.push(n)}),r};a.default=function(t){if(console.log("2维多序列线状雷达图",t),"twoMradarLine"===t.type)return{tooltip:{trigger:"item",axisPointer:{type:"shadow",shadowStyle:{shadowBlur:0,shadowOffsetY:-5},z:1}},legend:{type:"scroll",orient:"vertical",left:"left",data:t.data.name,formatter:function(t){return t.substring(0,7)}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]},formatter:function(t){return t.substring(0,6)}},indicator:e(t.data.handleManyNameArr)},series:n(t.data.handleManyDataArr,t.data.name)};console.error("数据类型错误")}}});