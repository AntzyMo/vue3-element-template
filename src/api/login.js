import request from '@/utils/request'

// 登录
export const login = (data) => {
  return request({
    url: '/user/login',
    method: 'post',
    loading: true,
    data,
  })
}

// 获取用户信息
export const getUserInfo = (data) => {
  return request({
    url: '/user/userInfo',
    method: 'post',
    data,
  })
}

// 获取用户信息
export const getRoutes = (data) => {
  return request({
    url: '/user/routes',
    method: 'post',
    data,
  })
}

// 获取用户信息
export const modofyRoutes = (data) => {
  return request({
    url: '/user/modifyroutes',
    method: 'post',
    data,
  })
}
