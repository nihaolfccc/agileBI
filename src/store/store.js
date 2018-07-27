import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//284
export default new Vuex.Store({
  modules: {},
  state: {
  	marginLeft: 0,
    flagLeftBar: true,
    flagBtn: true,
    listState: true, //列表选中项状态管理
    searchContent: '', //搜索框内容
    searchData:[],//搜索所返回的数据
    //token: sessionStorage.getItem('token') ? JSON.parse(sessionStorage.getItem('token')) : false, //看是否已登录
    themeColor: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'blue' ,//换肤主题色
    dataMatch:{},//配置项组件的更换
    reportId: 0, //制作报告页报告id
    reportName: '', //制作报告页报告标题
    flagCanvasWrap: false, //控制canvas元素的显示与隐藏
    elementType: '', //制作报告页元素类型
    domList: [], //制作报告页元素数组
    lineColor: '#ff0000',
    lineWidth: 2,
    lineType: 'solid',
    
    fontFamily: 'Arial',
    fontSize: 24,
    fontColor: '#ff0000',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontUnderline: 'none',
    
    flagHeight: true, //临时变量
    dataPage:1,//分页器
    dataLimit:5,//每页的条数
    
    visibleSearch: true, //头部搜索框与配置流程相互切换
    configurationName: 'dataMatching', //头部配置流程当前项
    
  },
  mutations: {
    changeLeftBar(state, bool) {
      state.flagLeftBar = bool
    },
    changeBtn(state, bool) {
      state.flagBtn = bool
    },
    changeListState(state) {
      state.listState = !state.listState
    },
    changeSearchContent(state, data) {
      state.searchContent = data
    },
    changeTheme(state, color) {
      state.themeColor = color
    },
    changeDataMatch(state, tag){
    	state.dataMatch = tag
    },
    changeReportId(state, id){
    	state.reportId = id
    },
    changeReportName(state, name){
    	state.reportName = name
    },
    changeCanvasWrap(state, bool){
    	state.flagCanvasWrap = bool
    },
    changeElementType(state, data){
    	state.elementType = data
    },
    changeDomList(state, data){
    	state.domList = data
    },
    changeHeight(state, bool){
    	state.flagHeight = bool
    },
    changeLineColor(state, data){
    	state.lineColor = data
    },
    changeLineWidth(state, data){
    	state.lineWidth = data
    },
    changeLineType(state, data){
    	state.lineType = data
    },
    
    changeFontFamily(state, data){
    	state.fontFamily = data
    },
    changeFontSize(state, data){
    	state.fontSize = data
    },
    changeFontWeight(state, data){
    	state.fontWeight = data
    },
    changeFontStyle(state, data){
    	state.fontStyle = data
    },
    changeFontUnderline(state, data){
    	state.fontUnderline = data
    },
    changeFontColor(state, data){
    	state.fontColor = data
    },
    
    changeSearchData(state,data){
    	state.searchData = data
    },
    changeDataPage(state,data){
    	state.dataPage = data
    },
    changeDataLimit(state,data){
    	state.dataLimit = data
    },
    changeVisibleSearch(state,data){
    	state.visibleSearch = data
    },
    changeConfigurationName(state,data){
    	state.configurationName = data
    },
    /*setToken(state, flag) {
			state.token = flag
			sessionStorage.setItem('token', flag)
		}*/
  }
})