<template>
	<el-table :data="tableData" style="width: 100%" height="200" size="medium">
		<el-table-column type="index" :index="index">
		</el-table-column>
		<el-table-column prop="date" label="日期" width="180" class-name="xin" label-class-name="dateClass">
		</el-table-column>
		<el-table-column prop="name" label="姓名" width="180">
		</el-table-column>
		<el-table-column prop="address" label="地址">
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
					tag: '家'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
					tag: '公司'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
					tag: '家'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
					tag: '公司'
				}],
				index: 1,
			}
		},
		methods: {
			indexMethod(index) {
				return index * 2;
			}
		}
	};
</script>
<style type="text/css" lang="scss">
	.xin{
		color: red;
	}
	.dateClass{
		color: blue !important;
	}
</style>