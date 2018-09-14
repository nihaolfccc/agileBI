<template>
	<div class="test">
		<div class="placeholder">
			正在开发中，敬请期待...
		</div>
		<!--<el-row class="tac">
		  <el-col :span="12">
		    <h5>默认颜色</h5>
		    <el-menu
		      default-active="2"
		      mode="vertical"
		      popper-append-to-body = "false"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose">
		      <el-submenu index="1">
		        <template slot="title">
		          <i class="el-icon-location"></i>
		          <span>导航一</span>
		        </template>
		        <el-menu-item-group>
		          <template slot="title">分组一</template>
		          <el-menu-item index="1-1">选项1</el-menu-item>
		          <el-menu-item index="1-2">选项2</el-menu-item>
		        </el-menu-item-group>
		        <el-menu-item-group title="分组2">
		          <el-menu-item index="1-3">选项3</el-menu-item>
		        </el-menu-item-group>
		        <el-submenu index="1-4">
		          <template slot="title">选项4</template>
		          <el-menu-item index="1-4-1">选项1</el-menu-item>
		        </el-submenu>
		      </el-submenu>
		      <el-menu-item index="2">
		        <i class="el-icon-menu"></i>
		        <span slot="title">导航二</span>
		      </el-menu-item>
		      <el-menu-item index="3" disabled>
		        <i class="el-icon-document"></i>
		        <span slot="title">导航三</span>
		      </el-menu-item>
		      <el-menu-item index="4">
		        <i class="el-icon-setting"></i>
		        <span slot="title">导航四</span>
		      </el-menu-item>
		    </el-menu>
		  </el-col>
		</el-row>-->
	</div>
</template>
<script>
	export default {
		data() {
			return {
				age: 0,
				/*tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],*/
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					tag: '家'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					tag: '公司'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					tag: '家'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄',
					tag: '公司'
				}, {
					date: '2016-05-01',
					name: '王小虎2',
					address: '上海市普陀区金沙江路 1520 弄',
					tag: '公司'
				}],
				tableData6: [{
					id: '12987122',
					name: '王小虎',
					amount1: '234',
					amount2: '3.2',
					amount3: 10
				}, {
					id: '12987123',
					name: '王小虎',
					amount1: '165',
					amount2: '4.43',
					amount3: 12
				}, {
					id: '12987124',
					name: '王小虎',
					amount1: '324',
					amount2: '1.9',
					amount3: 9
				}, {
					id: '12987125',
					name: '王小虎',
					amount1: '621',
					amount2: '2.2',
					amount3: 17
				}, {
					id: '12987126',
					name: '王小虎',
					amount1: '539',
					amount2: '4.1',
					amount3: 15
				}],
			};
		},
		methods: {
			 handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		      },
		      handleClose(key, keyPath) {
		        console.log(key, keyPath);
		      },
			
			formatter(row, column) {
				//console.log(row, column);
				return row.address;
			},
			sortChange(data) {
				console.log(data);
				//在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据
			},
			filterTag(value, row) {
				return row.tag === value;
			},
			filterHandler(value, row, column) {
				console.log(value, row, column); //2016-05-01 {} {}
				const property = column['property'];
				return row[property] === value;
			},
			handleEdit(index, row) {
				console.log(index, row);
				row.name = '辛志强' + index
			},
			handleDelete(index, row) {
				console.log(index, row);
				this.tableData.splice(index, 1)
			},
			getSummaries(param) {
				console.log(param);
				const {
					columns,
					data
				} = param;
				const sums = [];
				columns.forEach((column, index) => {
					if(index === 0) {
						sums[index] = '总价';
						return;
					}
					const values = data.map(item => Number(item[column.property]));
					console.log(values);
					if(!values.every(value => isNaN(value))) {
						sums[index] = values.reduce((prev, curr) => {
							const value = Number(curr);
							if(!isNaN(value)) {
								return prev + curr;
							} else {
								return prev;
							}
						}, 0);
						sums[index] += ' 元';
					} else {
						sums[index] = 'N/A';
					}
				});

				return sums;
			},
		}
	};
</script>
<style scoped lang="scss" rel="stylesheet/scss">
	.test {
		position: relative;
		height: calc(100vh - 170px);
		.placeholder {
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