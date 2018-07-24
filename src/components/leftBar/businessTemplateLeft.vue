<template>
	<div class="template-left">
		<happy-scroll>
			<div class="term-item" v-for="(item,index) in items" :key="index"  :class="{'open': active == index}">
				<div class="term-title" @click="showOpen(index)">
					<img class="term-title-icon" src="../../assets/imgs/common/term_list.png"/>
					<p>{{item.title}}</p>
				</div>
				<div class="term-list" >
					<div class="term-list-content" v-if="item.list">
						<p :title="item.text" v-for="(item, index) in item.list" :key="index" :class="{'active': reportActive==index}" @click="showReportContent(index,item.tableContent)">{{item.name}}</p>
					</div>
					<!--组件-->
					<business-left  v-if="item.elements"></business-left>
				</div>
			</div>
		</happy-scroll>
	</div>
</template>

<script>
	import businessLeft from '@/components/business/businessLeft'
//	import templateLeft from '@/components/leftBar/templateLeft' //需求更改这个没有用到了
	
	export default {
		data() {
			return {
				items:[{
					title:"业务术语列表",	
					elements:[],
				},{
					title:"表分类",
					list:[]
				}],
				sortList:[{
					name:"企业注册",
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
							},{
								"id": "book_author",
								"name": "投资情况",
								"type": "table",
								"left": 400,
								"top": 100,
								"columns": [{
										"id": "投资方名称",
										"datatype": "integer"
									},
									{
										"id": "被投资方名称",
										"datatype": "integer"
									},
									{
										"id": "投资金额",
										"datatype": "integer"
									},
									{
										"id": "到账时间",
										"datatype": "integer"
									}]
							}],
						"edges": []
					}
				},{
					name:"招商引资",
					tableContent:{}
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
				}],
				active:0,
				reportActive:0,
				exper: {
					
				}
			}
		},
		props: {
			type: {
				type: String
			}
		},
		computed: {
//			tableContent(){
//				return this.$store.state.tableContent;
//			}
		},
		components: {
			businessLeft ,
//			templateLeft
		},
		methods: {
			showOpen(index){
				this.active = index
			},
			showReportContent(index,tableContent){
				this.reportActive = index
//				console.log(tableContent)
				this.$store.commit('changeTableContent',tableContent)//
			}
		},
		watch: {
//			tableContent:{
//				handler(val,oldVal){
//				},
//				deep:true
//			}
		},
		created() {
			
		},
		mounted() {
			this.items[1].list = this.sortList
		}
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.template-left{
		height: 100%;
		.term-item{
			.term-title{
				height: 102px;
				text-align: center;
				.term-title-icon{
					margin-top: 26px;
				}
				p{
					color: white;
					font-size: 14px;
					line-height: 24px;
				}
			}
			.term-list{
				max-height: 0;
				/*margin-bottom: 10px;*/
				transition: max-height .3s;
				overflow: hidden;
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
			}
			&.open .term-list{
				max-height: 3000px;
				transition: max-height .5s;
			}
		}
	}
	.theme-blue{
		.template-left{
			box-sizing: border-box;
			padding: 6px;
		}
		.term-title{
			background: url(../../assets/imgs/blue/bg_term.png) no-repeat;
			background-size: 100% 100%;
		}
		
		.term-list{
			/*min-height: calc(100vh - 326px);
			padding: 7px 0;*/
			margin-top: 7px;
			border-radius: 13px;
			background: url(../../assets/imgs/blue/bg_term_list.png) no-repeat;
			background-size: 100% 100%;
			.term-list-content {
					>p {
						&.active,
						&:hover {
							color: #1f9eff;
						}
					}
				}
		}
	}
	
	.theme-red{
		.term-title{
			background: url(../../assets/imgs/bg_red.png) no-repeat;
			background-size: 100% 100%;
		}
		.term-list{
			.term-list-content {
				>p {
					&.active,
					&:hover {
						background: url(../../assets/imgs/red/bg_red_bar.jpg);
					}
				}
			}
		}
	}
	.theme-green{
		.term-title{
			background: url(../../assets/imgs/bg_green.png) no-repeat;
			background-size: 100% 100%;
		}
		.term-list{
			.term-list-content {
				>p {
					&.active,
					&:hover {
						background: url(../../assets/imgs/green/bg_green_bar.jpg);
					}
				}
			}
		}
	}
		
</style>