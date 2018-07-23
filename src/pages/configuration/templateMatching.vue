<template>
	<div class="template-matching">
		<left-bar>
			<analyze-method-left></analyze-method-left>
		</left-bar>
		<right-content>
			<echarts-right />
		</right-content>
	</div>
</template>

<script>
	import leftBar from '@/components/leftBar'
	import analyzeMethodLeft from '@/components/leftBar/analyzeMethodLeft'
	import rightContent from '@/components/rightContent'
	import echartsRight from '@/components/content/echartsRight'
	
	export default {
		components: {
			leftBar,
			analyzeMethodLeft,
			rightContent,
			echartsRight
		},
		data: function() {
			return {
				
			}
		},
		computed: {

		},
		watch: {
			
		},
		methods: {
			
		},
		created() {
			
		},
		mounted() {
			this.$store.commit('changeBtn', false)
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.template-matching{
	min-height: calc(100vh - 170px);
}
</style>