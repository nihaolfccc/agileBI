<template>
	<div class="main_sp">
		<h2 class="clearfloat clearfix">
			<b>{{moduleName}}</b>
  			<span @click="changeList(moduleName)"><i class="iconfont icon-huanyihuan"></i><label class="transition">换一批</label></span>
  		</h2>
  		<div class="main_sp_rank">
  			<span>排名</span>
  			<span>搜索次数</span>
  		</div>
		<ul>
			<li v-for="(item, index) in items" :key="index">
				<a :title="item.searchName" class="transition" :class="{'active': rightActive==item.id}" @click="getResult(item.searchName, item.id)">{{item.searchName}}</a>
				<span>{{item.searchCount}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import {getHotspot,getCollect} from "@/api/index.js"
	export default {
		name: "means",
		props: {
			moduleName: String
		},
		data() {
			return {
				rightActive: -1,
				items: [],
				HotspotPage:1,
				CollectPage:1
			}
		},
		methods: {
			changeList(name) {
				//请求接口
				if(name == '热点'){
					this.HotspotPage++;
					this.getAjax()
				}else if(name == "收藏"){
					this.CollectPage++;
					this.getAjax()
				}
			},
			getResult(searchContent, index) {
				this.$store.commit('changeListState')
				setTimeout(()=> {
					this.rightActive = index
				}, 0)
				
				this.$store.commit('changeSearchContent', searchContent)				
			},
			// 换一换接口
			getAjax(){
				if(this.moduleName == "热点"){
					getHotspot({
						page:this.HotspotPage,
						limit:5
					})
					.then(data => {
//						console.log(data)
						if(data.data.pageList.length <= 0){
							//当返回数据为空时，跳回第一页
							this.HotspotPage = 1
							this.getAjax()
						}else{
							this.items = data.data.pageList
						}
					})
					.catch(err=>{
//						console.log(err)
					})
				}else if(this.moduleName == "收藏"){
					getCollect({
						page:this.CollectPage,
						limit:5
					})
					.then(data => {
						if(data.data.pageList.length <= 0){
							//当返回数据为空时，跳回第一页
							this.CollectPage = 1
							this.getAjax()
						}else{
							var obj = {}
							var arrLength = data.data.pageList.length > 5 ? 5 :data.data.pageList.length
							this.items = [];
							for(let i = 0; i < arrLength; i++){
								obj={
									"searchName":data.data.pageList[i].reportName,
									"id":data.data.pageList[i].id,
									"searchCount": data.data.pageList[i].storeCount
								}
								this.items.push(obj)
							}
//							console.log(this.items)
						}
					})
					.catch(err=>{
						console.log(err)
					})
				}
			}
		},
		computed: {
			listState() {
				return this.$store.state.listState
			}
		},
		watch: {
			//监听列表选中项状态
			listState: {
				handler(newValue, oldValue) {
					this.rightActive = -1
				}
			}
		},
		created(){
			//请求接口
			this.getAjax()
		},
		mounted() {
			
		}
	}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.main_sp {
		width: 472px;
		height: 327px;
		border-bottom: 1px solid #c8ced3;
		&:last-of-type {
			border-bottom: none;
		}
		
		h2 {
			position: relative;
			height: 80px;
			font-weight: 700;
			line-height: 80px;
			font-size: 20px;
			color: #333333;
			span {
				float: right;
				cursor: pointer;
				font-size: 14px;
				color: #7b828d;
				label {
					font-weight: normal;
					font-stretch: normal;
					font-size: 14px;
					line-height: 47px;
					letter-spacing: 0px;
					cursor: pointer;
					color: rgba(32, 51, 74, 0.7)
				}
				i {
					vertical-align: middle;
					margin-right: 4px;
					font-size: 20px;
					color: $home-change-color;
				}
			}
			span:hover {
				label {
					color: $home-change-color;
				}
			}
		}
		.main_sp_rank{
			display: flex;
			justify-content: space-between;
			-webkit-justify-content: space-between;
			width: 100%;
			height: 25px;
			text-align: top;
			color:#89939f;
			span{
				font-size: 16px;
				color:#89939f;
			}
		}
		ul {
			padding-bottom: 15px;
			li{
				display: flex;
				width: 100%;
				height: 41px;
				justify-content: space-between;
				-webkit-justify-content: space-between;
				line-height: 41px;
				font-size: 16px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				a {
					
					font-size: 16px;
					max-width: 400px;
					overflow: hidden;
	  				white-space: nowrap;
	  				text-overflow:ellipsis ;
				}
				span{
					font-size: 16px;
					color: #919191;
				}
				a:hover,
				a.active {
					text-decoration: underline;
					cursor: pointer;
					color: $whole-hover-color;
				}
			}
			li:nth-child(1){
				span{
					color: #fb3c32;
				}
			}
			li:nth-child(2){
				span{
					color: #ff6e17;
				}
			}
			li:nth-child(3){
				span{
					color: #ffa200;
				}
			}
		}
	}
	
	/*dd2911
	 * #00a949
	 * */
	
	.theme-red{
		h2{
			color: #333333;
			span{
				color: #dd2911;
				label {
					color: rgba(32, 51, 74, 0.7)
				}
				i {
					color: #dd2911;
				}
			}
			span:hover {
				label {
					color: #dd2911;
				}
			}
		}
		ul {
			li{
				a:hover,
				a.active {
					color: #dd2911;
				}
			}
		}
	}
	.theme-blue{
		h2 {
			color: #333333;
			span {
				color: #7b828d;
				label {
					color: rgba(32, 51, 74, 0.7)
				}
				i {
					color: #2c74ca;
				}
			}
			span:hover {
				label {
					color: $home-change-color;
				}
			}
		}
		ul {
			
			li{
				a {
					color: #20334a;
				}
				span{
					color: #919191;
				}
				a:hover,
				a.active {
					color: $whole-hover-color;
				}
			}
		}
	}
	.theme-green{
		h2 {
			color: #333333;
			span {
				color: #00a949;
				label {
					color: rgba(32, 51, 74, 0.7)
				}
				i {
					color: #00a949;
				}
			}
			span:hover {
				label {
					color: #00a949;
				}
			}
		}
		ul {
			li{
				a:hover,
				a.active {
					color: #00a949;
				}
			}
		}
	}
</style>