<template>
	<button type="button" class="el-btn" :class="item.className" @click="btnMethod(item.name)">
		<i class="iconfont" :class="item.iconName"></i>
		{{item.name}}
	</button>
</template>

<script>
	import { exportPng } from '../../assets/js/tools.js'
	export default {
		props: {
			item: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {

			}
		},
		computed: {
			flagHeight() {
				return this.$store.state.flagHeight
			},
		},
		watch: {

		},
		methods: {
			btnMethod(name) {
				console.log(name)
				$('.draggable').addClass('not-border')
				$('.draggable[class*="rect"]').removeClass('not-border')
				$('.draggable[class*="ellipse"]').removeClass('not-border')
				switch(name) {
					case '高度切换':
						//console.log(this.flagHeight);
						if(this.flagHeight) {
							document.getElementById('main-content').style.height = ''
						} else {
							document.getElementById('main-content').style.height = '867px'
						}
						this.$store.commit('changeHeight', !this.flagHeight)
						break;
					case '收藏':

						break;
					case '导出':
						//console.log('export');
						this.$root.dialogExportSet = true
						/*this.$parent.$refs.btnWrap.style.display='none'
						setTimeout(() => {
							let dom = document.querySelector('#content')
							//let dom = this.$parent.$refs.content
							exportPng(dom, '生成报告')
						}, 10)

						setTimeout(() => {
							this.$parent.$refs.btnWrap.style.display='block'
						}, 20)*/
						break;
					case '保存':
						// 调接口保存布局类型
						break;
					case '取消':

						break;
				}
			},
		},
		mounted() {

		}
	}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	
</style>