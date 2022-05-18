import request from '@/utils/request'


// 登录
export const login = data => {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export const getUserInfo = data => {
  return request({
    url: '/user/userInfo',
    method: 'post',
    data
  })
}