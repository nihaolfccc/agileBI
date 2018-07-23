<template>
	<div class="chart-left">
		<happy-scroll>
			<div class="chart-title">
				<i class="iconfont icon-moban"></i>
				<p>模&nbsp;&nbsp;板</p>
			</div>
			<div class="chart-list">
				<div v-for="(item, index) in templateList" :key="index" @click="selectTemplate(index)">
					<img class="template" :src="item.src" v-show="templateActive!=index" />
					<img class="template-selected" :src="item.srcSelected" v-show="templateActive==index" />
				</div>
			</div>
		</happy-scroll>
	</div>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				templateActive: 4,
				templateList: [
					{
						src: require('../../assets/imgs/common/template1.png'),
						srcSelected: require('../../assets/imgs/common/template1-selected.png')
					},
					{
						src: require('../../assets/imgs/common/template2.png'),
						srcSelected: require('../../assets/imgs/common/template2-selected.png')
					},
					{
						src: require('../../assets/imgs/common/template3.png'),
						srcSelected: require('../../assets/imgs/common/template3-selected.png')
					},
					{
						src: require('../../assets/imgs/common/template4.png'),
						srcSelected: require('../../assets/imgs/common/template4-selected.png')
					},
					{
						src: require('../../assets/imgs/common/template5.png'),
						srcSelected: require('../../assets/imgs/common/template5-selected.png')
					},
					{
						src: require('../../assets/imgs/common/template6.png'),
						srcSelected: require('../../assets/imgs/common/template6-selected.png')
					}
				],
				
			}
		},
		computed: {
			
		},
		watch: {
			
		},
		methods: {
			selectTemplate(index){
				this.templateActive=index
				
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.chart-left {
		height: 100%;
		.chart-title {
			box-sizing: border-box;
			padding-top: 12px;
			height: 102px;
			text-align: center;
			i {
				font-size: 32px;
				color: white;
			}
			p {
				color: white;
				font-size: 14px;
			}
		}
		.chart-list {
			padding: 20px;
			>div {
				cursor: pointer;
				&+div {
					margin-top: 20px;
				}
				&:hover{
					.template{
						display: none !important;
					}
					.template-selected{
						display: block !important;
					}
				}
			}
		}
	}
	
	.theme-blue {
		.chart-left {
			box-sizing: border-box;
			padding: 6px;
			.chart-title {
				background: url(../../assets/imgs/blue/bg_term.png) no-repeat;
				background-size: 100% 100%;
			}
			.chart-list {
				min-height: calc(100vh - 306px);
				margin: 7px 0;
				padding: 20px 0;
				background: url(../../assets/imgs/blue/bg_term_list.png) no-repeat;
				background-size: 100% 100%;
				>div{
					>img{
						display: block;
						margin: 0 auto;
					}
				}
			}
		}
	}
	
	.theme-red {
		.chart-left {
			.chart-title {
				background: url(../../assets/imgs/bg_red.png) no-repeat;
				background-size: 100% 100%;
			}
		}
	}
	
	.theme-green {
		.chart-left {
			.chart-title {
				background: url(../../assets/imgs/bg_green.png) no-repeat;
				background-size: 100% 100%;
			}
		}
	}
</style>