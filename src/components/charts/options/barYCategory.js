const option = (OPT) => {
  if (OPT.type !== 'barYCategory') {
    console.error('数据类型错误')
    return
  }
  let barYCategoryOption = {
    grid: {
      left: "5%",
      right: "5%",
      top: "5%",
      bottom: "3%",
      containLabel: true
    },
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //     type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    //   }
    // },
    xAxis: {
      show: true,
      type: "value",
      axisLabel: {
        color: "#333"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#9f9f9f"
        }
      }
    },
    yAxis: {
      show: true,
      type: "category",
      inverse: true,
      data: [
        "黑龙江",
        "辽宁",
        "河南",
        "北京",
        "山西",
        "广西",
        "贵州",
        "甘肃",
        "上海",
        "湖北"
      ],
      nameTextStyle: {
        color: "#505050"
      },
      splitLine: {
        show: true
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#333"
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#9f9f9f"
        }
      }
    },
    series: [
      {
        name: "访问次数",
        type: "bar",
        barWidth: 5,
        itemStyle: {
          normal: {
            color: function (params) {
              let colors = OPT.color
              return colors[params.dataIndex]
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "right",
            color: "#505050",
            formatter: function (params) {
              return params.value + "%";
            }
          }
        },
        silent: true,
        data: [
          78,
          63,
          46,
          38,
          31,
          25,
          21,
          18,
          17,
          16
        ]
      }
    ]
  };
  return barYCategoryOption
}

export default option