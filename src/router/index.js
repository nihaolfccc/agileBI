import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store' //vuex
Vue.use(Router)

const Layout = r => require(['@/pages/layout'], r)
const Login = r => require(['@/pages/user/login'], r)
const SearchReuslt = r => require(['@/pages/searchResult/index'], r)
const Chart = r => require(['@/pages/chart/chart'], r)
const ProduceReport = r => require(['@/pages/report/produceReport'], r)
const DataMatching = r => require(['@/pages/configuration/dataMatching'], r)
const DataClassify = r => require(['@/pages/dataClassify/dataClassify'], r)
const DataShow = r => require(['@/pages/configuration/dataShow'], r)
const DataAssociation = r => require(['@/pages/configuration/dataAssociation'], r)
const BusinessMatching = r => require(['@/pages/configuration/BusinessMatching'], r)
const TemplateMatching = r => require(['@/pages/configuration/templateMatching'], r)

const Collect = r => require(['@/pages/collect/collect'], r)
const Community = r => require(['@/pages/community/index'], r)
const DataMatchingList = r => require(['@/pages/configurationList/dataMatchingList'], r)
const Test = r => require(['@/pages/test/test'], r)

const router = new Router({
	// mode: 'history',
	routes: [{
		path: '/',
		component: Layout,
		children: [{
				path: 'test',
				name: 'test',
				component: Test
			}, {
				path: 'searchReuslt',
				name: 'searchReuslt',
				component: SearchReuslt
			}, {
				path: 'chart',
				name: 'chart',
				component: Chart
			}, {
				path: 'produceReport',
				name: 'produceReport',
				component: ProduceReport
			}, {
				path: 'dataMatching',
				name: 'dataMatching',
				component: DataMatching
			}, {
				path: 'dataClassify',
				name: 'dataClassify',
				component: DataClassify
			}, {
				path: 'dataShow',
				name: 'dataShow',
				component: DataShow
			}, {
				path: 'dataAssociation',
				name: 'dataAssociation',
				component: DataAssociation
			}, {
				path: 'businessMatching',
				name: 'businessMatching',
				component: BusinessMatching
			}, {
				path: 'templateMatching',
				name: 'templateMatching',
				component: TemplateMatching
			}, {
				path: 'collect',
				name: 'collect',
				component: Collect
			}, {
				path: 'community',
				name: 'community',
				component: Community
			}, {
				path: 'dataMatchingList',
				name: 'dataMatchingList',
				component: DataMatchingList
			},
			{
				path: '*',
				redirect: 'searchReuslt'
			}
		]
	}, {
		path: '/login',
		name: 'Login',
		component: Login
	}, {
		path: '*',
		redirect: '/searchReuslt'
	}]
})

/* 路由拦截器 */
router.beforeEach((to, from, next) => {
	//console.log(from, to)
	let app = router.app
	//console.log(app);
	//console.log(store, store.state.flagLeftBar)

	if(to.name != from.name) {
		store.commit('changeLeftBar', true)
		store.commit('changeCanvasWrap', false)
	}
	if(to.name != 'searchReuslt') {
		store.commit('changeSearchData', [])
		store.commit('changeListState')
		store.commit('changeSearchContent', "")
		app.search = ''
	}
	//控制头部搜索框与配置流程组件相互切换
	if(to.name == 'dataMatching' || to.name == 'dataClassify' || to.name == 'dataShow' || to.name == 'dataAssociation' || to.name == 'businessMatching' || to.name == 'templateMatching') {
		store.commit('changeVisibleSearch', false)
	} else {
		store.commit('changeVisibleSearch', true)
	}

	switch(to.name) {
		case 'searchReuslt':
			app.headNav = 0
			sessionStorage.setItem('headNav', 0)
			break;
		case 'collect':
			app.headNav = 2
			sessionStorage.setItem('headNav', 2)
			break;
		case 'community':
			app.headNav = 4
			sessionStorage.setItem('headNav', 4)
			break;
	}
	if(to.name == 'dataMatching' || to.name == 'dataClassify' || to.name == 'dataShow' || to.name == 'dataAssociation' || to.name == 'businessMatching' || to.name == 'templateMatching') {
		app.headNav = 1
		sessionStorage.setItem('headNav', 1)
		store.commit('changeConfigurationName', to.name)
		switch(to.name) {
			case 'dataMatching':
				app.configureActive = 0
				sessionStorage.setItem('configureActive', 0)
				break;
			case 'dataClassify':
				app.configureActive = 1
				sessionStorage.setItem('configureActive', 1)
				break;
			case 'dataShow':
				app.configureActive = 2
				sessionStorage.setItem('configureActive', 2)
				break;
			case 'dataAssociation':
				app.configureActive = 3
				sessionStorage.setItem('configureActive', 3)
				break;
			case 'businessMatching':
				app.configureActive = 4
				sessionStorage.setItem('configureActive', 4)
				break;
			case 'templateMatching':
				app.configureActive = 5
				sessionStorage.setItem('configureActive', 5)
				break;
		}
	} else {
		app.configureActive = -1
		sessionStorage.removeItem('configureActive')
	}

	next()
})

export default router