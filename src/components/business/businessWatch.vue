<template>
	<div class="term-list-content">
		<p :title="item.text" v-for="(item, index) in sortList" :key="index" :class="{'active': reportActive==index}" @click="showReportContent(index,item.tableContent)" :data-item="JSON.stringify(item.tableContent)">{{item.name}}</p>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				reportActive:0,
				sortList:[{
					name:"企业注册",
					id:1,
					tableContent:{
						"nodes": [{
								"id": "book",
								"name": "企业信息",
								"type": "table",
								"left": 200,
								"top": 100,
								"columns": [{
										"id": "企业ID",
										"name": "我是企业ID的名字",
										"datatype": "integer",
										"primaryKey": true
									},
									{
										"id": "企业名称",
										"datatype": "varchar"
									},
									{
										"id": "企业地址",
										"datatype": "varchar"
									},
									{
										"id": "主营业务",
										"datatype": "varchar"
									}]
							}],
						"edges": []
					}
				},{
					name:"招商引资",
					tableContent:{
						"nodes": [{
							"id": "book_publisher",
							"name": "地区",
							"type": "table",
							"left": 100,
							"top": 400,
							"columns": [{
									"id": "地区代号",
									"datatype": "integer"
								},{
									"id": "省",
									"datatype": "integer"
								},{
									"id": "市",
									"datatype": "integer"
								},{
									"id": "县",
									"datatype": "integer"
								}]
						}],
						"edges": []
					}
				},{
					name:"交易监督",
					tableContent:{}
				},{
					name:"经营检查",
					tableContent:{}
				},{
					name:"资质审查",
					tableContent:{}
				},{
					name:"市场管理",
					tableContent:{}
				},{
					name:"商标监管",
					tableContent:{}
				}]
			}
		},
		computed: {
		},
		components: {
		},
		methods: {	
			showReportContent(index,tableContent){
				this.reportActive = index
				//this.$store.commit('changeTableContent',tableContent)
//				this.$store.commit('changeFlagTable',true)//
				
				
			}
		},
		watch: {			
		},
		created() {		
		},
		mounted() {
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.term-list-content {
		>p {
			padding: 0 20px;
			height: 49px;
			line-height: 49px;
			color: white;
			font-size: 14px;
			cursor: pointer;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			
		}
	}
	.theme-blue{
		.term-list-content {
				>p {
					&.active,
					&:hover {
						color: #1f9eff;
					}
				}
		}
	}
	
	.theme-red{
		.term-list-content {
			>p {
				&.active,
				&:hover {
					background: url(../../assets/imgs/red/bg_red_bar.jpg);
				}
			}
		}
	}
	.theme-green{
		.term-list-content {
			>p {
				&.active,
				&:hover {
					background: url(../../assets/imgs/green/bg_green_bar.jpg);
				}
			}
		}
	}
</style>