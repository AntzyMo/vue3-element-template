import axios from 'axios'
import qs from 'qs'
// import { Toast } from 'vant';

// 创建一个axios实例
const service = axios.create({
  baseURL: '/api',
  timeout: 30000,
  transformRequest: [(data) => qs.stringify(data)],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
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
    loading(false)
    const {
      data,
      config: { url },
    } = res
    const code = data?.globalErrorCode
    const isUerInfoUrl = url.includes('person/userInfo.ujson')

    if (code) {
      if (code == 3) {
        // 有个接口获取用户信息 不需要跳登录页面
        if (isUerInfoUrl && data.success) return
      }

      if (!isUerInfoUrl) Toast(data.msg)
      return Promise.reject({ code, msg: data.msg })
    }

    return data
  },
  (err) => {
    loading(false)
    return Promise.reject(err)
  }
)

export default service
