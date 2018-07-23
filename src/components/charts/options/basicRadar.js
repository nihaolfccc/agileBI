import echarts from 'echarts'
const option = (OPT) => {
  if (OPT.type !== 'basicRadar') {
    console.error('数据类型错误')
    return
  }
  let basicRadarOption = {
    tooltip: {},
    radar: [
      {
        indicator: [
          {
            "text": " 教学考核",
            "max": 100
          }, {
            "text": "学院绩效",
            "max": 100
          }, {
            "text": "公共服务",
            "max": 100
          }, {
            "text": "科研考核",
            "max": 100
          }, {
            "text": "突出科研",
            "max": 100
          }
        ],
        name: {
          color: '#000',
          fontSize: 14
        },
        startAngle: -17,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            width: 2,
            opacity: .2
          }
        },
        splitArea: {
          show: false
        }
      }
    ],
    series: [
      {
        type: "radar",
        data: [
          {
            "name": "综合绩效",
            "value": [
              40, 100, 80, 5, 8
            ],
            areaStyle: {
              normal: {
                color: new echarts
                  .graphic
                  .LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: OPT.radarColor[0]
                    }, {
                      offset: 1,
                      color: OPT.radarColor[1]
                    }
                  ])
              }
            },
            symbolSize: 0,
            // itemStyle: {   color: '#2eb3ff' },
            lineStyle: {
              color: '#fff',
              opacity: 0.1,
            }
          }
        ]
      }
    ]
  };
  return basicRadarOption
}

export default option
