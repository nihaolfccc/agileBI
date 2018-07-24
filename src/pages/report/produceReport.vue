<template>
	<div class="produceReport">
		<left-bar>
			<produce-report-left></produce-report-left>
		</left-bar>
		<right-content>
			<echarts-right />
		</right-content>
	</div>
</template>

<script>
	import leftBar from '@/components/leftBar'
	import produceReportLeft from '@/components/leftBar/produceReportLeft'
	import rightContent from '@/components/rightContent'
	import echartsRight from '@/components/content/echartsRight'

	export default {
		components: {
			leftBar,
			produceReportLeft,
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
			var reportList = JSON.parse(sessionStorage.getItem('reportList')) || '';
			if(reportList.constructor == Array && reportList.length > 0) {
				this.$store.commit('changeReportId', reportList[0].id)
				this.$store.commit('changeReportName', reportList[0].text)
			}
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.produceReport{
	
}
</style>