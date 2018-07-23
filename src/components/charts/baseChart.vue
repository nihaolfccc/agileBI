<template>
  <div :class="[chartType=='pie'?'pie-bg':'']" ref="chart" style="height:100%;width:100%">

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    chartType: {
      type: String
    },
    echartsData: {
      type: Object,
      default: () => {}
    },
    windowSize: {
      type: Number
    },
    resize: {},
    time: {
      type: Number,
      default: 0
    },
    initTime: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      num: 0,
      timer: ""
    };
  },
  computed: {
    ...mapState(["themeColor", "flagHeight"])
  },
  watch: {
    themeColor: {
      handler: function(val, oldVal) {
        this.myChart && this.myChart.dispose();
        this.myChart = this.$echarts.init(this.$refs.chart, this.themeColor);
        this.initChart();
      }
    },
    echartsData: {
      handler: function(val, oldVal) {
        this.initChart();
      },
      deep: true // 增加deep 观察对象的子对象变化
    },
    chartType: {
      handler: function(val, oldVal) {
        this.initChart();
      }
    },
    windowSize: {
      handler: function(val, oldVal) {
        this.resizeChart();
      }
    },
    resize: {
      handler: function(val, oldVal) {
        this.resizeChart();
      }
    },
    flagHeight: {
      handler: function(val, oldVal) {
        this.resizeChart();
      }
    }
  },
  methods: {
    initChart() {
      let _this = this;
      let colors = {
        red: ["#ffcc55", "#eb5541", "#fe954f", "#cdcfd3"],
        green: ["#ffcc55", "#279e58", "#81d570", "#cdcfd3"],
        blue: ["#ffcc55", "#2790e0", "#3caff9", "#cdcfd3"]
      };
      let radarColors = {
        red: ["rgba(221,80,61,.8)", "rgba(221,80,61,.5)"],
        blue: ["rgba(82,176,252,.8)", "rgba(82,176,252,.5)"],
        green: ["rgba(80,175,84,.8)", "rgba(80,175,84,.5)"]
      };
      let opt = {
        data: _this.echartsData,
        type: _this.chartType,
        color: colors[_this.themeColor],
        radarColor: radarColors[_this.themeColor]
      };
      import(`./options/${_this.chartType}`)
        .then(_ => {
          let option = _.default(opt);
          this.myChart.setOption(option, true);
          this.myChart.on("click", params => {
            this.$emit("handleCharts", params, params.name);
          });
        })
        .catch(e => console.log(e));
    },
    resizeChart(delayTime = 300) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.myChart.resize();
      }, delayTime);
    }
  },
  mounted() {
    setTimeout(() => {
      this.myChart = this.$echarts.init(this.$refs.chart, this.themeColor || "blue");
      this.initChart();
    }, 500);
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pie-bg {
  background: url("../../assets/imgs/pie_bg.png") center no-repeat;
}
</style>