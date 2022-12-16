import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 3000
})

// 请求拦截
service.interceptors.request.use(function (config) {
  // 请求发送前
  return config
}, function (error) {
  // 请求错误时
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发
  return Promise.reject(error)
})

export default service
