const option = (OPT) => {
  if (OPT.type !== 'pie') {
    console.error('数据类型错误')
    return
  }
  let pieOption = {
    tooltip: {
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        shadowStyle: {
          shadowBlur: 0,
          shadowOffsetY: -5
        },
        z: 1
      }
    },
    legend: [
      {
        left: "25%",
        y: "20",
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 15,
        data: ["新华网", "人民网", "新浪微博"]
      }, {
        left: "25%",
        itemGap: 15,
        y: "40",
        itemWidth: 15,
        itemHeight: 10,
        data: ["洛阳网", "长城网", "微信公众号"]
      }
    ],
    startAngle: "180",

    series: [
      {
        name: "",
        type: "pie",
        radius: [
          "20%", "260%"
        ],
        avoidLabelOverlap: false,
        startAngle: 0,
        roseType: "radius",
        center: [
          "50%", "50%"
        ],
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: function (a) {
              return a.value;
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "12",
              fontWeight: "bold"
            }
          }
        },
        labelLine: {
          normal: {
            show: false,
            length: 0,
            length2: 0
          }
        },
        data: [
          {
            value: 100,
            name: "新浪微博"
          }, {
            value: 120,
            name: "微信公众号"
          }, {
            value: 150,
            name: "新华网"
          }, {
            value: 180,
            name: "人民网"
          }, {
            value: 220,
            name: "洛阳网"
          }, {
            value: 300,
            name: "长城网"
          }, {
            value: 1070,
            name: "",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            tooltip: {
              formatter: function (a) {
                return "";
              }
            }
          }
        ]
      }
    ]
  };
  return pieOption
}

export default option