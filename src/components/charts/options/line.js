const option = (OPT) => {
  if (OPT.type !== 'line') {
    console.error('数据类型错误')
    return
  }
  let lineOption = {
    legend: {
      data: [
        "2010", "2011", "2012"
      ],
      right: '4%',
      textStyle: {
        color: '#333'
      },
      itemWidth: 20,
      itemHeight: 5,
      icon: 'bar'
    },
    xAxis: {
      type: 'category',
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
        },
        splitLine: {
          show: true,
          color: "#9f9f9f"
        }
      },
      data: [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
      ]
    },
    yAxis: {
      type: 'value',
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
      },
      splitLine: {
        show: true,
        color: "#9f9f9f"
      }
    },
    series: [
      {
        data: [
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320
        ],
        type: 'line',
        smooth: true,
        symbol: 'none',
        name: '2010'
      }, {
        data: [
          800,
          900,
          905,
          934,
          1290,
          1130,
          1420
        ],
        type: 'line',
        smooth: true,
        symbol: 'none',
        name: '2011'
      }, {
        data: [
          720,
          532,
          401,
          634,
          890,
          1230,
          1520
        ],
        type: 'line',
        smooth: true,
        symbol: 'none',
        name: '2012'
      }
    ]
  };
  return lineOption
}

export default option
