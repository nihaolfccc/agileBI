<template>
	<div class="search">
		<div class="search-content">
			<div class="search-content-top">
				<div class="main_seek">
					<input type="text" placeholder="请输入需要查询的内容" v-model.trim="$root.search" @keyup.enter="getSearchResult" />
					<span class="main_seek_btn" @click="getSearchResult">搜索一下</span>
				</div>
			</div>
			<div class="search-content-bottom">
				<ul class="main_word fl">
					<li class="main_word_hot">热搜：</li>
					<li v-for="(item, index) in topSearch" :key="index">
						<a :title="item.searchName" class="transition" :class="{'main_word_warg': topActive==item.id}" @click="getHotSearchResult(item.searchName, item.id)">{{item.searchName}}</a>
					</li>
				</ul>
				<div class="main_quiz fr">
					<router-link to="/" title="如何搜索?">如何搜索?</router-link>
					<router-link to="/" title="历史提过的问题">历史提过的问题</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { BIMsg } from '../assets/js/tools.js'
	import { getHeadSearch, getHotspot } from "@/api/index.js"
	export default {
		name: "search",
		data: function() {
			return {
				searchDataList: [],
				topActive: -1,
				topSearch: []
			}
		},
		components: {},
		computed: {
			listState() {
				return this.$store.state.listState
			},
			searchContent() {
				return this.$store.state.searchContent
			},
			searchData() {
				return this.$store.state.searchData
			}
		},
		watch: {
			//监听列表选中项状态
			listState: {
				handler(newValue, oldValue) {
					this.topActive = -1
				}
			},
			//监听搜索框的变化
			searchContent: {
				handler(newValue, oldValue) { //要改变值
					this.$root.search = newValue
				},
				deep: true
			},
		},
		methods: {
			getSearchResult() {
				if(this.$root.search) {
					// 调接口，返回问题所匹配的图表
					// 成功后把搜索内容存在缓存和vuex中
					this.getAjax(this.$root.search)
				} else {
					BIMsg({
						message: "输入框内容不能为空！",
						type: 'info'
					})
				}
			},
			getHotSearchResult(hotSearchContent, index) {
				//console.log(hotSearchContent, index)
				this.$store.commit('changeListState')
				setTimeout(() => {
					this.topActive = index
				}, 0)
				this.$store.commit('changeSearchContent', hotSearchContent)
				this.getAjax(hotSearchContent)
			},
			getAjax(name) {
				getHeadSearch({
						reportName: name
					})
					.then(data => {
						if(data.data.pageList.length > 0) {
							this.searchDataList = []
							for(let i = 0; i < data.data.pageList.length; i++) {
								var obj = {};
								obj.text = data.data.pageList[i].reportName
								obj.id = data.data.pageList[i].id
								obj.url = data.data.pageList[i].reportUrl
								this.searchDataList.push(obj)
							}
							//this.$store.commit('changeListState')
							this.$store.commit('changeSearchContent', this.$root.search)
							this.$store.commit('changeSearchData', this.searchDataList)
							this.$router.push({
								name: "searchReuslt"
							});
						} else {
							BIMsg({
								message: "暂无数据！",
								type: 'info'
							})
						}
					})
					.catch(err => {

					})
			}
		},
		created() {
			getHotspot({ //热搜接口
					page: 1,
					limit: 4
				})
				.then(data => {
					//console.log(data.data.pageList)
					this.topSearch = data.data.pageList
				})
				.catch(err => {
					console.log(err)
				})
		},
		mounted() {

		}
	};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.search {
		background: url(../assets/imgs/common/bg_search.jpg) no-repeat;
		background-size: 100% 100%;
		.search-content {
			margin: 0 auto;
			width: 888px;
		}
	}
	
	.search-content-top {
		display: flex;
		flex-direction: row;
		height: 40px;
		padding-top: 29px;
		.main_seek {
			position: relative;
			flex: 1;
			display: flex;
			flex-direction: row;
			input {
				flex: 1;
				height: 40px;
				line-height: 40px;
				box-sizing: border-box;
				box-shadow: none;
				border: none;
				border: 1px solid $search-input-border;
				border-radius: 20px;
				padding-left: 22px;
				background-color: $search-input-bgcolor;
				color: $search-input-color;
				font-size: 16px;
				padding-right: 150px;
			}
			input:focus {
				outline: 0 !important;
			}
			.main_seek_btn {
				position: absolute;
				background: url("../assets/imgs/blue/pageseek2.png");
				width: 142px;
				height: 40px;
				top: 0;
				right: 0;
				border-radius: 20px;
				font-size: 16px;
				line-height: 40px;
				text-align: center;
				color: $search-input-btn;
				cursor: pointer;
				user-select: none;
				&:hover {
					opacity: 0.8;
				}
			}
		}
	}
	
	.search-content-bottom {
		height: 47px;
		line-height: 47px;
		padding-bottom: 4px;
		.main_word {
			li {
				float: left;
				margin-left: 35px;
				color: $search-hot-li;
				font-size: 12px;
				a {
					text-decoration: underline;
					font-size: 12px;
					color: $search-input-color;
				}
				a.main_word_warg {
					color: $search-blue;
				}
				a:hover {
					color: $search-blue
				}
			}
			.main_word_hot {
				margin-left: 0px;
			}
		}
		.main_quiz {
			a {
				text-decoration: underline;
				color: $search-blue;
				font-size: 14px;
				padding-right: 35px;
				&:last-of-type {
					padding-right: 0;
				}
			}
		}
	}
	
	.theme-blue {
		.main_seek {
			input {
				border: 1px solid $search-input-border;
				background-color: $search-input-bgcolor;
				color: $search-input-color;
			}
			.main_seek_btn {
				background: url("../assets/imgs/blue/pageseek2.png");
			}
		}
	}
	
	.theme-green {
		.main_seek {
			input {
				border: 1px solid $search-input-border-blue;
				background-color: $search-input-bgcolor-blue;
			}
			.main_seek_btn {
				background: url("../assets/imgs/green/pageseek_green.png");
				width: 98px;
				border-radius: 0px 20px 20px 0px;
				/*background: #fac009;
				border:1px solid #e49804;*/
				color: #FFF;
				/*height: 36px;*/
			}
		}
		.main_quiz {
			a {
				color: $green-color;
			}
		}
		.main_word {
			li {
				a.main_word_warg {
					color: $green-color;
				}
				a:hover {
					color: $green-color;
				}
			}
			.main_word_hot {
				margin-left: 0px;
			}
		}
	}
	
	.theme-red {
		.main_seek {
			input {
				border: 1px solid $search-input-border-red;
				background-color: $search-input-bgcolor-red;
			}
			.main_seek_btn {
				width: 98px;
				border-radius: 0px 20px 20px 0px;
				background: url("../assets/imgs/red/pageseek_red.png");
				/*background: #f45936;*/
				color: #FFF;
				/*border:1px solid #ca2a16;
				height: 36px;*/
			}
		}
		.main_quiz {
			a {
				color: $red-color;
			}
		}
		.main_word {
			li {
				a.main_word_warg {
					color: $red-color;
				}
				a:hover {
					color: $red-color;
				}
			}
			.main_word_hot {
				margin-left: 0px;
			}
		}
	}
</style>