<template>
	<div class="bgcolor-fa border-change each-chart">
		<!-- @click="addBorder(idx)"-->
		<base-chart v-if="chartType !=''" :windowSize="chageSize" :resize="flagLeftBar" :deleteResize="deleteResize" :time="300" :initTime="300" :chartType="chartType" :options="options"></base-chart>
		<card v-if="chartType ==''" :options="options"></card>
		<div class="btn-wrap-small" v-if="visibleBtn">
			<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click.stop="item.fn(idx)"><i class="iconfont" :class="item.classIcon"></i></button>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import baseChart from '@/components/charts/baseChart'
	import card from '@/components/template/card'

	export default {
		components: {
			baseChart,
			card,
		},
		props: {
			idx: {
				type: Number
			},
			chartType: {
				type: String
			},
			options: {
				type: Object
			}
		},
		data() {
			return {
				windowSize: document.documentElement.clientWidth,
				btns: [{
						classBtn: 'btn-delete',
						classIcon: 'icon-shanchu-',
						fn: (idx) => {
							this.deleteChart(idx)
						}
					},
					{
						classBtn: 'btn-set',
						classIcon: 'icon-genghuan',
						fn: (idx) => {
							this.setChart(idx)
						}
					}
				],
			}
		},
		computed: {
			...mapState(['flagLeftBar', 'deleteResize', 'activeBorder', 'layoutType', 'chartArr', 'echartsData', 'visibleBtn']),
			chageSize() {
				window.addEventListener('resize', () => {
					this.windowSize = document.documentElement.clientWidth
				})
				return this.windowSize
			},
		},
		watch: {
			/*chartType: {
				handler(val, olVal) {
					console.log('这是图表发生变化后的', val)
				},
				deep: true
			}*/
		},
		methods: {
			/*addBorder(idx) {
				this.$store.commit('changeActiveBorder', idx)
			},*/
			deleteChart(idx) {
				this.$alert('确定删除此图表？', '提示', {
					confirmButtonClass: 'opacity',
					closeOnClickModal: true,
					closeOnPressEscape: true,
					callback: action => {
						if(action == 'confirm') {
							//console.log(this.chartArr, idx)
							if(this.chartArr.length <= 1) {
								this.$message({
									type: 'error',
									duration: 1000,
									message: '删除失败，图表数量不能少于1个！'
								});
								return;
							}
							//var i = this.chartArr.indexOf(idx)
							this.echartsData.splice(idx, 1)
							this.$store.commit('changeEchartsData', this.echartsData)
							//console.log(this.echartsData)

							this.$message({
								type: 'success',
								duration: 1000,
								message: '删除成功！'
							});
							// 重新绘制图表
							//this.$store.commit('changeDeleteResize', !this.deleteResize)
						}
					}
				})
			},
			setChart(idx) {
				this.$parent.dialogChartSet = true
				// 获取当前图表下标
				//console.log(this.chartArr, this.idx, this.chartType)
				var i = this.chartArr.indexOf(idx)
				this.$store.commit('changeCurrentChartIndex', i)
				//console.log(idx, this.chartType)
				if(this.options.chartTypeArr) { //存在才能显示不存在父级的也要清空
					var arr = []
					this.options.chartTypeArr.forEach((item, index) => {
							arr.push(this.$parent.switchType.indexOf(item))
					})
					this.$parent.highlightArr = arr
					this.$parent.chartTypeActive = this.$parent.switchType.indexOf(this.chartType)
				} else {
					this.$parent.highlightArr = []
					this.$parent.chartTypeActive = -1
				}

				/*switch(this.chartType) {
					//单序列
					case 'twoSbarY':
						console.log(this.options)
						//$()
						
						this.$parent.chartTypeActive = 0
						break;
					case 'twoSbar':
						this.$parent.highlightArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
						this.$parent.chartTypeActive = 1
						break;
					case 'twoSfunnel':
						this.$parent.highlightArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
						this.$parent.chartTypeActive = 2
						break;
					case 'twoSLine':
						this.$parent.highlightArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
						this.$parent.chartTypeActive = 3
						break;
					case 'twoSacreage':
						this.$parent.highlightArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
						this.$parent.chartTypeActive = 4
						break;
					case 'twoSpie':
						this.$parent.highlightArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
						this.$parent.chartTypeActive = 5
						break;
					case 'twoSpieRing':
						this.$parent.highlightArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
						this.$parent.chartTypeActive = 6
						break;
					case 'twoSareaPie':
						this.$parent.highlightArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
						this.$parent.chartTypeActive = 7
						break;
					case 'twoSradiusPie':
						this.$parent.highlightArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
						this.$parent.chartTypeActive = 8
						break;
					case 'twoSradarNood':
						this.$parent.highlightArr = [9, 10]
						this.$parent.chartTypeActive = 9
						break;
					case 'twoSradarLine':
						this.$parent.highlightArr = [9, 10]
						this.$parent.chartTypeActive = 10
						break;

						//多序列
					case 'twoMCluster':
						this.$parent.highlightArr = [11, 12, 13, 14, 17, 18]
						this.$parent.chartTypeActive = 14
						break;
					case 'twoMfalls':
						this.$parent.highlightArr = [14, 17, 18]
						this.$parent.chartTypeActive = 18
						break;
					case 'twoMStackAcreage':
						this.$parent.highlightArr = [14, 17, 18]
						this.$parent.chartTypeActive = 17
						break;

						//以前的
					case 'bar':
						this.$parent.highlightArr = [0, 1, 2, 3]
						this.$parent.chartTypeActive = 3
						break;
					case 'barYCategory':
						this.$parent.highlightArr = [0, 1, 2, 3]
						this.$parent.chartTypeActive = 2
						break;
					case 'line':
						this.$parent.highlightArr = [6, 7, 8]
						this.$parent.chartTypeActive = 6
						break;
					case 'lineAndBar':
						this.$parent.highlightArr = [9, 10]
						this.$parent.chartTypeActive = 10
						break;
					case 'scatter':
						this.$parent.highlightArr = [13]
						this.$parent.chartTypeActive = 13
						break;
					case 'pie':
						this.$parent.highlightArr = [14, 15]
						this.$parent.chartTypeActive = 14
						break;
					case 'torus':
						this.$parent.highlightArr = [14, 15]
						this.$parent.chartTypeActive = 15
						break;
					case 'chinaMap':
						this.$parent.highlightArr = [17]
						this.$parent.chartTypeActive = 17
						break;
					case 'basicRadar':
						this.$parent.highlightArr = []
						this.$parent.chartTypeActive = -1
						break;
					case 'hotWord':
						this.$parent.highlightArr = [16]
						this.$parent.chartTypeActive = 16
						break;
				}*/

				if(this.chartArr.indexOf(idx) == 0) { //点击主图里面的设置按钮时，'设为主图'禁用，并且取消选中
					this.$parent.isDisabled = true
					this.$parent.flagMainMap = false
				} else {
					this.$parent.isDisabled = false
				}
			},
		},
		created() {

		},
		mounted() {

		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.each-chart {
		position: relative;
		height: 100%;
	}
	
	.border-change {
		box-sizing: border-box;
		border: 1px solid #eeeeee;
		padding: 2px;
		&:hover {
			border-width: 3px;
			padding: 0;
			.btn-wrap-small {
				display: block;
			}
		}
	}
	
	.btn-wrap-small {
		display: none;
		z-index: 99;
		position: absolute;
		top: 7px;
		right: 7px;
		>button {
			float: left;
			width: 20px;
			height: 20px;
			line-height: 20px;
			border-radius: 4px;
			color: white;
			&+button {
				margin-left: 10px;
			}
			&:hover {
				opacity: .8;
			}
			i {
				font-size: 15px;
			}
		}
	}
	
	.theme-blue {
		.border-change {
			&:hover,
			&.active {
				border-color: #d1d9df;
			}
		}
		.btn-wrap-small {
			>button {
				background-color: #0e426a;
			}
		}
	}
	
	.theme-red {
		.border-change {
			&:hover,
			&.active {
				border-color: #ffaea3;
			}
		}
		.btn-wrap-small {
			>button {
				background-color: #d44c39;
			}
		}
	}
	
	.theme-green {
		.border-change {
			&:hover,
			&.active {
				border-color: #bae4c0;
			}
		}
		.btn-wrap-small {
			>button {
				background-color: #6cb28a;
			}
		}
	}
</style>