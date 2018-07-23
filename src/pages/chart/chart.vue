<template>
	<div class="chart">
		<left-bar>
			<chart-left />
		</left-bar>
		<right-content>
			<echarts-right />
		</right-content>
	</div>
</template>

<script>
	import leftBar from '@/components/leftBar'
	import chartLeft from '@/components/leftBar/chartLeft'
	import rightContent from '@/components/rightContent'
	import echartsRight from '@/components/content/echartsRight'

	export default {
		components: {
			leftBar,
			chartLeft,
			rightContent,
			echartsRight
		},
		data() {
			return {
				
			}
		},
		computed: {

		},
		methods: {

		},
		created() {

		},
		mounted() {
			this.$store.commit('changeBtn', true)
			this.$store.commit('changeReportId', Number(sessionStorage.getItem('questionId')))
			this.$store.commit('changeReportName', sessionStorage.getItem('questionName'))
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.chart {
		min-height: calc(100vh - 170px);
	}
</style>