import $api from './config/config'

//获取首页数据 测试接口
const getList = (params) => {
	return $api.post({
		url: '/strainsList',
		params
	})
}
const postList = (params) => {
	return $api.get({
		url: '/overview',
		params
	})
}
//获取首页数据   后端接口  
//头部搜索框接口
const getHeadSearch = (params) => {
	return $api.get({
		url: "/reportInfo/list",
		params
	})
}
//热点接口
const getHotspot = (params) => {
	return $api.get({
		url: "/reportSearchHistory/list",
		params
	})
}
//收藏接口
const getCollect = (params) => {
	return $api.get({
		url: "/reportStoreCount/list",
		params
	})
}

/*
 * 数据源接口
 * */
//数据源测试连接
const getDataAllocationRight = (params) => {
	return $api.get({
		url: "/dataSourceController/verifyDSConnect",
		params
	})
	//POST /dataSourceController/testDataSourceConnect
}
//数据源保存
const postDataAllocationRight = (params) => {
	return $api.post({
		url: "/dataSourceController/insertDs",
		params
	})
	//POST  /dataSourceController/insertDs
}
//数据源列表查询
const getDataMatchingList = (params) => {
	return $api.get({
		url: "/dataSourceController/getDbVendorList",
		params
	})
}
//数据源列表分页查询 
const getDataMatchingPageList = (params) => {
	return $api.get({
		url: "/dataSourceController/queryDsPageList",
		params
	})
}
//数据源查询表字段信息接口
const getDataMatchField = (params) => {
	return $api.get({
		url: "/dbQuery/mysql_table_fields",
		params
	})
}

///dbQuery/mysql_table_fields
//dataSourceController/getDbVendorList

//测试get  和post  方法
const getTest = (params) => {
	return $api.get({
		url: "/test/get2",
		params
	})
}
const postTest = (params) => {
	return $api.post({
		url: "/test/post1",
		params
	})
}

export {
	getList,
	postList,
	getHeadSearch,
	getHotspot,
	getCollect,
	postDataAllocationRight,
	getDataAllocationRight,
	getDataMatchingList,
	getDataMatchingPageList,
	getDataMatchField,
	getTest,
	postTest
}