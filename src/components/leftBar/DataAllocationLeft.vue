<template>
	<div class="data_allocation">
		<happy-scroll>
			<div class="all_data" v-for="(item,index) in dataAll" :key="index">
				<span class="all_data_name" :class="{'nameActive': nameActive == index}">{{item.title}}</span>
				<div class="all_data_select">
					<ul class="clearfix">
						<li :title="obj.name" v-for="(obj,i) in item.data" :key="i" :class="{'active': active == obj.id}" @click="getActive(obj,index)">
							<div class="ads_border">
								<img :src="obj.imgUrl" alt="" />
								<div class="ads_name" :title="obj.name">
									{{obj.name}}
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</happy-scroll>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				dataAll:[{
					title:"数据库",
					data:[{
						name:"MySQL",
						imgUrl:require("@/assets/imgs/common/MySQL.png"),
						id:"1",
						tag:"mysql"
					},{
						name:"MaprHadoopHive",
						imgUrl:require("@/assets/imgs/common/MaprHadoopHive.png"),
						id:"2",
						tag:"mapr"
					},{
						name:"oracle",
						imgUrl:require("@/assets/imgs/common/oracle.png"),
						id:"3",
						tag:"mysql"
					},{
						name:"SQLServer",
						imgUrl:require("@/assets/imgs/common/SQLServer.png"),
						id:"4",
						tag:"mysql"
					}]
				},
//				{
//					title:"文件",
//					data:[{
//						name:"Excle",
//						imgUrl:require("@/assets/imgs/common/excle2.png"),
//						id:"5",
//						tag:"execl"
//					},
////					{
////						name:"csv",
////						imgUrl:require("@/assets/imgs/common/csv.png"),
////						id:"6",
////						tag:"execl"
////					}
//					]
//				},
//				{
//					title:"网页",
//					data:[{
//						name:"HTML",
//						imgUrl:require("@/assets/imgs/common/web.png"),
//						id:"7",
//						tag:"web"
//					}]
//				}
				],
				active: 1,
				nameActive: 0,
			}
		},
		components: {},
		methods: {
			getActive(obj, index) {
				this.active = obj.id
				this.nameActive = index
				this.$store.commit('changeDataMatch', obj)
			}

		},

	}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.data_allocation {
		width: 284px;
		background-blend-mode: saturation, normal, normal;
		.all_data_name {
			display: block;
			margin: auto;
			width: 273px;
			height: 43px;
			text-align: center;
			letter-spacing: 1px;
			font-weight: bold;
			font-stretch: bold;
			line-height: 43px;
			color: rgba(255, 255, 255, 0.9);
			font-size: 14px;
			user-select: none;
		}
		.all_data {
			width: 284px;
			padding-top: 3px;
			.all_data_select {
				width: 273px;
				margin: 7px auto 5px;
				ul {
					padding-top: 27px;
					padding-left: 3px;
					padding-bottom: 16px;
					li {
						float: left;
						width: 113px;
						height: 80px;
						margin-bottom: 10px;
						margin-left: 9px;
						border: 4px solid transparent;
						border-radius: 5px;
						cursor: pointer;
						-webkit-transition: border .3s;
						-moz-transition: border .3s;
						-ms-transition: border .3s;
						-o-transition: border .3s;
						transition: border .3s;
						.ads_border {
							position: relative;
							width: 111px;
							height: 78px;
							border: 1px solid;
							border-radius: 1px;
							.ads_name {
								position: absolute;
								bottom: 0;
								left: 0;
								width: 100%;
								height: 18px;
								line-height: 18px;
								font-size: 14px;
								background-color: rgba(0, 0, 0, 0.5);
								text-align: center;
								color: #FFF;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								cursor: pointer;
							}
						}
					}
				}
			}
		}
	}
	
	.theme-red {
		.data_allocation {
			.all_data_name {
				background: url(../../assets/imgs/red/title_red.png);
			}
			.all_data_select {
				background: url(../../assets/imgs/red/content_red.png);
				background-size: 100% 100%;
				ul {
					li {
						.ads_border {
							border-color: #e08275;
						}
					}
					li:hover {
						border-color: #f2d0cc;
					}
					li.active {
						border-color: #f2d0cc
					}
				}
			}
		}
	}
	
	.theme-blue {
		.data_allocation {
			.all_data_name {
				background: url(../../assets/imgs/blue/title_blue.png);
			}
			.all_data {
				.nameActive {
					background: url(../../assets/imgs/blue/title_blue_select.png)
				}
			}
			.all_data_select {
				background: url(../../assets/imgs/blue/content_blue.png);
				background-size: 100% 100%;
				ul {
					li {
						.ads_border {
							border-color: #FFF;
						}
					}
					li:hover {
						border-color: #FFF
					}
					li.active {
						border-color: #FFF
					}
				}
			}
		}
	}
	
	.theme-green {
		.data_allocation {
			.all_data_name {
				background: url(../../assets/imgs/green/title_green.png);
			}
			.all_data_select {
				background: url(../../assets/imgs/green/content_green.png);
				background-size: 100% 100%;
				ul {
					li {
						.ads_border {
							border-color: #619c78;
						}
					}
					li:hover {
						border-color: #c6dbce
					}
					li.active {
						border-color: #c6dbce
					}
				}
			}
		}
	}
</style>