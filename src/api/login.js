import request from '@/utils/request'

// 登录
export const login = (data) => {
  return request({
    url: '/user/login',
    method: 'get',
    params: data,
  })
}

// 获取用户信息
export const getUserInfo = (params) => {
  return request({
    url: '/user/userInfo',
    method: 'get',
    params,
  })
}
