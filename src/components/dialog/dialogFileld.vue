<template>
	
	<div class="zTree_dialog_content">
		 <div class="zdc_content_tree">
		 	<el-tree class="zdc_project-tree" unselectable="on" :render-content="renderContent" :data="data" :props="defaultProps" :expand-on-click-node="true" @node-click="handleNodeClick"></el-tree>
		 </div>
		 <div class="zdc_content_tab">
			<el-table :data="tableData3" align="center">
			    <el-table-column type="selection" align="center"></el-table-column>
			    <el-table-column prop="date" align="center" label="字段" show-overflow-tooltip></el-table-column>
			    <el-table-column prop="name" align="center" label="类型" show-overflow-tooltip></el-table-column>
			 </el-table>	 
		 </div>
	</div>	
</template>

<script>
	export default {
	  data() {
	    return {
			data: [{
	          label: '一级 1',
	          className: "first-level",
	          children: [{
	            label: '二级 1-1',
	            className: "second-level",
	            children: [{
	              label: '三级 1-1-1',
	              className: "third-level",
	            }]
	          }]
	        }, {
	          label: '一级 2',
	          className: "first-level",
	          children: [{
	            label: '二级 2-1',
	            className: "second-level",
	            children: [{
	              label: '三级 2-1-1',
	              className: "third-level",
	            }]
	          }, {
	            label: '二级 2-2',
	            className: "second-level",
	            children: [{
	              label: '三级 2-2-1',
	               className: "third-level",
	            }]
	          }]
	        }, {
	          label: '一级 3',
	          className: "first-level",
	          children: [{
	            label: '二级 3-1',
	            className: "second-level",
	            children: [{
	              label: '三级 3-1-1',
	              className: "third-level",
	            }]
	          }, {
	            label: '二级 3-2',
	            className: "second-level",
	            children: [{
	              label: '三级 3-2-1',
	              className: "third-level",
	            }]
	          }]
	        }],
	        tableData3: [{
	          date: '2016-05-03',
	          name: '王小虎',
	        }, {
	          date: '2016-05-02',
	          name: '王小虎',
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	        }, {
	          date: '2016-05-08',
	          name: '王小虎',
	        }, {
	          date: '2016-05-06',
	          name: '王小虎',
	        }, {
	          date: '2016-05-07',
	          name: '王小虎',
	        }],
	        defaultProps: {
	          children: 'children',
	          label: 'label'
	        },
	       
		}
	  },
	  mounted(){
	  },
	  methods: {
    	handleNodeClick(data) {
	        console.log(data);
	    },
     	renderContent(h, { node, data, store }) {
	        return (
	          <span class="custom-tree-node">
	            <i class={data.className}></i>
	            <span style="margin-left:5px;">{node.label}</span>
	          </span>
	          );
	    }
	  },
	  components: {
	  },
	  computed: {}
	}
	
</script>

<style lang="scss"> 
	.zTree_dialog_content{
		display: flex;
		margin: 30px;
		height: 386px;
		border: 1px solid #DDDDDD;
		.zdc_content_tree{
			width: 315px;
			border-right: 1px solid #DDDDDD;
			.first-level{
				background: url(../../assets/imgs/data_blue.png) ;
				width: 15px;
			    height: 15px;
			    display: inline-block;
			    background-size: 100% 100%;
			    vertical-align: middle;
			}
			.second-level{
				background: url(../../assets/imgs/file.png) ;
				width: 15px;
			    height: 15px;
			    display: inline-block;
			    background-size: 100% 100%;
			    vertical-align: middle;
			}
			.third-level{
				background: url(../../assets/imgs/file.png) ;
				width: 15px;
			    height: 15px;
			    display: inline-block;
			    background-size: 100% 100%;
			    vertical-align: middle;
			}
		}
		.zdc_content_tab{
			flex: 1;
		}	
	}
	
</style>