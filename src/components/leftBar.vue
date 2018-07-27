<template>
	<!-- @mouseover="switchLeftBar" @mouseout="switchLeftBar"-->
	<!--@mouseenter="switchLeftBar($event)" @mouseleave="switchLeftBar($event)"-->
	<div class="left-bar" ref="leftBar" @mouseenter="switchLeftBar($event)" @mouseleave="switchLeftBar($event)">
		<slot></slot>
		<div class="switch-wrap" ref="switchWrap">
			<!-- @click="switchLeftBar"-->
			<button class="switch-btn"></button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {

		},
		components: {

		},
		computed: {
			flagLeftBar() {
				return this.$store.state.flagLeftBar
			},
		},
		watch: {

		},
		methods: {
			switchLeftBar(e) {
//				console.log(this.flagLeftBar, e, e.type, e.fromElement, e.toElement);
				if(e.fromElement != null && e.toElement != null) {//点击折叠面板时，会触发mouseenter和mouseleave事件
					if(this.flagLeftBar) {
						this.$refs.leftBar.style.left = '0'
						this.$refs.switchWrap.classList.add('open')
					} else {
						this.$refs.leftBar.style.left = '-284px'
						this.$refs.switchWrap.classList.remove('open')
					}
					this.$store.commit('changeLeftBar', !this.flagLeftBar)
				}
			},
		},
		created() {

		},
		mounted() {
			this.$nextTick(() => {
				var name = this.$route.name
				var leftBar = this.$refs.leftBar
				//控制头部搜索框与配置流程相互切换
				if(name == 'dataMatching' || name == 'dataClassify' || name == 'listligature' || name == 'businessMatching' || name == 'templateMatching') {
					leftBar.style.height = 'calc(100vh - 190px)'
				} else {
					leftBar.style.height = 'calc(100vh - 170px)'
				}
			});
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.left-bar {
		z-index: 100;
		position: fixed;
		/*top: 170px;*/
		left: -284px;
		width: 284px;
		transition: .3s;
	}
	
	.switch-wrap {
		position: absolute;
		top: 0;
		right: -17px;
		width: 17px;
		height: 100%;
	}
	
	.switch-btn {
		position: absolute;
		top: calc(50% - 30px);
		right: 0;
		width: 23px;
		height: 60px;
		cursor: pointer;
		background-color: transparent;
	}
	
	.theme-blue {
		.left-bar {
			background: url(../assets/imgs/blue/background_blue.jpg);
			background-position-y: 100%;
			.switch-wrap {
				background: url(../assets/imgs/blue/left_close.png) no-repeat;
				background-size: 100% 100%;
				&.open {
					width: 23px;
					background: url(../assets/imgs/blue/left_open.png) no-repeat;
					background-size: 100% 100%;
				}
			}
		}
	}
	
	.theme-red {
		.left-bar {
			background: url(../assets/imgs/red/background_red.jpg);
			background-repeat-y: initial;
			.switch-wrap {
				background: url(../assets/imgs/red/left_close.png) no-repeat;
				background-size: 100% 100%;
				&.open {
					width: 23px;
					background: url(../assets/imgs/red/left_open.png) no-repeat;
					background-size: 100% 100%;
				}
			}
		}
	}
	
	.theme-green {
		.left-bar {
			background: url(../assets/imgs/green/background_green.jpg);
			background-repeat-y: initial;
			.switch-wrap {
				background: url(../assets/imgs/green/left_close.png) no-repeat;
				background-size: 100% 100%;
				&.open {
					width: 23px;
					background: url(../assets/imgs/green/left_open.png) no-repeat;
					background-size: 100% 100%;
				}
			}
		}
	}
</style>