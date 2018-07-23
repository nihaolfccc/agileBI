<template>
	<div class="main-content" id="main-content" style="height: 867px;">
		<!--居左布局-->
		<div class="layout-left" v-if="layoutType=='left'">
			<div class="content-left">
				<div class="content-left-top">
					<div class="bgcolor-f8 border-change" :class="{'active': activeBorder==0}" @click="addBorder(0)">
						<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="mainMap" key="mainMapLeft"></base-chart>
						<div class="btn-wrap">
							<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
						</div>
					</div>
				</div>
				<div class="content-left-bottom">
					<div class="bgcolor-fa border-change" :class="{'active': activeBorder==1}" @click="addBorder(1)">
						<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapA"></base-chart>
						<button class="switch-main-map" @click="switchMainMap('MapA', MapA)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
						<div class="btn-wrap">
							<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
						</div>
					</div>
					<div class="bgcolor-fa border-change" :class="{'active': activeBorder==2}" @click="addBorder(2)">
						<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapB"></base-chart>
						<button class="switch-main-map" @click="switchMainMap('MapB', MapB)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
						<div class="btn-wrap">
							<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
						</div>
					</div>
				</div>
			</div>
			<div class="content-right">
				<div class="bgcolor-fa border-change" :class="{'active': activeBorder==3}" @click="addBorder(3)">
					<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapC"></base-chart>
					<button class="switch-main-map" @click="switchMainMap('MapC', MapC)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
					<div class="btn-wrap">
						<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
					</div>
				</div>
				<div class="bgcolor-fa border-change" :class="{'active': activeBorder==4}" @click="addBorder(4)">
					<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapD"></base-chart>
					<button class="switch-main-map" @click="switchMainMap('MapD', MapD)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
					<div class="btn-wrap">
						<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
					</div>
				</div>
				<div class="writingReport bgcolor-fa">
					<h4>文字报告</h4>
					<ol>
						<li v-for="(item, index) in writingReport" :key="index">{{item}}</li>
					</ol>
				</div>
			</div>
		</div>

		<!--居中布局-->
		<div class="layout-left layout-center" v-if="layoutType=='center'">
			<div class="content-right ml">
				<div class="bgcolor-fa border-change" :class="{'active': activeBorder==3}" @click="addBorder(3)">
					<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapC"></base-chart>
					<button class="switch-main-map" @click="switchMainMap('MapC', MapC)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
					<div class="btn-wrap">
						<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
					</div>
				</div>
				<div class="bgcolor-fa border-change" :class="{'active': activeBorder==4}" @click="addBorder(4)">
					<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapD"></base-chart>
					<button class="switch-main-map" @click="switchMainMap('MapD', MapD)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
					<div class="btn-wrap">
						<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
					</div>
				</div>
				<div class="bgcolor-fa border-change" :class="{'active': activeBorder==1}" @click="addBorder(1)">
					<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapA"></base-chart>
					<button class="switch-main-map" @click="switchMainMap('MapD', MapD)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
					<div class="btn-wrap">
						<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
					</div>
				</div>
			</div>
			<div class="content-left">
				<div class="content-left-top">
					<div class="bgcolor-f8 border-change" :class="{'active': activeBorder==0}" @click="addBorder(0)">
						<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="mainMap" key="mainMapcenter"></base-chart>
					</div>
				</div>
				<div class="content-left-bottom">
					<div class="bgcolor-fa border-change" :class="{'active': activeBorder==2}" @click="addBorder(2)">
						<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapB"></base-chart>
						<button class="switch-main-map" @click="switchMainMap('MapB', MapB)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
						<div class="btn-wrap">
							<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
						</div>
					</div>
					<div class="bgcolor-fa border-change" :class="{'active': activeBorder==5}" @click="addBorder(5)">
						<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapE"></base-chart>
						<button class="switch-main-map" @click="switchMainMap('MapE', MapE)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
						<div class="btn-wrap">
							<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
						</div>
					</div>
				</div>
			</div>
			<div class="content-right mr">
				<div class="bgcolor-fa border-change" :class="{'active': activeBorder==6}" @click="addBorder(6)">
					<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapF"></base-chart>
					<button class="switch-main-map" @click="switchMainMap('MapF', MapF)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
					<div class="btn-wrap">
						<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
					</div>
				</div>
				<div class="bgcolor-fa border-change" :class="{'active': activeBorder==7}" @click="addBorder(7)">
					<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapG"></base-chart>
					<button class="switch-main-map" @click="switchMainMap('MapG', MapG)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
					<div class="btn-wrap">
						<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
					</div>
				</div>
				<div class="writingReport bgcolor-fa">
					<h4>文字报告</h4>
					<ol>
						<li v-for="(item, index) in writingReport" :key="index">{{item}}</li>
					</ol>
				</div>
			</div>
		</div>

		<!--居右布局-->
		<div class="layout-left layout-right" v-if="layoutType=='right'">
			<div class="content-left">
				<div class="content-left-top">
					<div class="bgcolor-f8 border-change" :class="{'active': activeBorder==0}" @click="addBorder(0)">
						<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="mainMap" key="mainMapRight"></base-chart>
					</div>
				</div>
				<div class="content-left-bottom">
					<div class="bgcolor-fa border-change" :class="{'active': activeBorder==2}" @click="addBorder(2)">
						<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapB"></base-chart>
						<button class="switch-main-map" @click="switchMainMap('MapB', MapB)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
						<div class="btn-wrap">
							<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
						</div>
					</div>
					<div class="writingReport bgcolor-fa">
						<h4>文字报告</h4>
						<ol>
							<li v-for="(item, index) in writingReport" :key="index">{{item}}</li>
						</ol>
					</div>
				</div>
			</div>
			<div class="content-right">
				<div class="bgcolor-fa border-change" :class="{'active': activeBorder==3}" @click="addBorder(3)">
					<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapC"></base-chart>
					<button class="switch-main-map" @click="switchMainMap('MapC', MapC)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
					<div class="btn-wrap">
						<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
					</div>
				</div>
				<div class="bgcolor-fa border-change" :class="{'active': activeBorder==4}" @click="addBorder(4)">
					<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapD"></base-chart>
					<button class="switch-main-map" @click="switchMainMap('MapD', MapD)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
					<div class="btn-wrap">
						<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
					</div>
				</div>
				<div class="bgcolor-fa border-change" :class="{'active': activeBorder==1}" @click="addBorder(1)">
					<base-chart :windowSize="chageSize" :resize="flagLeftBar" :time="300" :initTime="300" :chartType="MapA"></base-chart>
					<button class="switch-main-map" @click="switchMainMap('MapA', MapA)" v-if="false"><i class="iconfont icon-genghuan"></i></button>
					<div class="btn-wrap">
						<button :class="item.classBtn" v-for="(item, index) in btns" :key="index" @click="btnMethod(item.classBtn)"><i class="iconfont" :class="item.classIcon"></i></button>
					</div>
				</div>
			</div>
		</div>

		<!--图标设置——对话框-->
		<el-dialog title="图表设置" :visible.sync="dialogChartSet">
			<div class="el-dialog-content clearfix">
				<div :class="['chart-type'+item, {'active': chartTypeActive==index}]" v-for="(item, index) in 29" :key="index" @click="chartTypeActive=index"></div>
				<div class="chart-type30" @click="getMoreChart"></div>
			</div>
			<div slot="footer" class="dialog-footer clearfix">
				<div class="fl" v-if="false">
					<div>
						<div class="check" v-show="flagMainMap"></div>
						<div class="check-not" v-show="!flagMainMap"></div>
						<input type="checkbox" name="mainMap" id="mainMap" v-model="flagMainMap" @change="becomeMainMap" />
					</div>
					<label for="mainMap">设为主图</label>
				</div>
				<button class="fr dialog-confirm" type="button" @click="chartSetConfirmFn">确 定</button>
			</div>
		</el-dialog>

		<!--图形工具-->
		<canvas-board></canvas-board>

	</div>
</template>

<script>
	import baseChart from '@/components/charts/baseChart'
	import canvasBoard from '@/components/canvas/canvasBoard'

	export default {
		components: {
			baseChart,
			canvasBoard,
		},
		data: function() {
			return {
				windowSize: document.documentElement.clientWidth,
				writingReport: [
					'4月19日到达开封的客流中飞机前往的占比45.49%，火车占34.47%。',
					'在2016年8月旅游收到达到最高点为500123194元。1月是最低点，为3214123元。',
					'旅游客源前三名深圳，广州和大理。',
					'旅游收入占比为国内收入94.94%。',
					'旅游消费主要餐饮，酒店，古维等。',
					'旅游人数在2016年7月达到最高点，为500万人次。'
				],
				mainMap: 'chinaMap',
				MapA: 'basicRadar',
				MapB: 'torus',
				MapC: 'pie',
				MapD: 'barYCategory',
				MapE: 'lineAndBar',
				MapF: 'hotWord',
				MapG: 'scatter',
				activeBorder: 0,
				btns: [{
						classBtn: 'btn-set',
						classIcon: 'icon-shezhi',
					},
					/*{
						classBtn: 'btn-copy',
						classIcon: 'icon-fuzhi1',
					},
					{
						classBtn: 'btn-delete',
						classIcon: 'icon-shanchu-',
					}*/
				],
				dialogChartSet: false,
				flagMainMap: false,
				chartTypeActive: 0,
			}
		},
		props: {
			layoutType: {
				type: String,
				default: 'left'
			},
		},
		computed: {
			chageSize() {
				window.addEventListener('resize', () => {
					this.windowSize = document.documentElement.clientWidth
				})
				return this.windowSize
			},
			flagLeftBar() {
				return this.$store.state.flagLeftBar
			},
			flagBtn() {
				return this.$store.state.flagBtn
			},
		},
		watch: {

		},
		methods: {
			switchMainMap(compontentName, compontentValue) {
				//console.log(compontentName, compontentValue)
				this[compontentName] = this.mainMap
				this.mainMap = compontentValue
			},
			addBorder(index) {
				this.activeBorder = index
			},
			btnMethod(type) {
				console.log(type);
				switch(type) {
					case 'btn-set':
						this.showChartSet()
						break;

				}
			},
			showChartSet() {
				this.dialogChartSet = true
			},
			becomeMainMap() {
				console.log(this.flagMainMap)

			},
			getMoreChart() {

			},
			chartSetConfirmFn() {
				this.dialogChartSet = false
			},
		},
		created() {

		},
		mounted() {
			this.$nextTick(() => { //必须加，否则全局状态不改变
				//this.$store.commit('changeBtn', false)
			})
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.main-content {
		position: relative;
		height: calc(100vh - 332px);
		min-height: 615px;
	}
	
	.bgcolor-f8 {
		border-radius: 6px;
		background-color: #f8f8f8;
	}
	
	.bgcolor-fa {
		border-radius: 6px;
		background-color: #fafafa;
	}
	
	.layout-left {
		display: flex;
		height: 100%;
		.content-left {
			flex: 2;
			width: 0;
			display: flex;
			flex-direction: column;
			>div {
				margin-right: 10px;
			}
			.content-left-top {
				flex: 2;
				>div {
					position: relative;
					height: 100%;
					margin-bottom: 30px;
				}
			}
			.content-left-bottom {
				margin-top: 60px;
				flex: 1;
				display: flex;
				>div {
					flex: 1;
					width: 0;
					margin-top: -30px;
					position: relative;
					&:first-of-type {
						margin-right: 30px;
					}
				}
			}
		}
		.content-right {
			flex: 1;
			width: 0;
			display: flex;
			flex-direction: column;
			>div {
				margin-left: 20px;
				margin-bottom: 30px;
				flex: 1;
				position: relative;
				&:last-of-type {
					margin-bottom: 0;
				}
			}
		}
	}
	
	.layout-center {
		.content-right.ml {
			>div {
				margin-left: 0;
				margin-right: 9px;
			}
		}
		.content-left {
			>div {
				margin: 0 3px;
			}
			.content-left-bottom {
				>div {
					&:first-of-type {
						margin-right: 12px;
					}
				}
			}
		}
		.content-right.mr {
			>div {
				margin-left: 9px;
			}
		}
	}
	
	.layout-right {
		flex-direction: row-reverse;
		.content-left {
			>div {
				margin-left: 10px;
				margin-right: 0;
			}
		}
		.content-right {
			>div {
				margin-left: 0;
				margin-right: 20px;
			}
		}
	}
	
	.writingReport {
		padding: 0 12px;
		color: #20334a;
		box-sizing: border-box;
		border: 8px solid transparent;
		display: flex;
		flex-direction: column;
		h4 {
			line-height: 1;
			padding: 6px 0 14px;
			font-size: 16px;
			font-weight: bold;
		}
		ol {
			flex: 1;
			height: 0;
			overflow: auto;
			li {
				list-style: decimal;
				list-style-position: inside;
				line-height: 32px;
				font-size: 14px;
			}
		}
	}
	
	.switch-main-map {
		display: none;
		position: absolute;
		top: 2px;
		right: 2px;
		width: 20px;
		height: 20px;
		border-radius: 4px;
		color: white;
		&:hover {
			opacity: .8;
		}
	}
	
	.btn-wrap {
		display: none;
		position: absolute;
		top: 2px;
		right: 2px;
		>button {
			float: left;
			width: 20px;
			height: 20px;
			line-height: 20px;
			border-radius: 4px;
			color: white;
			&+button{
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
	
	.border-change {
		box-sizing: border-box;
		border: 8px solid transparent;
		&:hover,
		&.active {
			.switch-main-map {
				display: block;
			}
			.btn-wrap {
				display: block;
			}
		}
	}
	/*蓝色主题*/
	
	.theme-blue {
		.border-change {
			&:hover,
			&.active {
				border: 8px solid #d1d9df;
			}
		}
		.switch-main-map {
			background-color: #0e426a;
		}
		.btn-wrap {
			>button {
				background-color: #0e426a;
			}
		}
		/*对话框*/
		.el-dialog-content {
			>div {
				&.chart-type1 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat 10px 8px;
				}
				&.chart-type2 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -44px 8px;
				}
				&.chart-type3 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -98px 8px;
				}
				&.chart-type4 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -152px 8px;
				}
				&.chart-type5 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -206px 8px;
				}
				&.chart-type6 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -260px 8px;
				}
				&.chart-type7 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat 10px -47px;
				}
				&.chart-type8 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -44px -47px;
				}
				&.chart-type9 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -98px -47px;
				}
				&.chart-type10 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -152px -47px;
				}
				&.chart-type11 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -206px -47px;
				}
				&.chart-type12 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -260px -47px;
				}
				&.chart-type13 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat 10px -103px;
				}
				&.chart-type14 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -44px -103px;
				}
				&.chart-type15 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -98px -103px;
				}
				&.chart-type16 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -152px -103px;
				}
				&.chart-type17 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -206px -103px;
				}
				&.chart-type18 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -260px -103px;
				}
				&.chart-type19 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat 10px -158px;
				}
				&.chart-type20 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -44px -158px;
				}
				&.chart-type21 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -98px -158px;
				}
				&.chart-type22 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -152px -158px;
				}
				&.chart-type23 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -206px -158px;
				}
				&.chart-type24 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -260px -158px;
				}
				&.chart-type25 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat 10px -213px;
				}
				&.chart-type26 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -44px -213px;
				}
				&.chart-type27 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -98px -213px;
				}
				&.chart-type28 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -152px -213px;
				}
				&.chart-type29 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -206px -213px;
				}
				&.chart-type30 {
					background: url(../../assets/imgs/blue/chart_type.png) no-repeat -260px -213px;
				}
			}
		}
		.check {
			background: url(../../assets/imgs/blue/check.png) no-repeat;
		}
		.check-not {
			background: url(../../assets/imgs/blue/check_not.png) no-repeat;
		}
	}
	/*红色主题*/
	
	.theme-red {
		.border-change {
			&:hover,
			&.active {
				border: 8px solid #ffaea3;
			}
		}
		.switch-main-map {
			background-color: #d44c39;
		}
		.btn-wrap {
			>button {
				background-color: #d44c39;
			}
		}
		.el-dialog-content {
			>div {
				&.chart-type1 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat 10px 8px;
				}
				&.chart-type2 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -44px 8px;
				}
				&.chart-type3 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -98px 8px;
				}
				&.chart-type4 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -152px 8px;
				}
				&.chart-type5 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -206px 8px;
				}
				&.chart-type6 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -260px 8px;
				}
				&.chart-type7 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat 10px -47px;
				}
				&.chart-type8 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -44px -47px;
				}
				&.chart-type9 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -98px -47px;
				}
				&.chart-type10 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -152px -47px;
				}
				&.chart-type11 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -206px -47px;
				}
				&.chart-type12 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -260px -47px;
				}
				&.chart-type13 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat 10px -103px;
				}
				&.chart-type14 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -44px -103px;
				}
				&.chart-type15 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -98px -103px;
				}
				&.chart-type16 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -152px -103px;
				}
				&.chart-type17 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -206px -103px;
				}
				&.chart-type18 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -260px -103px;
				}
				&.chart-type19 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat 10px -158px;
				}
				&.chart-type20 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -44px -158px;
				}
				&.chart-type21 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -98px -158px;
				}
				&.chart-type22 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -152px -158px;
				}
				&.chart-type23 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -206px -158px;
				}
				&.chart-type24 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -260px -158px;
				}
				&.chart-type25 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat 10px -213px;
				}
				&.chart-type26 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -44px -213px;
				}
				&.chart-type27 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -98px -213px;
				}
				&.chart-type28 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -152px -213px;
				}
				&.chart-type29 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -206px -213px;
				}
				&.chart-type30 {
					background: url(../../assets/imgs/red/chart_type.png) no-repeat -260px -213px;
				}
			}
		}
		.check {
			background: url(../../assets/imgs/red/check.png) no-repeat;
		}
		.check-not {
			background: url(../../assets/imgs/red/check_not.png) no-repeat;
		}
	}
	/*绿色主题*/
	
	.theme-green {
		.border-change {
			&:hover,
			&.active {
				border: 8px solid #bae4c0;
			}
		}
		.switch-main-map {
			background-color: #6cb28a;
		}
		.btn-wrap {
			>button {
				background-color: #6cb28a;
			}
		}
		.el-dialog-content {
			>div {
				&.chart-type1 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat 10px 8px;
				}
				&.chart-type2 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -44px 8px;
				}
				&.chart-type3 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -98px 8px;
				}
				&.chart-type4 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -152px 8px;
				}
				&.chart-type5 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -206px 8px;
				}
				&.chart-type6 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -260px 8px;
				}
				&.chart-type7 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat 10px -47px;
				}
				&.chart-type8 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -44px -47px;
				}
				&.chart-type9 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -98px -47px;
				}
				&.chart-type10 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -152px -47px;
				}
				&.chart-type11 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -206px -47px;
				}
				&.chart-type12 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -260px -47px;
				}
				&.chart-type13 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat 10px -103px;
				}
				&.chart-type14 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -44px -103px;
				}
				&.chart-type15 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -98px -103px;
				}
				&.chart-type16 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -152px -103px;
				}
				&.chart-type17 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -206px -103px;
				}
				&.chart-type18 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -260px -103px;
				}
				&.chart-type19 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat 10px -158px;
				}
				&.chart-type20 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -44px -158px;
				}
				&.chart-type21 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -98px -158px;
				}
				&.chart-type22 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -152px -158px;
				}
				&.chart-type23 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -206px -158px;
				}
				&.chart-type24 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -260px -158px;
				}
				&.chart-type25 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat 10px -213px;
				}
				&.chart-type26 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -44px -213px;
				}
				&.chart-type27 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -98px -213px;
				}
				&.chart-type28 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -152px -213px;
				}
				&.chart-type29 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -206px -213px;
				}
				&.chart-type30 {
					background: url(../../assets/imgs/green/chart_type.png) no-repeat -260px -213px;
				}
			}
		}
		.check {
			background: url(../../assets/imgs/green/check.png) no-repeat;
		}
		.check-not {
			background: url(../../assets/imgs/green/check_not.png) no-repeat;
		}
	}
	
	.el-dialog-content {
		padding: 17px 26px 4px;
		background-color: #f8f8f8;
		border-radius: 3px;
		>div {
			box-sizing: border-box;
			float: left;
			margin-right: 12px;
			margin-bottom: 13px;
			width: 42px;
			height: 42px;
			border: 1px solid transparent;
			border-radius: 3px;
			cursor: pointer;
			&:nth-of-type(6n) {
				margin-right: 0;
			}
			&:hover,
			&.active {
				border: 1px solid #dfdfdf;
				background-color: #ebebeb !important;
			}
		}
	}
	
	.dialog-footer {
		height: 32px;
		>.fl {
			>div {
				float: left;
				margin-top: 10px;
				position: relative;
				width: 14px;
				height: 14px;
				div {
					height: 100%;
				}
				input {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					opacity: 0;
					cursor: pointer;
				}
			}
			>label {
				float: left;
				padding-left: 10px;
				line-height: 32px;
				font-size: 14px;
				color: #303030;
				cursor: pointer;
			}
		}
		
	}
</style>