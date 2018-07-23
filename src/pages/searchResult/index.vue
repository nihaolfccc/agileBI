<template>
	<div class="search-result">
		<div class="content">
			<div class="clearfix main_sum">
				<div class="main_echarts">
					<div class="main_hed">
						<h2>推荐</h2>
						<div class="main_button">
							<button type="button" @click="checkAll()" class="check_all_blue">
								<i class="iconfont icon-quanxuan"></i>
								<b>全选</b>
								<input id="all-checked" type="checkbox" :checked="isAllChecked()" @change="changeAllChecked($event)" />
							</button>
							<button type="button" class="report_blue" :disabled="checkList.length==0" @click="goProduceReport">
								<i class="iconfont icon-zhizuo"></i>
								<b>制作报告</b>
							</button>
						</div>
					</div>

					<ul class="main_echarts_drawing clearfix" id="loadings">
						<li v-for="(item,index) in chart" :key="index">
							<!--v-loading="loading" class="BI-loading"--> 
							<div class="med_border">
								<!--<loading></loading>-->
								<img v-lazy="item.url" class="img_true" :src="img" />
								<div class="med_explain" :title="item.text" @click="goChartPage(item.id, item.text)">{{item.text}}</div>
								<div class="med_checkbox">
									<input type="checkbox" :value="index" class="med_real" v-model="checkList" @click="check($event)" />
								</div>
							</div>
						</li>

					</ul>
				</div>
				<div class="main_attention">
					<means module-name="热点"></means>
					<means module-name="收藏"></means>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import means from "@/components/means/means";
	import { getHeadSearch } from "@/api/index.js";
	import { BIMsg } from "../../assets/js/tools.js";
	export default {
		data: function() {
			return {
				windowSize: document.documentElement.clientWidth,
				reportName: "",
				chart: [],
				checkList: sessionStorage.getItem("checkList") ?
					JSON.parse(sessionStorage.getItem("checkList")) : [],
				img: localStorage.getItem("theme") ?
					require("../../assets/imgs/placeholder_" + localStorage.getItem("theme") + ".png") : require("../../assets/imgs/placeholder_blue.png"),
			};
		},
		components: {
			means
		},
		computed: {
			chageSize() {
				window.addEventListener("resize", () => {
					this.windowSize = document.documentElement.clientWidth;
				});
				return this.windowSize;
			},
			searchContent() {
				return this.$store.state.searchContent;
			},
			changeCheckList() {
				return this.$store.state.changeCheckList;
			},
			checkState() {
				return this.$store.state.checkState;
			},
			themeColor() {
				return this.$store.state.themeColor;
			},
			searchData() {
				return this.$store.state.searchData;
			}
		},
		watch: {
			//监听搜索框内容的变化
			searchContent: {
				handler(newValue, oldValue) {
					// 调接口，返回问题所匹配的图表
					//this.chart=[]
					this.getSearchAjax(newValue)
				},
				deep: true
			},
			changeCheckList: {
				handler(newValue, oldValue) {},
				deep: true
			},
			//颜色变化跟换背景图
			themeColor: {
				handler(newValue, oldValue) {
					if(newValue == "red") {
						this.img = require("../../assets/imgs/placeholder_red.png");
					} else if(newValue == "blue") {
						this.img = require("../../assets/imgs/placeholder_blue.png");
					} else if(newValue == "green") {
						this.img = require("../../assets/imgs/placeholder_green.png");
					}
					this.$Lazyload.options.error = this.img //懒加载的报错图片
				},
				deep: true
			},
			
			//从别的路由搜索进来是不是有数据了
			searchData: {
				handler(newValue, oldValue) {
					this.chart = newValue;
				},
				deep: true
			}
		},
		methods: {
			goChartPage(id, text) {
				sessionStorage.setItem("questionId", id);
				sessionStorage.setItem("questionName", text);
				this.$router.push({
					name: "chart"
				});
			},
			goProduceReport() {
				this.$router.push({
					name: "produceReport"
				});
				var arr = [];
				this.checkList.sort();
				this.checkList.forEach(item => {
					arr.push(this.chart[item]);
				});
				sessionStorage.setItem("reportList", JSON.stringify(arr));
			},
			goAutoReport() {
				this.$router.push({
					name: "autoReport"
				});
			},
			goHandReport() {
				this.$router.push({
					name: "handReport"
				});
			},
			changeAllChecked(event) { //选择按钮 全选 单选
				var _this = this;
				if(event.target.checked === true) {
					this.chart.forEach(function(item, index) {
						if(_this.checkList.indexOf(index) == -1) {
							_this.checkList.push(index);
						}
					});
					sessionStorage.setItem("checkList", JSON.stringify(this.checkList));
				} else {
					this.checkList = [];
					sessionStorage.setItem("checkList", JSON.stringify(this.checkList));
				}
			},
			isAllChecked() { //是不是全选
				return this.checkList.length === this.chart.length;
			},
			checkAll() { //触发CheckBox
				document.getElementById("all-checked").click();
			},
			check(e) {
				if(e.target.checked == true) {
					if(this.checkList.indexOf(e.target.value) == -1) {
						this.checkList.push(Number(e.target.value));
					}
				} else {
					var item = e.target.value;
					for(let i = 0; i < this.checkList.length; i++) {
						if(this.checkList[i] == item) {
							this.checkList.splice(i, 1);
							i--;
						}
					}
				}
				sessionStorage.setItem("checkList", JSON.stringify(this.checkList));
			},
			getSearchAjax(name) { //请求接口
				getHeadSearch({
						reportName: name,
					})
					.then(data => {
						if(data.data.pageList.length > 0) {
							this.chart = []
							for(let i = 0; i < data.data.pageList.length; i++) {
								var obj = {};
								obj.text = data.data.pageList[i].reportName
								obj.id = data.data.pageList[i].id
								obj.url = data.data.pageList[i].reportUrl
								//obj.url = require("../../assets/imgs/blue/chart_bar.png")
								this.chart.push(obj)
							}
						} else {
							BIMsg({
								message: "暂无数据！",
								type: 'info'
							})
						}
					})
					.catch(err => {
						
					})
			}
		},
		created() {
//			console.log(this.$Lazyload)
			this.$Lazyload.options.error = this.img //懒加载的报错图片
			if(this.searchData.length == 0 && this.$root.search == '') {
				this.getSearchAjax(this.searchContent)
			} else {
				this.chart = this.searchData
			}
		},
		mounted() {

		}
	};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.search-result {
		height: 100%;
		.left-bar {
			width: 84px;
			background: $color-left-bar;
			z-index: 100;
			position: fixed;
			top: 82px;
			left: 0;
			height: calc(100vh - 170px);
			overflow-y: auto;
		}
		.content {
			padding-top: 21px;
			padding-bottom: 74px;
			margin: 0 50px;
		}
		.main_sum {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
		}
		.main_echarts {
			margin-right: 50px;
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
				.main_button {
					height: 80px;
					line-height: 80px;
					cursor: pointer;
					button {
						box-sizing: border-box;
						width: 100px;
						height: 32px;
						text-align: center;
						line-height: 32px;
						cursor: pointer;
						user-select: none;
						border-radius: 20px;
						&:last-of-type {
							margin-left: 20px;
						}
						i {
							width: 15px;
							height: 15px;
							cursor: pointer;
							vertical-align: middle;
						}
						b {
							font-weight: normal;
							/*text-indent:41px;*/
						}
						input {
							display: none;
						}
						&:hover {
							opacity: 0.8;
						}
					}
				}
			}
			.main_echarts_drawing {
				li {
					position: relative;
					float: left;
					width: 32%;
					box-sizing: border-box;
					border: 8px solid #fff;
					border-radius: 10px;
					height: 265px;
					margin-bottom: 20px;
					margin-right: 2%;
					background: #f0f0f0;
					-webkit-transition: background 0.3s;
					-moz-transition: background 0.3s;
					-ms-transition: background 0.3s;
					-o-transition: background 0.3s;
					transition: background 0.3s;
					.med_explain {
						position: absolute;
						bottom: -1px;
						left: -1px;
						width: 100%;
						height: 51px;
						font-size: 16px;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						border-bottom-right-radius: 10px;
						border-bottom-left-radius: 10px;
						cursor: pointer;
						font-weight: 600;
						line-height: 50px;
						text-indent: 20px;
						padding-right: 2px;
						transition: all 0.5s;
					}
					.med_border {
						position: absolute;
						top: -8px;
						left: -8px;
						width: 100%;
						height: 100%;
						border-radius: 10px;
						padding: 7px;
						border: 1px solid transparent;
						.med_checkbox {
							position: absolute;
							top: -10px;
							right: -12px;
							width: 33px;
							height: 33px;
							border-radius: 50%;
							background: #ffffff;
							cursor: pointer;
							.med_real {
								width: 33px;
								height: 33px;
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
				}
				li:hover {
					.med_explain {
						border-bottom-right-radius: 10px;
						border-bottom-left-radius: 10px;
					}
				}
				li:nth-child(3n) {
					margin-right: 0;
				}
			}
			.main_report {
				height: 133px;
				line-height: 133px;
				text-align: center;
				button {
					width: 134px;
					height: 38px;
					font-size: 16px;
					border: none;
					border-radius: 19px;
					border: 1px solid #355a7f;
					background: #fff;
					color: #355a7f;
					margin-right: 40px;
					cursor: pointer;
				}
				button:focus {
					outline: 0;
				}
			}
		}
		.main_attention {
			width: 472px;
		}
	}
	
	.theme-red {
		.main_button {
			button {
				color: $red-color;
			}
			.check_all_blue {
				background-color: #fff3ef;
				color: #dd2a12;
				border: 1px solid #dd2a12 !important;
			}
			.report_blue {
				background-color: #fff3ef;
				color: #dd2a12;
				border: 1px solid #dd2a12 !important;
			}
		}
		.med_explain {
			background: rgba(255, 255, 255, 0.6);
			color: #37261f;
		}
		li:hover {
			.med_explain {
				background-color: rgba(72, 61, 54, 0.6);
				color: #fff;
			}
			.med_border {
				border: 1px solid $configure-list-red !important;
			}
		}
	}
	
	.theme-blue {
		.main_button {
			button {
				color: #4a6c98;
			}
			.check_all_blue {
				background: url(../../assets/imgs/blue/next_blue.png);
				background-size: 100% 100%;
			}
			.report_blue {
				background: url(../../assets/imgs/blue/next_blue.png);
			}
		}
		.med_explain {
			background: rgba(255, 255, 255, 0.6);
			color: $home-recommend-color;
		}
		li:hover {
			.med_explain {
				background: rgba(11, 83, 172, 0.6);
				color: #fff;
			}
			.med_border {
				border: 1px solid $search-li-border !important;
			}
		}
	}
	
	.theme-green {
		.main_button {
			button {
				color: $green-color;
			}
			.check_all_blue {
				background-color: #effdf5;
				color: #009540;
				border: 1px solid #009540 !important;
			}
			.report_blue {
				background-color: #effdf5;
				color: #009540;
				border: 1px solid #009540 !important;
			}
		}
		.med_explain {
			background: rgba(255, 255, 255, 0.6);
			color: #1c4e1d;
		}
		li:hover {
			.med_explain {
				background-color: rgba(90, 161, 120, 0.6);
				color: #fff;
			}
			.med_border {
				border: 1px solid $configure-list-green !important;
			}
		}
	}
</style>