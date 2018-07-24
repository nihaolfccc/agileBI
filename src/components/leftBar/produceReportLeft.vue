<template>
	<div class="produce-report-left">
		<happy-scroll>
			<div class="report-item" :class="{'open': active==index}" v-for="(item, index) in items" :key="index">
				<div class="report-title" :class="{'active': active==index}" @click="showList(index)">
					<div class="report-title-icon" :class="item.className"></div>
					<p v-html="item.title"></p>
					<div class="arrow" v-if="themeColor!='blue'">
						<i class="iconfont icon-zhankai" v-show="active!=index"></i>
						<i class="iconfont icon-zhankai-copy" v-show="active==index"></i>
					</div>
				</div>
				<div class="report-list">
					<div>
						<!--条件渲染-->
						<div class="report-list-content" v-if="item.list">
							<p :class="{'active': reportActive==index}" :title="item.text" v-for="(item, index) in item.list" :key="index" @click="showReportContent(index, item.id, item.text)">{{item.text}}</p>
						</div>
						<!--条件渲染-->
						<collapse-element v-if="item.elements"></collapse-element>
					</div>
				</div>
			</div>
		</happy-scroll>
	</div>
</template>

<script>
	import collapseTwo from '@/components/collapse/collapseTwo'
	import collapseElement from '@/components/collapse/collapseElement'

	export default {
		components: {
			collapseTwo,//没用到
			collapseElement
		},
		data() {
			return {
				active: 0,
				items: [{
						title: '报&nbsp;&nbsp;告',
						className: 'report',
						list: []
					},
					{
						title: '元&nbsp;&nbsp;素',
						className: 'element',
						elements: []
					}
				],
				reportActive: 0,
			}
		},
		computed: {
			themeColor() {
				return this.$store.state.themeColor
			}
		},
		watch: {

		},
		methods: {
			showList(index) {
				if(index == this.active) {
					this.active = -1
				} else {
					this.active = index
				}
				if (this.active==1) {
					this.$store.commit('changeCanvasWrap', true)
				}else{
					this.$store.commit('changeCanvasWrap', false)
				}
			},
			showReportContent(index, id, text) {
				this.reportActive = index
				//console.log(id);
				this.$store.commit('changeReportId', id)
				this.$store.commit('changeReportName', text)
			}
		},
		mounted() {
			var reportList = JSON.parse(sessionStorage.getItem('reportList'));
			//console.log(reportList, reportList.constructor==Array);
			if(reportList.constructor==Array && reportList.length>0){
				this.items[0].list = reportList;
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	.produce-report-left {
		height: 100%;
		.report-item {
			.report-list {
				width: 100%;
				/*max-height: 0;*/
				height: 0;
				transition: all .3s;
				overflow: hidden;
				user-select: none;
				.report-list-content {
					>p {
						height: 49px;
						line-height: 49px;
						color: white;
						font-size: 14px;
						cursor: pointer;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
			&.open .report-list {
				/*max-height: 3000px;*/
				height: auto;
				transition: all .5s;
			}
		}
	}
	/*蓝色主题*/
	
	.theme-blue {
		.produce-report-left {
			box-sizing: border-box;
			padding: 6px;
			.report-item {
				margin-bottom: 11px;
				.report-title {
					height: 81px;
					text-align: center;
					cursor: pointer;
					user-select: none;
					background: url(../../assets/imgs/blue/report_title.png) no-repeat;
					background-size: 100% 100%;
					&.active {
						background: url(../../assets/imgs/blue/report_title_light.png) no-repeat;
						background-size: 100% 100%;
					}
					>.report-title-icon {
						margin-top: 16px;
						display: inline-block;
						width: 22px;
						height: 24px;
						&.report {
							background: url(../../assets/imgs/blue/icon_report.png) no-repeat 0 0;
						}
						&.chart {
							background: url(../../assets/imgs/blue/chart.png) no-repeat 0 2px;
							background-size: 100%;
						}
						&.element {
							background: url(../../assets/imgs/blue/icon_report.png) no-repeat 0 -162px;
						}
					}
					>p {
						color: white;
						font-size: 14px;
					}
				}
				.report-list {
					>div {
						margin-top: 7px;
						padding: 7px 14px;
						border-radius: 13px;
						background: url(../../assets/imgs/blue/bg_term_list.png) no-repeat;
						background-size: 100% 100%;
						.report-list-content {
							>p {
								&.active,
								&:hover {
									color: #1f9eff;
								}
							}
						}
					}
				}
			}
		}
	}
	
	.theme-red,
	.theme-green {
		.produce-report-left {
			.report-item {
				.report-title {
					height: 80px;
					padding: 0 20px;
					cursor: pointer;
					user-select: none;
					>.report-title-icon {
						float: left;
						margin-top: 30px;
						width: 18px;
						height: 20px;
					}
					>p {
						float: left;
						margin-left: 10px;
						line-height: 80px;
						color: white;
						font-size: 16px;
					}
					>.arrow {
						float: right;
						line-height: 79px;
						color: white;
					}
				}
				.report-list {
					.el-collapse-item__header {
						padding: 0 20px;
					}
					.el-collapse-item__wrap {
						padding: 21px 20px 19px;
					}
				}
			}
		}
	}
	/*红色主题*/
	
	.theme-red {
		.produce-report-left {
			background-color: #c6402e;
			.report-item {
				.report-title {
					background: url(../../assets/imgs/bg_red.png) no-repeat;
					background-size: 100% 100%;
					>.report-title-icon {
						&.report {
							background: url(../../assets/imgs/green/icon_report.png) no-repeat 0 0;
						}
						&.chart {
							background: url(../../assets/imgs/blue/chart.png) no-repeat 0 4px;
							background-size: 100%;
						}
						&.element {
							background: url(../../assets/imgs/green/icon_report.png) no-repeat 0 -157px;
						}
					}
				}
				.report-list {
					.report-list-content {
						>p {
							padding: 0 20px 1px;
							background: url(../../assets/imgs/red/bg_list_line.jpg) no-repeat left bottom;
							background-color: #d44d3b !important;
							&.active,
							&:hover {
								background: url(../../assets/imgs/red/bg_red_bar.jpg);
							}
						}
					}
				}
			}
		}
	}
	/*绿色主题*/
	
	.theme-green {
		.produce-report-left {
			background-color: #196b3a;
			.report-item {
				.report-title {
					background: url(../../assets/imgs/bg_green.png) no-repeat;
					background-size: 100% 100%;
					>.report-title-icon {
						&.report {
							background: url(../../assets/imgs/green/icon_report.png) no-repeat 0 0;
						}
						&.chart {
							background: url(../../assets/imgs/blue/chart.png) no-repeat 0 4px;
							background-size: 100%;
						}
						&.element {
							background: url(../../assets/imgs/green/icon_report.png) no-repeat 0 -157px;
						}
					}
				}
				.report-list {
					.report-list-content {
						>p {
							padding: 0 20px 1px;
							background: url(../../assets/imgs/green/bg_list_line.jpg) no-repeat left bottom;
							background-color: #1d733f !important;
							&.active,
							&:hover {
								background: url(../../assets/imgs/green/bg_green_bar.jpg);
							}
						}
					}
				}
			}
		}
	}
</style>