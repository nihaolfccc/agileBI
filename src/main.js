// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import html2canvas from 'html2canvas';
import echarts from 'echarts'
import 'babel-polyfill'
import App from './App'
import router from './router'
import store from './store/store' //vuex
import VueLazyload from 'vue-lazyload'
import errImg from './assets/imgs/placeholder_blue.png'
import loadingImg from './assets/imgs/loading.gif'

// 滚动条
//import elementResizeDetectorMaker from 'element-resize-detector'
import HappyScroll from 'vue-happy-scroll'
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'
Vue.use(HappyScroll)

//元素拖拽
import VueDraggableResizable from 'vue-draggable-resizable'
Vue.component('vue-draggable-resizable', VueDraggableResizable)

//元素拖拽到不同的地方
import VueDraggable from 'vuedraggable'
Vue.component('vuedraggable', VueDraggable)

//通用样式
import './assets/css/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.scss'

// echarts 主题注册
import themeRed from '@/components/charts/theme/theme-red'
import themeGreen from '@/components/charts/theme/theme-green'
import themeBlue from '@/components/charts/theme/theme-blue'
echarts.registerTheme('red', themeRed)
echarts.registerTheme('green', themeGreen)
echarts.registerTheme('blue', themeBlue)
Vue.prototype.$echarts = echarts
Vue.prototype.$h2c = html2canvas
Vue.use(ElementUI);
//console.log(store.state.themeColor)
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: errImg,
	loading: loadingImg,
	attempt: 2
})

Vue.config.productionTip = false
/*自定义指令*/
Vue.directive('focus', {
	inserted(el, binding) { //el为原生元素
		el.focus()
	}
})
Vue.directive('setfocus', {
	update(el, binding, vnode, oldVnode) {
		if(binding.value) {
			el.focus()
		}
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	data() {
		return {
			headNav: sessionStorage.getItem('headNav') ?
				JSON.parse(sessionStorage.getItem('headNav')) :
				0,
			configureActive: sessionStorage.getItem('configureActive') ?
				JSON.parse(sessionStorage.getItem('configureActive')) :
				-1,
			skinActive: localStorage.getItem('skinActive') ?
				JSON.parse(localStorage.getItem('skinActive')) :
				1,
			search: '',
			dialogExportSet: false, //导出设置对话框
		}
	},
	watch: {
		
	},
	components: {
		App
	},
	template: '<App/>'
})