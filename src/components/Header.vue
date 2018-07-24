<template>
	<div class="header-main clearfix">
		<div class="logoBox fl" @click="goHome">
			<img src="../assets/imgs/logo.png" />
		</div>
		<!--<div class="add_and_no fr" v-if="$root.configureActive == 2 || $root.configureActive == 1">
      <button class="add">保存</button>
      <button class="cancel">取消</button>
    </div>-->
		<ul class="headMenu fr">
			<li :class="{'active': $root.headNav==0}">
				<router-link to="searchReuslt">
					<span>首页</span>
					<em>Home</em>
				</router-link>
			</li>
			<li :class="{'active': $root.headNav==1}" @mouseenter="flag_configure=true" @mouseleave="flag_configure=false">
				<a>
					<span class="transition">配置</span>
					<em class="transition">Configure</em>
				</a>
				<transition name="fade-slide">
					<div class="configure-list" v-show="flag_configure">
						<span class="arrow-top"></span>
						<ol class="pull-down-menu">
							<li v-for="(item, index) in configureList" :key="index" @click="goConfigurePage(item.url)" :class="{'active': $root.configureActive==index}">{{item.name}}</li>
						</ol>
					</div>
				</transition>
			</li>
			<li :class="{'active': $root.headNav==2}">
				<router-link to="collect">
					<span class="transition">收藏</span>
					<em class="transition">Collection</em>
				</router-link>
			</li>
			<li :class="{'active': $root.headNav==3}">
				<router-link :to="{name:'test'}">
					<span class="transition">帮助</span>
					<em class="transition">Help</em>
				</router-link>
			</li>
			<li @mouseenter="flag_skin=true" @mouseleave="flag_skin=false">
				<a>
					<span class="transition">换肤</span>
					<em class="transition">Skin</em>
				</a>
				<transition name="fade-slide">
					<div class="configure-list" v-show="flag_skin">
						<span class="arrow-top"></span>
						<ol class="pull-down-menu pull-down-menu2">
							<li v-for="(item, index) in skinList" :key="index" @click="setTheme(item.pic, index)" :class="[{'active': $root.skinActive==index}, item.pic]">{{item.name}}</li>
						</ol>
					</div>
				</transition>
			</li>
			<li class="margin-right" :class="{'active': $root.headNav==4}">
				<router-link to="community">
					<span class="transition">社区</span>
					<em class="transition">Community</em>
				</router-link>
			</li>

			<li class="divider"></li>
			<li v-if="isLogin==false">
				<login/>
			</li>
			<li v-if="isLogin==true">
				<router-link to="">
					<i class="iconfont icon-yonghu transition"></i>
					<span class="transition">唐悠悠</span>
				</router-link>
			</li>
		</ul>

	</div>
</template>

<script>
	import { mapMutations } from "vuex";
	import login from "../components/login/login.vue";
	export default {
		name: "headerBar",
		components: {
			login
		},
		data: function() {
			return {
				isLogin: false,
				flag_configure: false,
				flag_skin: false,
				configureList: [{
						name: "数据源设置",
						url: "dataMatching"
					},
					{
						name: "数据表分类",
						url: "dataClassify"
					},
					{
						name: "数据源展示",
						url: ""
					},
					{
						name: "数据关联",
						url: "dataAssociation"
					},
					{
						name: "业务数据配置",
						url: "businessMatching"
					},
					{
						name: "模板配置",
						url: "templateMatching"
					},
//					{
//						name: "数据源列表",
//						url: "dataMatchingList"
//					}
				],
				skinList: [{
						name: "橘红色",
						pic: "red"
					},
					{
						name: "蓝色",
						pic: "blue"
					},
					{
						name: "绿色",
						pic: "green"
					}
				]
			};
		},
		computed: {},
		methods: {
			//vuex中设置mutations
			...mapMutations(["changeTheme"]),
			goHome() {
				this.$router.push({
					name: "searchReuslt"
				});
			},
			goConfigurePage(url) {
				this.$router.push({
					name: url
				});
			},
			toggleToUser() {
				// this.isLogin = true
				// sessionStorage.setItem('isLogin', true)
			},
			setTheme(theme, index) {
				// 存取 localStorage 以防页面刷新 丢失主题
				localStorage.setItem("theme", theme);
				this.changeTheme(theme);
				this.$root.skinActive = index;
				localStorage.setItem("skinActive", index);
			},
			windowChangeColor() {
				//不同窗口的状态监听
				let _this = this;
				window.addEventListener("storage", function(e) {
					if(e.key == "theme") {
						_this.changeTheme(e.newValue);
					}
					if(e.key == "skinActive") {
						_this.$root.skinActive = e.newValue;
					}
				});
			}
		},
		created() {
			this.windowChangeColor();
		},
		mounted() {
			//console.log(sessionStorage.getItem('isLogin'), typeof sessionStorage.getItem('isLogin'));
			this.isLogin = sessionStorage.getItem("isLogin") ?
				JSON.parse(sessionStorage.getItem("isLogin")) :
				false;
		}
	};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.header-main {
		padding: 0 50px;
		height: 50px;
	}
	
	.add_and_no {
		z-index: 100;
		height: 50px;
		line-height: 50px;
		margin-left: 48px;
		button {
			width: 100px;
			height: 32px;
			box-sizing: border-box;
			border-radius: 20px;
			border: 1px solid #dd2911;
			background: #fff3ef;
			color: #ffffff;
		}
		.cancel {
			margin-left: 20px;
		}
	}
	
	.logoBox {
		height: 100%;
		cursor: pointer;
		&:hover {
			opacity: 0.7;
		}
		img {
			height: 28px;
			margin-top: 11px;
		}
	}
	
	.headMenu {
		>li {
			z-index: 100;
			position: relative;
			float: left;
			margin-right: 48px;
			height: 50px;
			line-height: 50px;
			&:last-of-type {
				margin-right: 0;
			}
			&.margin-right {
				margin-right: 40px;
			}
			&.divider {
				margin-right: 34px;
				width: 1px;
				height: 18px;
				margin-top: 17px;
				background-color: $header-divider;
			}
			>a {
				padding: 15px 0;
				i {
					margin-right: 4px;
					color: $header-icon;
					font-size: 23px;
					vertical-align: middle;
				}
				span {
					color: $header-text;
					font-size: 16px;
				}
				em {
					padding-left: 4px;
					font-size: 12px;
					color: $header-english;
					font-style: italic;
				}
			}
		}
	}
	
	.configure-list {
		position: absolute;
		top: 42px;
		left: calc(50% - 89px);
		width: 178px;
		box-sizing: border-box;
		border: 1px solid $e1;
		border-radius: 6px;
		padding: 9px;
		background-color: white;
		box-shadow: 0 2px 5px #ccc;
		/*transform: translateY(0);*/
		.arrow-top {
			position: absolute;
			top: -5px;
			left: calc(50% - 4px);
			box-sizing: border-box;
			width: 8px;
			height: 8px;
			border: 1px solid $e1;
			border-right-color: transparent;
			border-bottom-color: transparent;
			background-color: white;
			transform: rotate(45deg);
		}
	}
	
	.fade-slide-enter-active,
	.fade-slide-leave-active {
		transition: .5s;
	}
	
	.fade-slide-enter,
	.fade-slide-leave-to {
		opacity: 0;
		transform: translateY(42px);
	}
	
	.pull-down-menu {
		li {
			border: 1px solid transparent;
			border-radius: 2px;
			height: 36px;
			line-height: 36px;
			text-align: center;
			font-size: 14px;
			color: $color30;
			cursor: pointer;
			transition: .3s;
		}
	}
	
	.pull-down-menu2 {
		li {
			padding-left: 80px;
			height: 46px;
			line-height: 46px;
			text-align: left;
			user-select: none;
			&.red {
				background: url(../assets/imgs/common/skin_red.png) no-repeat 9px;
			}
			&.blue {
				background: url(../assets/imgs/common/skin_blue.png) no-repeat 9px;
			}
			&.green {
				background: url(../assets/imgs/common/skin_green.png) no-repeat 9px;
			}
		}
	}
	
	.theme-blue {
		.pull-down-menu {
			li {
				&:hover,
				&.active {
					background-color: #f0f7ff;
					border: 1px solid #e6ecf5;
				}
			}
		}
		.headMenu {
			>li {
				&:hover,
				&.active {
					a {
						i,
						span,
						em {
							color: $configure-list;
						}
					}
				}
			}
		}
		.add_and_no {
			button {
				border: 1px solid #e6ecf5;
				background: #f0f7ff;
			}
			.add {
				background: url(../assets/imgs/blue/bg_confirm.png) no-repeat;
				background-size: 100% 100%;
			}
			.cancel {
				background: url(../assets/imgs/blue/btn_bg.png) no-repeat;
				background-size: 100% 100%;
				color: #4a6c98;
			}
		}
	}
	
	.theme-green {
		.pull-down-menu {
			li {
				&:hover,
				&.active {
					background-color: #e8f9e7;
					border: 1px solid #e6ecf5;
				}
			}
		}
		.headMenu {
			>li {
				&:hover,
				&.active {
					a {
						i,
						span,
						em {
							color: $configure-list-green;
						}
					}
				}
			}
		}
		.add_and_no {
			button {
				border: 1px solid #e6ecf5;
				background: #f0f7ff;
			}
			.add {
				background: url(../assets/imgs/green/test_green.png) no-repeat;
				background-size: 100% 100%;
			}
			.cancel {
				background: url(../assets/imgs/green/next_green.png) no-repeat;
				background-size: 100% 100%;
				color: #4a6c98;
			}
		}
	}
	
	.theme-red {
		.pull-down-menu {
			li {
				&:hover,
				&.active {
					background-color: #ffefe9;
					border: 1px solid #f5e6e6;
				}
			}
		}
		.headMenu {
			>li {
				&:hover,
				&.active {
					a {
						i,
						span,
						em {
							color: $configure-list-red;
						}
					}
				}
			}
		}
		.add_and_no {
			button {
				color: #eb5233;
			}
		}
	}
</style>