<template>
	<div class="matching">
		<left-bar>
			<data-allocation-left></data-allocation-left>
		</left-bar>
		<right-content>
			<data-allocation-right :cpt="tagList"></data-allocation-right>
		</right-content>
	</div>
</template>

<script>
	import leftBar from '@/components/leftBar'
	import DataAllocationLeft from "@/components/leftBar/DataAllocationLeft"
	import rightContent from '@/components/rightContent'
	import dataAllocationRight from '@/components/dataAllocationRight/dataAllocationRight'
	
	export default {
		components: {
			leftBar, DataAllocationLeft, rightContent, dataAllocationRight
		},
		data: function() {
			return {
				tagList:{
					name:"MySQL",
					imgUrl:require("@/assets/imgs/common/MySQL.png"),
					id:"1",
					tag:"mysql"
				},
			}
		},
		computed: {
			dataMatch() {
				return this.$store.state.dataMatch
			},
		},
		watch: {
			//监听列表选中项状态
			dataMatch: {
				handler(newValue, oldValue) {
					this.tagList = newValue
					this.sing = newValue
				},
				deep: true
			},
			//监听左侧栏的变化
		},
		methods: {
			
		},
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.matching {
	
}
</style>