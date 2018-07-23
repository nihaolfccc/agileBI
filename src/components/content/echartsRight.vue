<template>
	<div id="content" ref="content">
		<header>
			<span :title="question">{{question}}</span>
			<div class="btn-wrap" v-if="flagBtn" ref="btnWrap">
				<btn v-for="(item, index) in buttons" :key="index" :item="item"></btn>
			</div>
			<div class="btn-wrap" v-if="!flagBtn" ref="btnWrap">
				<btn v-for="(item, index) in buttons2" :key="index" :item="item"></btn>
			</div>
		</header>
		<layout-type :layoutType="layoutType"></layout-type>
	</div>
</template>

<script>
	import btn from '@/components/buttons/btn'
	import layoutType from '@/components/template/layoutType'

	export default {
		components: {
			btn,
			layoutType
		},
		data: function() {
			return {
				question: '',
				buttons: [{
						name: '高度切换',
						iconName: 'icon-daochu'
					},
					{
						name: '收藏',
						iconName: 'icon-shoucang3'
					},
					{
						name: '导出',
						iconName: 'icon-daochu'
					},
				],
				buttons2: [{
						name: '保存',
						className: 'save'
					},
					{
						name: '取消',
						className: 'cancel'
					}
				],
				layoutType: 'left',
			}
		},
		props: {
			
		},
		computed: {
			flagBtn() {
				return this.$store.state.flagBtn
			},
			reportId() {
				return this.$store.state.reportId
			},
			reportName() {
				return this.$store.state.reportName
			},
		},
		watch: {
			reportId: {
				handler(newValue, oldValue) {
					//console.log(newValue)
					this.getChartData(newValue)
				}
			},
			reportName: {
				handler(newValue, oldValue) {
					//console.log(newValue)
					this.question = newValue
				}
			},
		},
		methods: {
			getChartData(id) {
				//console.log(id)
			},
		},
		mounted() {
			if(this.reportName!='' && this.reportId!=0){
				//console.log(this.reportName)
				this.question = this.reportName
				this.getChartData(this.reportId)
			}
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.theme-blue {
	}
	
	.theme-red {
	}
	
	.theme-green {
	}
	
	#content {
		box-sizing: border-box;
		padding: 0 46px 40px;
		border-radius: 8px;
		background-color: white;
		>header {
			display: flex;
			height: 82px;
			>span {
				display: block;
				flex: 1;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				line-height: 82px;
				font-size: 20px;
				color: black;
				font-weight: bold;
			}
			>.btn-wrap {
				margin-top: 25px;
				>button {
					float: left;
					margin-right: 26px;
					&:last-of-type {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>