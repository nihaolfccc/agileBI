<template>
	<div class="test">
		<div class="placeholder">
			正在开发中，敬请期待...
		</div>
		<img src="../../assets/imgs/red/step1.png"/>
		<img src="../../assets/imgs/red/step1-selected.png"/>
		<img src="../../assets/imgs/red/step2.png"/>
		<img src="../../assets/imgs/red/step2-selected.png"/>
		
		
		<!--<el-carousel arrow="hover" :autoplay="false">
			<el-carousel-item v-for="item in 4" :key="item">
				<ul>
					<li v-for="i in 3" :key='i'>
						{{i}}
					</li>
				</ul>
			</el-carousel-item>
		</el-carousel>

		<el-tag contenteditable="true">
			{{tag}}
		</el-tag>
		{{tag}}

		<div class="box" :style="'border: 10px solid ' + color">

		</div>

		<el-radio-group v-model="radio2" @change="onChange">
			<el-radio :label="3">备选项</el-radio>
			<el-radio :label="6">备选项</el-radio>
			<el-radio :label="9">备选项</el-radio>
		</el-radio-group>
		<div>
			<el-radio-group v-model="radio3">
				<el-radio-button label="上海"></el-radio-button>
				<el-radio-button label="北京"></el-radio-button>
				<el-radio-button label="广州"></el-radio-button>
				<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		</div>
		<div style="margin-top: 20px">
			<el-radio-group v-model="radio4" size="medium">
				<el-radio-button label="上海"></el-radio-button>
				<el-radio-button label="北京"></el-radio-button>
				<el-radio-button label="广州"></el-radio-button>
				<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		</div>
		<div style="margin-top: 20px">
			<el-radio-group v-model="radio5" size="small">
				<el-radio-button label="上海"></el-radio-button>
				<el-radio-button label="北京" disabled></el-radio-button>
				<el-radio-button label="广州"></el-radio-button>
				<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		</div>
		<div style="margin-top: 20px">
			<el-radio-group v-model="radio6" disabled size="mini">
				<el-radio-button label="上海"></el-radio-button>
				<el-radio-button label="北京"></el-radio-button>
				<el-radio-button label="广州"></el-radio-button>
				<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		</div>-->
	</div>
</template>
<script>
	export default {
		data() {
			return {
				tag: '标签一',
				color: 'rgba(0,0,0,.5)',
				radio2: 3,
				radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海'
			};
		},
		methods: {
			onChange(value) {
				console.log(value)
			}
		}
	};
</script>
<style scoped lang="scss" rel="stylesheet/scss">
	.test{
		position: relative;
		height: calc(100vh - 170px);
		.placeholder{
			position: absolute;
			width: 500px;
			height: 100px;
			font-size: 40px;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			margin: auto;
			color: #CCCCCC;
		}
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}
	
	.el-tag-input {
		min-width: 20px;
		background-color: transparent;
	}
	
	.box {
		width: 200px;
		height: 200px;
		background-color: red;
	}
</style>