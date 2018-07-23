<template>
  <div class="search clearfix">
    <div class="search_config">
      <div class="search_config_name">
        <span>
          <i class="iconfont icon-peizhi"></i>
          <label>当前选择的配置：</label>
        </span>
        <span>销售业绩2017-9-23</span>
      </div>
      <div class="search_config_date">2018年5月16日15:23:00</div>
    </div>

    <div class="search_logo">
      <img src="../../assets/imgs/logo.png" />
    </div>
    <div class="search_from">
      <input type="text" placeholder="请输入需要查询的内容" v-model="searchContent" v-focus @keyup.enter="goSearchPage"/>
      <button @click="goSearchPage">搜索一下</button>
    </div>

    <div class="search_example">
      <h3>推荐问题：</h3>
      <ul>
        <li v-for="(item, index) in recommendProblem" :key="index" @click="goSearchPage2(item)">
          <a>{{item}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 测试接口
import { getList, postList } from "@/api/index.js";
export default {
  data: function() {
    return {
    	searchContent: '',
    	recommendProblem: ['按受教育程度年薪细分是多少？', '年薪的预测模型是什么？', '是什么决定年薪？', '周薪的价值如何按受教育程度进行比较？']
    }
  },
  created() {
    // 测试接口
    getList({ categoryName: "水产", id: "你好" })
      .then(data => console.log(data))
      .catch(err => console.error(err));
    postList({ id: "1", uid: "222" })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  },
  methods: {
  	//input内按下回车触发或者点击按钮触发
  	goSearchPage(){
  		if (this.searchContent) {
  			sessionStorage.setItem('searchContent', this.searchContent)
		  	this.$router.push({ path: "searchReuslt" });
  		}
		},
		goSearchPage2(item){
  		sessionStorage.setItem('searchContent', item)
		  this.$router.push({ path: "searchReuslt" });
		}
  },
  mounted() {

	}
};
</script>

<style scoped lang="scss">
.search {
  height: calc(100vh - 51px);
  background: #ffffff;
  .search_config {
    float: right;
    margin: 20px 40px 0 0;
    color: #1f334b;
    font-size: 14px;
    .search_config_name {
      i {
        margin-right: 6px;
        color: #345a81;
      }
    }
    .search_config_date {
      font-size: 12px;
      color: #8f99a5;
      text-align: right;
    }
  }

  .search_logo {
    margin-top: 220px;
    text-align: center;
  	img {
      width: 312px;
      height: 62px;
    }
  }

  .search_from {
    display: flex;
    width: 810px;
    margin: 46px auto 0;
    > input {
      width: 686px;
      height: 38px;
      box-shadow: none;
      flex: 1;
      border: none;
      border: 1px solid #128274;
      padding-left: 12px;
    }
    input:focus {
      outline: 0 !important;
    }
    button {
      width: 100px;
      height: 40px;
      background: #128274;
      font-size: 16px;
      border: none;
      border: 1px solid #128274;
      color: #fff;
      cursor: pointer;
    }
  }

  .search_example {
    width: 810px;
    margin: 15px auto 0;
    text-align: center;
    > h3 {
      height: 56px;
      line-height: 56px;
      font-size: 16px;
      color: #1f364b;
    }
    > ul {
      > li {
        height: 42px;
        line-height: 42px;
        cursor: pointer;
        /*border-top:1px solid #FFF;
							border-bottom:1px solid #FFF;*/
        /*border-image: linear-gradient( red, blue) 30 30;*/
        /*background-image: linear-gradient(270deg, #fff 5%, #c6e2de 35%, #c6e2de 65%, #fff 100%);*/
        > a {
          font-size: 14px;
          color: #666666;
        }
      }
      li:hover {
        /*border-top:1px solid #FFF;
							border-bottom:1px solid #FFF;
							border-image: -webkit-linear-gradient(#FFF, #c6e2de) 90 90;
							border-image: -moz-linear-gradient(#FFF, #c6e2de) 90 90;
							border-image: linear-gradient(#FFF, #c6e2de)90 90;*/
        background-image: linear-gradient(270deg, #fff 5%, #c6e2de 35%, #c6e2de 65%, #fff 95%);
        > a {
          text-decoration: underline;
          color: #4673ca;
        }
      }
    }
  }
}
</style>
