webpackJsonp([27],{bzEa:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){var a=[];return e.forEach(function(e,r){var n={value:e,name:t[r]};a.push(n)}),a};t.default=function(e){if("twoSpieRing"===e.type)return{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c}"},legend:{type:"scroll",orient:"vertical",x:"left",data:e.data.handleNameArr,formatter:function(e){return""!=e&&"string"==typeof e?e.substring(0,6):e}},series:[{name:e.data.coordinateX+":"+e.data.name,type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"16",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:r(e.data.handleDataArr,e.data.handleNameArr)}]};console.error("数据类型错误")}}});