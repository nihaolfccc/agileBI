<template>
	<div class="business">
		<div class="business_add_wrap"  @click="open">
			<button type="text" class="business_add">
				<i class="iconfont icon-jia fl"></i>
				<span class="fl">添加术语</span>
			</button>
		</div>
		<div class="business_add_wrap" @click="chackFile">
			<button type="text" class="business_add">
				<i class="iconfont icon-fuzhi fl"></i>
				<span class="fl">批量导入</span>
			</button>
			<input type="file" v-show="false" @click="fileUpload" ref="file" />
		</div>

		<ul class="business-terms-list">
			<li class="business_title transition" :class="{'active': active==index}" v-for="(item, index) in businessTermsList" :key="index" @click="selectBusinessTerms(index,item.tableName)">
				<span>{{item.name}}</span>
				<i class="iconfont icon-duihao2 fr" v-if="item.tip"></i>
				<i class="iconfont icon-bi bt_left" v-if="active==index" @click.stop="amendName(item.name)"></i>
				<i class="iconfont icon-unie639 bt_left" v-if="active==index"></i>
				<div class="tilte_background"></div>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import { BIMsg } from "../../assets/js/tools.js";
	export default {
		components: {

		},
		data: function() {
			return {
				active: 0,
				dialogTableVisible:false,
				businessTermsList: [{
						name: '销售收入',
						tip: false,//对号是不是显示
						tableName:{
							"nodes":[{
								"id": "start",
								"type": "start",
								"name": "销售收入",
								"datatype": "varchar",
								"w": 140,
								"h": 140,
								"left": 0,
								"top": 50
							}],
							"edges":{
								
							}
							
						}
					},
					{
						name: '订单转换率',
						tip: false,
						tableName:{}
					},
					{
						name: '利润率',
						tip: true,
						tableName:{}
					},
					{
						name: '成本',
						tip: true,
						tableName:{}
					},
					{
						name: '商品品类',
						tip: true,
						tableName:{}
					}
				],
				exp:{
					
				},
			}
		},
		computed: {

		},
		watch: {

		},
		methods: {
			open() {
				this.$prompt('', '新增术语', {
					confirmButtonText: '确定',
					showCancelButton: false,
					confirmButtonClass:"confirm_add",
		            customClass:"add_Box",
		            inputType:"textarea",
		            inputPlaceholder:'请输入您要新增的术语(中间以","隔开)',
		            inputValidator:this.validator,
		            inputErrorMessage:"输入框不能为空",
				}).then(({value}) => {
					BIMsg({
						message: "添加成功",
						type: 'success'
					})
				}).catch(() => {
					BIMsg({
						message: "添加失败",
						type: 'info'
					})
				});
			},
			validator(val){
				if(val.trim() == "" || val == null){
					return false
				}else{
					return true
				}
			},
			amendName(name) {
				this.$prompt('请输入名字', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputValue:name
				}).then(({value}) => {
					console.log(value)
				}).catch(() => {

				});
			},
			chackFile() {
				this.$refs.file.click()
			},
			fileUpload() {
				console.log(1)
			},
			selectBusinessTerms(index,tableName) {
				this.active = index;
//				console.log(tableName)
				this.$store.commit("changeTableName",tableName)		
			},
		},
	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.business {
		.business_add_wrap {
			cursor: pointer;
		}
		.business_add {
			display: block;
			height: 46px;
			line-height: 46px;
			color: #FFF;
			background: 0 0;
			padding-left: 19px;
			i {
				margin-right: 8px;
			}
		}
		.business-terms-list {
			.business_title {
				color: rgba(255, 255, 255, .9);
				cursor: pointer;
				padding-left: 19px;
				padding-right: 25px;
				.bt_left{
					color: #FFF;
					margin-left: 15px;
				}
			}
		}
	}
	
	.theme-blue {
		.business {
			padding-top: 11px;
		}
		.business_title {
			height: 38px;
			line-height: 38px;
			margin-bottom: 15px;
			&.active, &:hover{
				font-weight: bold;
				.tilte_background {
					display: block;
				}
			}
			.tilte_background {
				display: none;
				width: 240px;
				height: 1px;
				background: url(../../assets/imgs/title_background.png);
				background-size: 100% 100%;
			}
		}
	}
	
	.theme-red {
		.business {
			.business_add_wrap {
				background: url(../../assets/imgs/red/bg_list_line.jpg) no-repeat left bottom;
				background-color: #d24836;
			}
			.business_add {
				height: 51px;
				line-height: 51px;
			}
			.business-terms-list {
				.business_title {
					height: 51px;
					line-height: 51px;
					&.active, &:hover {
						background: url(../../assets/imgs/red/bg_red_bar.jpg)
					}
					i {
						color: #feb600;
						&.bt_left{
							color:#FFF;
						}
					}
				}
			}
		}
	}
	
	.theme-green {
		.business {
			.business_add_wrap {
				background: url(../../assets/imgs/green/bg_list_line.jpg) no-repeat left bottom;
			}
			.business_add {
				height: 51px;
				line-height: 51px;
			}
			.business-terms-list {
				.business_title {
					height: 51px;
					line-height: 51px;
					&.active, &:hover {
						background: url(../../assets/imgs/green/bg_green_bar.jpg);
					}
					i {
						color: #feb600;
						&.bt_left{
							color:#FFF;
						}
					}
				}
			}
		}
	}
</style>