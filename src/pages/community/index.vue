<template>
  <div class="search-result">
    <div class="content">
      <div class="clearfix main_sum">
        <div class="main_echarts">
          <div class="main_hed">
            <h2>推荐社区</h2>
          </div>
        </div>
      </div>
      <div class="clearfix community_wrap">
        <ul>
          <li v-for="(item,index) in dataList">
            <span class="circle">
              <i :class="item.icon"></i>
            </span>
            <span class="txt">{{item.name}}</span>
            <div class="med_checkbox">
              <input type="checkbox" class="med_real" :key="item.value" :value="item.name" v-model="selected" @click="check($event)" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      dataList: [
        {
          value: "1",
          name: "工商社区",
          icon: "iconfont icon-1"
        },
        {
          value: "2",
          name: "财务社区",
          icon: "iconfont icon-qiandai"
        },
        {
          value: "3",
          name: "金融社区",
          icon: "iconfont icon-19"
        },
        {
          value: "4",
          name: "文化社区",
          icon: "iconfont icon-jiaoyupeixun"
        },
        {
          value: "5",
          name: "保险社区",
          icon: "iconfont icon-baoxianxiaoshou1"
        },
        {
          value: "6",
          name: "能源社区",
          icon: "iconfont icon-jiayouzhan"
        },
        {
          value: "7",
          name: "健康社区",
          icon: "iconfont icon-2jiankangzhishi"
        },
        {
          value: "8",
          name: "电商社区",
          icon: "iconfont icon-shangdian"
        },
        {
          value: "9",
          name: "教育社区",
          icon: "iconfont icon-jiaoyu"
        },
        {
          value: "10",
          name: "工业社区",
          icon: "iconfont icon-qiyegongchangjianzhu2"
        },
        {
          value: "11",
          name: "物流社区",
          icon: "iconfont icon-wuliu2"
        },
        {
          value: "12",
          name: "银行社区",
          icon: "iconfont icon-yinhangqia"
        },
        {
          value: "13",
          name: "农业社区",
          icon: "iconfont icon-zhiwu"
        },
        {
          value: "14",
          name: "地理社区",
          icon: "iconfont icon-diliweizhi"
        },
        {
          value: "15",
          name: "气象社区",
          icon: "iconfont icon-qixiangzhan"
        },
        {
          value: "16",
          name: "房产社区",
          icon: "iconfont icon-ai-home"
        },
        {
          value: "17",
          name: "环境社区",
          icon: "iconfont icon-huanjing"
        }
      ],
      selected: sessionStorage.getItem("communityCheckList")
        ? sessionStorage.getItem("communityCheckList").split(",")
        : [],
      communityCheckList: []
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    check(e) {
      if (e.target.checked == true) {
        if (this.communityCheckList.indexOf(e.target.value) == -1) {
          this.communityCheckList.push(e.target.value);
        }
      } else {
        var item = e.target.value;
        for (let i = 0; i < this.communityCheckList.length; i++) {
          if (this.communityCheckList[i] == item) {
            this.communityCheckList.splice(i, 1);
            i--;
          }
        }
      }
      sessionStorage.setItem("communityCheckList", this.communityCheckList);
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.search-result {
  height: 100%;
  .content {
    padding-top: 21px;
    padding-bottom: 74px;
    margin: 0 50px;
    .community_wrap {
      background: #fff;
      padding: 20px;
      ul {
        width: 102%;
        li {
          position: relative;
          display: inline-block;
          margin: 30px;
          width: 160px;
          border: 1px solid #f0f0f0;
          border-radius: 3px;
          .circle {
            display: block;
            width: 110px;
            height: 110px;
            border-radius: 100%;
            margin: 30px auto 0;
            background: #f45936;
            i.iconfont {
              line-height: 110px;
              font-size: 76px;
              color: #fff;
              display: block;
              margin: auto;
              text-align: center;
            }
          }
          .txt {
            display: block;
            text-align: center;
            margin: 20px 0;
          }
          .med_checkbox {
            position: absolute;
            top: 5px;
            right: 5px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
            .med_real {
              width: 30px;
              height: 30px;
              background: url(../../assets/imgs/unselected.png);
              background-size: 100% 100%;
              -webkit-appearance: none;
              outline: none;
              cursor: pointer;
            }
            input[type="checkbox"]:checked {
              background: url(../../assets/imgs/pitch_on_blue.png);
              background-size: 100% 100%;
            }
          }
        }
        li:hover {
          border: 1px solid #ed4d2b;
          box-shadow: 0 0 20px rgba(255, 48, 0, 0.2);
        }
      }
    }
  }
  .main_sum {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .main_echarts {
    flex: 1;
    .main_hed {
      display: flex;
      justify-content: space-between;
      h2 {
        flex: 1;
        height: 80px;
        line-height: 80px;
        font-weight: 700;
        font-size: 20px;
        color: #333333;
      }
    }
  }
}

.theme-red {
  .search-result .content .community_wrap ul li .circle {
    background: url(../../assets/imgs/sq_bg_all.png) no-repeat -228px -33px;
  }
  .search-result .content .community_wrap ul li:hover {
    border: 1px solid #ed4d2b;
    box-shadow: 0 0 20px rgba(255, 48, 0, 0.2);
  }
}
.theme-blue {
  .search-result .content .community_wrap ul li .circle {
    background: url(../../assets/imgs/sq_bg_all.png) no-repeat -448px -33px;
  }
  .search-result .content .community_wrap ul li:hover {
    border: 1px solid #00a8ff;
    box-shadow: 0 0 20px rgba(0, 168, 255, 0.2);
  }
}
.theme-green {
  .search-result .content .community_wrap ul li .circle {
    background: url(../../assets/imgs/sq_bg_all.png) no-repeat -8px -34px;
  }
  .search-result .content .community_wrap ul li:hover {
    border: 1px solid #41bf7a;
    box-shadow: 0 0 20px rgba(65, 191, 122, 0.2);
  }
}
</style>
