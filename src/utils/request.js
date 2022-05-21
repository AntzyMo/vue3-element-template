import axios from 'axios'
import qs from 'qs'
// import { Toast } from 'vant';

// 创建一个axios实例
const service = axios.create({
  baseURL: import.meta.env.DEV? '/mock':'/vue3-element-template/mock',
  timeout: 30000,
  transformRequest: [(data) => qs.stringify(data)],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

// 设置请求拦截
service.interceptors.request.use(
  (config) => {
    if (config?.loading) {
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 设置响应拦截
service.interceptors.response.use(
  (res) => {
    console.log(res, 'res.data')
    const { code, data, msg } = res.data
    console.log(code, 'de')
    if (code == 200) {
      return data
    } else {
      return Promise.reject(msg)
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default service
