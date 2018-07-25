<template>
	<div class="template-left">
		<happy-scroll>
			<div class="term-item" v-for="(item,index) in items" :key="index"  :class="{'open': active == index}">
				<div class="term-title" @click="showOpen(index)">
					<img class="term-title-icon" src="../../assets/imgs/common/term_list.png"/>
					<p>{{item.title}}</p>
				</div>
				<div class="term-list" >
					<!--<div class="term-list-content" v-if="item.list">
						<p :title="item.text" v-for="(item, index) in item.list" :key="index" :class="{'active': reportActive==index}" @click="showReportContent(index,item.tableContent)">{{item.name}}</p>

					</div>-->
					<!--组件-->
					<business-watch v-if="item.list"></business-watch>
					<business-left  v-if="item.elements"></business-left>
				</div>
			</div>
		</happy-scroll>
	</div>
</template>

<script>
	import businessLeft from '@/components/business/businessLeft'
	import businessWatch from '@/components/business/businessWatch'
//	import templateLeft from '@/components/leftBar/templateLeft' //需求更改这个没有用到了
	
	export default {
		
		components: {
			businessLeft ,
			businessWatch,
//			templateLeft
		},
		data() {
			return {
				items:[{
					title:"业务术语列表",	
					elements:[],
				},{
					title:"表分类",
					list:[]
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
		methods: {
			showOpen(index){
				this.active = index
			},
			showReportContent(index,tableContent){
				this.reportActive = index
				console.log(tableContent)
				this.$store.commit('changeTableContent',tableContent)
//				this.$store.commit('changeFlagTable',true)//
				
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
//			this.items[1].list = this.sortList
//			console.log(this.items[1].list)
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