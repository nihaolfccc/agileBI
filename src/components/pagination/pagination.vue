<template>
  <el-pagination 
  	background 
  	layout="sizes,prev, pager, next" 
  	:total="total||100" 
  	:page-size="5" 
  	:page-sizes="[5, 10, 15, 20]"  
  	prev-text="上一页" next-text="下一页" 
  	@size-change="handleSizeChange"  
  	@current-change="handleCurrentChange" 
  	:current-page.sync="currentPage">  	
  </el-pagination>
</template>
<script>
export default {
  data: function() {
    return {
    	currentPage:1,
    };
  },
  props: {
    total: {
      type: Number
    }
  },
  methods: {
  	handleSizeChange(val) {
  		 this.$store.commit("changeDataLimit",val)
//	    console.log(`每页 ${val} 条`);
	  },
	  handleCurrentChange(val) {
//	    console.log(`当前页: ${val}`);    
	    this.$store.commit("changeDataPage",val)
	  }
  }
};
</script>

<style scoped style lang="scss">

</style>