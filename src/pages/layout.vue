<template>
	<div id='layout' ref="layout">
		<div class="header-wrap">
			<HeaderBar></HeaderBar>
			<SearchBar v-if="visibleSearch"></SearchBar>
			<configuration v-if="!visibleSearch"></configuration>
		</div>
		<div class="main-wrap" id="main-wrap">
			<!-- <transition name="fade"> -->
			<router-view></router-view>
			<!-- </transition> -->
		</div>

		<!--对话框-->
		<el-dialog title="导出设置" :visible.sync="$root.dialogExportSet" class="dialogExportSet">
			<div class="el-dialog-content">
				<div class="selectReportPeriod clearfix">
					<span class="fl">选择报告周期</span>
					<el-radio-group v-model="reportPeriod" class="fl">
						<el-radio :label="item.label" v-for="(item, index) in reportPeriodList" :key="index">{{item.label}}</el-radio>
					</el-radio-group>
				</div>
				<div class="selectExportFormat clearfix">
					<span class="fl">选择导出格式</span>
					<el-radio-group v-model="exportFormat" class="fl">
						<el-radio :label="item.label" v-for="(item, index) in exportFormatList" :key="index">{{item.label}}</el-radio>
					</el-radio-group>
				</div>
			</div>
			<div slot="footer" class="dialog-footer">
				<button class="dialog-confirm" type="button" @click="exportConfirmFn">确 定</button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import HeaderBar from "../components/Header";
	import SearchBar from "../components/search";
	import configuration from "../components/configuration";
	import { mapState } from "vuex";

	export default {
		components: {
			HeaderBar,
			SearchBar,
			configuration
		},
		data() {
			return {
				shrinkState: 0,
				reportPeriod: '日报',
				reportPeriodList: [{
						label: '日报'
					},
					{
						label: '周报'
					},
					{
						label: '月报'
					},
					{
						label: '季报'
					},
					{
						label: '年报'
					},
				],
				exportFormat: 'word文档',
				exportFormatList: [{
						label: 'word文档'
					},
					{
						label: 'png图片'
					},
					{
						label: 'PDF文件'
					},
				],
			};
		},
		computed: {
			...mapState(["themeColor", "visibleSearch"])
		},
		watch: {
			themeColor: {
				handler(newValue, oldValue) {
					newValue ? this.setTheme() : null;
				}
			},
			visibleSearch: {//初始化渲染dom时监听不到变化，所以需要在mounted里初始化执行一次
				handler(newValue, oldValue) {
					//console.log(newValue);
					var mainWrap = document.getElementById("main-wrap")
					if(newValue) {
						mainWrap.style.paddingTop = '170px'
						mainWrap.style.minHeight = 'calc(100vh - 170px)'
					} else {
						mainWrap.style.paddingTop = '190px'
						mainWrap.style.minHeight = 'calc(100vh - 190px)'
					}
				},
				deep: true
			},
		},
		methods: {
			setTheme() {
				const target = document.getElementsByTagName('body')[0];
				//console.log(target);
				const localStorageCls = localStorage.getItem("theme") ?
					localStorage.getItem("theme") :
					"blue";
				target.className = this.themeColor ? "theme-" + this.themeColor : `theme-${localStorageCls}`;
			},
			exportConfirmFn() {
				console.log(this.reportPeriod, this.exportFormat)
				this.$root.dialogExportSet = false
			},
		},
		mounted() {
			this.$nextTick(() => {
				this.setTheme();
				var name = this.$route.name
				var mainWrap = document.getElementById("main-wrap")
				//console.log(this.visibleSearch, name);
				//控制头部搜索框与配置流程相互切换
				if(name == 'dataMatching' || name == 'dataClassify' || name == 'dataShow' || name == 'listligature' || name == 'businessMatching' || name == 'templateMatching') {
					mainWrap.style.paddingTop = '190px'
					mainWrap.style.minHeight = 'calc(100vh - 190px)'
				} else {
					mainWrap.style.paddingTop = '170px'
					mainWrap.style.minHeight = 'calc(100vh - 170px)'
				}
			});
		}
	};
</script>

<style lang="scss" rel="stylesheet/scss">
	.selectReportPeriod,
	.selectExportFormat {
		line-height: 24px;
		>span {
			margin-right: 20px;
		}
	}
	
	.selectReportPeriod {
		margin-bottom: 40px;
	}
	
	#layout {
		min-height: 100%;
		min-width: 1295px;
		.header-wrap {
			background: $white;
			position: fixed;
			width: 100%;
			min-width: 1295px;
			z-index: 999;
		}
		.main-wrap {
			min-height: calc(100vh - 170px);
			.fade-enter-active,
			.fade-leave-active {
				transition: all 2s ease;
			}
			.fade-enter {
				transform: translateX(-50px);
				opacity: 0;
			}
			.fade-leave-active {
				transition: none;
			}
		}
	}
	
	.dialogExportSet {
		.el-radio {
			line-height: 24px;
		}
		.el-dialog-content {
			padding-left: 75px;
		}
		.dialog-footer {
			text-align: center;
			padding-bottom: 10px;
		}
	}
	
	.dialog-confirm {
		width: 100px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		border-radius: 16px;
		font-size: 16px;
		font-weight: bold;
		color: white;
		&:hover {
			opacity: .8;
		}
	}
	
	.theme-blue {
		.dialog-confirm {
			background: url(../assets/imgs/blue/bg_confirm.png) no-repeat;
			background-size: 100% 100%;
		}
	}
	
	.theme-red {
		.dialog-confirm {
			background: url(../assets/imgs/red/bg_confirm.png) no-repeat;
			background-size: 100% 100%;
		}
	}
	
	.theme-green {
		.dialog-confirm {
			background: url(../assets/imgs/green/bg_confirm.png) no-repeat;
			background-size: 100% 100%;
		}
	}
</style>