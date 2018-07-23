import axios from "axios"
import qs from 'qs'
import {handleChinese, BIloading, BIMsg} from '@/assets/js/tools'
const instance = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
});
// 请求拦截器
instance
  .interceptors
  .request
  .use((config) => {
    config.showLoading == 'show' && BIloading.show()
    if (config.method === 'post') {
      config.headers['Content-Type'] = "application/json; charset=UTF-8";
      return config
    }
    if (config.method === 'get') {
      let params = handleChinese(config.params)
      config.url += '?' + qs.stringify(params, {encode: false})
      config.params = {}
      return config
    }
  }, (error) => {
    return Promise.reject(error)
  })
// 添加响应拦截器
instance
  .interceptors
  .response
  .use((response) => {
    response.config.showLoading == 'show' && BIloading.hidde()
    return response
  }, (err) => {
    BIloading.hidde()
    BIMsg({message: err.message, duration: 5000})
    return Promise.reject(err)
  })
// const baseURL =
// 'http://result.eolinker.com/iVIr4fC272115010e4d0a068682e9062d710646df270663?ur i='; //eolinker 测试
 const baseURL = 'http://192.168.4.10:8888'; //后端 测试 数据源
// const baseURL = "http://172.16.113.207:8888" //后端测试  首页

const xhr = {
  post(config) {
    return new Promise((resolve, reject) => {
      instance
        .post(`${baseURL}${config.url}`, config.params, {
        showLoading: config.showLoading || 'show'
      })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  },
  get(config) {
    return new Promise((resolve, reject) => {
      instance
        .get(`${baseURL}${config.url}`, {
        params: config.params,
        showLoading: config.showLoading || 'show'
      })
        .then((res => resolve(res.data)))
        .catch(err => reject(err))
    })
  }
}
export default xhr