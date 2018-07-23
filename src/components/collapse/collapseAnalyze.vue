<template>
	<el-collapse class="collapse" v-model="activeNames">
		<el-collapse-item v-for="(item, index) in echartsList" :key="index" :name="index+1">
			<template slot="title">
				<p :title="item.title">{{item.title}}</p>
			</template>
			<div class="item">
				<div class="left-layout" :class="{'active': active==item.id}" @click="changeEcharts(item.id)">
					<div>
						<img :src="item.src" />
					</div>
				</div>
				<div class="right-layout" :class="{'active': active==item.id2}" @click="changeEcharts(item.id2)">
					<div>
						<img :src="item.src" />
					</div>
				</div>
			</div>
		</el-collapse-item>
	</el-collapse>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				activeNames: [1],
				active: 0,
			}
		},
		props: {
			echartsList: {
				type: Array
			}
		},
		computed: {

		},
		watch: {

		},
		methods: {
			changeEcharts(id) {
				//console.log(id)
				this.active=id
			},
		},
		mounted() {

		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	.collapse {
		.el-collapse-item__header {
			padding: 0 20px 1px;
		}
		.item {
			>div {
				border: 6px solid transparent;
				border-radius: 8px;
				cursor: pointer;
				opacity: .6;
				transition: .3s;
				&.left-layout {
					margin-bottom: 18px;
				}
				&.active, &:hover{
					border-color: rgba(255, 255, 255, .5);
					opacity: 1;
				}
				>div {
					border: 2px solid rgba(255, 255, 255, .5);
					border-radius: 2px;
					>img {
						width: 100%;
					}
				}
			}
		}
	}
	
	.theme-blue {
		.collapse {
			.item {
				margin: 10px 14px;
			}
		}
	}
	
	.theme-red {
		.collapse {
			.el-collapse-item__header {
				background: url(../../assets/imgs/red/bg_list_line.jpg) no-repeat left bottom;
				&.is-active {
					background: url(../../assets/imgs/red/bg_red_bar.jpg);
				}
			}
			.el-collapse-item__wrap {
				background-color: #c7402e;
			}
			.item {
				margin: 20px;
			}
		}
	}
	
	.theme-green {
		.collapse {
			.el-collapse-item__header {
				background: url(../../assets/imgs/green/bg_list_line.jpg) no-repeat left bottom;
				&.is-active {
					background: url(../../assets/imgs/green/bg_green_bar.jpg);
				}
			}
			.el-collapse-item__wrap {
				background-color: #176636;
			}
			.item {
				margin: 20px;
			}
		}
	}
</style>