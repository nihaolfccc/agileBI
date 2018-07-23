<template>
	<div class="analyze-method-left">
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
						<collapse-analyze :echartsList="item.list"></collapse-analyze>
					</div>
				</div>
			</div>
		</happy-scroll>
	</div>
</template>

<script>
	import collapseAnalyze from '@/components/collapse/collapseAnalyze'
	
	export default {
		components: {
			collapseAnalyze
		},
		data() {
			return {
				active: 0,
				items: [{
						title: '分析方法列表',
						className: 'report',
						list: []
					}
				],
			}
		},
		props: {
			
		},
		computed: {
			themeColor() {
				return this.$store.state.themeColor
			}
		},
		watch: {
			themeColor: {
				handler(newValue, oldValue) {
					this.changeEchartsList()
				},
				deep: true
			}
		},
		methods: {
			showList(index) {
				if(index == this.active) {
					this.active = -1
				} else {
					this.active = index
				}
			},
			changeEchartsList() {
				this.items[0].list = [{
						title: '趋势分析',
						src: require('../../assets/imgs/common/left-layout.png'),
						src2: require('../../assets/imgs/common/left-layout.png'),
						id: 0,
						id2: 1
					},
					{
						title: '基期分析',
						src: require('../../assets/imgs/common/left-layout.png'),
						src2: require('../../assets/imgs/common/left-layout.png'),
						id: 2,
						id2: 3
					},
					{
						title: '对比分析',
						src: require('../../assets/imgs/common/left-layout.png'),
						src2: require('../../assets/imgs/common/left-layout.png'),
						id: 4,
						id2: 5
					},
					{
						title: '排名分析',
						src: require('../../assets/imgs/common/left-layout.png'),
						src2: require('../../assets/imgs/common/left-layout.png'),
						id: 6,
						id2: 7
					},
					{
						title: '结构分析',
						src: require('../../assets/imgs/common/left-layout.png'),
						src2: require('../../assets/imgs/common/left-layout.png'),
						id: 8,
						id2: 9
					}
				]
			}
		},
		created() {
			
		},
		mounted() {
			this.changeEchartsList()
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.analyze-method-left {
		height: 100%;
		.report-item {
			.report-list {
				width: 100%;
				max-height: 0;
				transition: max-height .3s;
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
				max-height: 3000px;
				transition: max-height .5s;
			}
		}
	}
	/*蓝色主题*/
	
	.theme-blue {
		.analyze-method-left {
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
					}
					>p {
						color: white;
						font-size: 14px;
					}
				}
				.report-list {
					>div {
						margin-top: 7px;
						padding: 7px 0;
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
		.analyze-method-left {
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
		.analyze-method-left {
			.report-item {
				.report-title {
					background: url(../../assets/imgs/bg_red.png) no-repeat;
					background-size: 100% 100%;
					>.report-title-icon {
						&.report {
							background: url(../../assets/imgs/green/icon_report.png) no-repeat 0 0;
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
		.analyze-method-left {
			.report-item {
				.report-title {
					background: url(../../assets/imgs/bg_green.png) no-repeat;
					background-size: 100% 100%;
					>.report-title-icon {
						&.report {
							background: url(../../assets/imgs/green/icon_report.png) no-repeat 0 0;
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