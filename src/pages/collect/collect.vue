<template>
	<div class="collect">
	<div class="search-result">
		<div class="content">
			<div class="clearfix main_sum">
				<div class="main_echarts">
					<div class="main_hed">
						<h2>我的收藏</h2>
						<div class="main_button">
							<button class="check_all_blue" @click="checkAll()">
								<i class="iconfont icon-quanxuan"></i>
								<b>全选</b>
								<input id="all-checked" type="checkbox" :checked="isAllChecked()" @change="changeAllChecked($event)"/>
							</button>
							<button class="report_blue" :disabled="collectCheckList.length==0">
								<i class="iconfont icon-zhizuo"></i>
								<b>导出</b>
							</button>
							<button class="report_blue" :disabled="collectCheckList.length==0">
								<i class="iconfont icon-unie639"></i>
								<b>删除</b>
							</button>
						</div>
					</div>
					<ul class="main_echarts_drawing clearfix">
						<li v-for="(item,index) in collectList" :key="index">
							<div class="med_border">
								<img :src="img" v-show="true" />
								<img src="../../assets/imgs/placeholder_blue.png" class="img_true" v-show="false" />
								<div class="med_explain" :title="item.text">{{item.text}}</div>
								<div class="med_checkbox">
									<input type="checkbox" :value="index" class="med_real" v-model="collectCheckList" @click="check($event)" />
								</div>
							</div>
						</li>
					</ul>
					<div class="clearfix">
						<pagination :total="total"></pagination>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import pagination from '@/components/pagination/pagination'
	export default {
		components: {
			pagination
		},
		data() {
			return {
				total:200,
				collectList: [
					{
						text: '接受教育程度的年薪细分是多少？',
						id: 1
					},
					{
						text: '接受教育程度的年薪细分是多少？2',
						id: 2
					},
					{
						text: '接受教育程度的年薪细分是多少？3',
						id: 3
					},
					{
						text: '接受教育程度的年薪细分是多少？4',
						id: 4
					},
					{
						text: '接受教育程度的年薪细分是多少？5',
						id: 5
					},
					{
						text: '接受教育程度的年薪细分是多少？6',
						id: 6
					},
					{
						text: '接受教育程度的年薪细分是多少？6',
						id: 7
					},
					{
						text: '接受教育程度的年薪细分是多少？6',
						id: 8
					},
					{
						text: '接受教育程度的年薪细分是多少？6',
						id: 9
					},
					{
						text: '接受教育程度的年薪细分是多少？6',
						id: 10
					},
					{
						text: '接受教育程度的年薪细分是多少？6',
						id: 11
					},
					{
						text: '接受教育程度的年薪细分是多少？6',
						id: 12
					},
					{
						text: '接受教育程度的年薪细分是多少？6',
						id: 13
					},
					{
						text: '接受教育程度的年薪细分是多少？6',
						id: 14
					},
					{
						text: '接受教育程度的年薪细分是多少？6',
						id: 15
					}
				],
				img: localStorage.getItem("theme") ? require('../../assets/imgs/placeholder_' + localStorage.getItem("theme") + '.png') : require('../../assets/imgs/placeholder_blue.png'),
//				selected: sessionStorage.getItem("collectCheckList") ? JSON.parse(sessionStorage.getItem("collectCheckList")) : [],
				collectCheckList:sessionStorage.getItem("collectCheckList") ? JSON.parse(sessionStorage.getItem("collectCheckList")) : [],
			}
		},
		computed: {
			themeColor() {
				return this.$store.state.themeColor
			}
		},
		methods: {
			changeAllChecked(event) {
				var _this = this
				if(event.target.checked === true) {
					this.collectList.forEach(function(item, index) {
						if(_this.collectCheckList.indexOf(index) == -1) {
							_this.collectCheckList.push(index);
						}
					})
//					this.collectCheckList = this.selected
					sessionStorage.setItem("collectCheckList", JSON.stringify(this.collectCheckList))
				} else {
//					this.selected = [];
					this.collectCheckList = [];
					sessionStorage.setItem("collectCheckList", JSON.stringify(this.collectCheckList))
				}
			},
			isAllChecked() {
				return this.collectCheckList.length === this.collectList.length;
			},
			checkAll() {
				document.getElementById("all-checked").click()
			},
			check(e) {
				if(e.target.checked == true) {
					if(this.collectCheckList.indexOf(e.target.value) == -1) {
						this.collectCheckList.push(Number(e.target.value))
					}
				} else {
					var item = e.target.value;
					for(let i = 0; i < this.collectCheckList.length; i++) {
						if(this.collectCheckList[i] == item) {
							this.collectCheckList.splice(i, 1);
							i--;
						}
					}
				}
				sessionStorage.setItem("collectCheckList", JSON.stringify(this.collectCheckList))
				//console.log(sessionStorage.getItem("checkList").split(","))
			}
		},
		watch:{
			themeColor: {
				handler(newValue, oldValue) {
					console.log(newValue)
					if(newValue == "red") {
						this.img = require('../../assets/imgs/placeholder_red.png')
					} else if(newValue == "blue") {
						this.img = require('../../assets/imgs/placeholder_blue.png')
					} else if(newValue == "green") {
						this.img = require('../../assets/imgs/placeholder_green.png')
					}
				},
				deep: true
			}
		},
		created() {
			
		},
		mounted() {
			
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.collect{
	height: 100%;
}
.search-result{
	height: 100%;
	.content {
      padding-top: 12px;
      padding-bottom: 74px;
      margin: 0 50px;
      }
	.main_sum {
	  display: flex;
	  flex-direction: row;
	  justify-content: flex-start;
	}
	.main_echarts {
	  flex: 1;
	  .main_hed{
	    display: flex;
	    justify-content: space-between;
	    h2 {
	      flex: 1;
	      height: 80px;
	      line-height: 80px;
	      font-weight: 700;
	      font-size: 20px;
	      color: #333333
	    }
	    .main_button {
			height: 80px;
			line-height: 80px;
			cursor: pointer;
			button {
				display: inline-block;
				box-sizing: border-box;
				width: 100px;
				height: 32px;
				text-align: center;
				line-height: 32px;
				cursor: pointer;
				user-select: none;
				border-radius: 20px;
				margin-left: 21px;
				input {
					display: none;
				}
				b {
					font-weight: normal;
					/*text-indent:41px;*/
				}
				&:hover {
					opacity: 0.8;
				}
			}
			i {
				width: 15px;
				height: 15px;
				cursor: pointer;
				/*vertical-align: middle;*/
			}
		}
	  }
	  .main_echarts_drawing {
			li {
				position: relative;
				float: left;
				width: 19%;
				box-sizing: border-box;
				border: 8px solid #FFF;
				border-radius: 10px;
				height: 230px;
				margin-bottom: 20px;
				margin-right: 1%;
				background: #f0f0f0;
				-webkit-transition: background .3s;
				-moz-transition: background .3s;
				-ms-transition: background .3s;
				-o-transition: background .3s;
				transition: background .3s;
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
					transition: all .5s;
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
					/*background:url(../../assets/imgs/placeholder_blue.png) no-repeat;*/
					img {
						display: block;
						margin: 40px auto 0;
					}
					img.img_true {
						margin: 0;
						width: 100%;
						height: 100%;
					}
					.med_checkbox {
						position: absolute;
						top: -10px;
						right: -12px;
						width: 28px;
						height: 28px;
						border-radius: 50%;
						background: #FFFFFF;
						cursor: pointer;
						.med_real {
							width: 28px;
							height: 28px;
							background: url(../../assets/imgs/unselected.png);
							background-size: 100% 100%;
							-webkit-appearance: none;
							outline: none;
							cursor: pointer;
						}
						input[type=checkbox]:checked {
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
			li:nth-child(5n) {
				margin-right: 0;
			}
		}
	}
}
.theme-blue {
	.main_button {
		button{
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
		background: rgba(255, 255, 255, .6);
		color: $home-recommend-color;
	}
	li:hover {
		.med_explain {
			background: rgba(11, 83, 172, .6);
			color: #FFF;
		}
		.med_border {
			border: 1px solid $search-li-border!important;
		}
	}
}
.theme-red {
	.main_button {
		button{
			color: $red-color;
		}
		.check_all_blue {
			/*background:url(../../assets/imgs/red/next_red.png);
			background-size:100% 100% ;*/
			background-color: #fff3ef;
			color: #dd2a12;
			border: 1px solid #dd2a12!important;
		}
		.report_blue {
			/*background:url(../../assets/imgs/red/next_red.png);
			background-size:100% 100% ;*/
			background-color: #fff3ef;
			color: #dd2a12;
			border: 1px solid #dd2a12!important;
		}
	}
	.med_explain {
		background: rgba(255, 255, 255, .6);
		color: #37261f;
	}
	li:hover {
		.med_explain {
			background-color: rgba(72, 61, 54, 0.6);
			color: #FFF;
		}
		.med_border {
			border: 1px solid $configure-list-red !important;
		}
	}
}
.theme-green {
	.main_button {
		button{
			color: $green-color;
		}
		.check_all_blue {
			background-color: #effdf5;
			color: #009540;
			border: 1px solid #009540!important;
			/*background:url(../../assets/imgs/green/next_green.png);
			background-size:100% 100%;*/
		}
		.report_blue {
			background-color: #effdf5;
			color: #009540;
			border: 1px solid #009540!important;
			/*background:url(../../assets/imgs/green/next_green.png);
			background-size:100% 100% ;*/
		}
	}
	.med_explain {
		background: rgba(255, 255, 255, .6);
		color: #1c4e1d;
	}
	li:hover {
		.med_explain {
			background-color: rgba(90, 161, 120, 0.6);
			color: #FFF;
		}
		.med_border {
			border: 1px solid $configure-list-green!important;
		}
	}
}
</style>