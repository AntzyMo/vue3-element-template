import { Random } from 'mockjs'
import qs from 'qs'
import { success, error, getToken } from '../utils'

export default [
  {
    url: '/mock/user/login',
    method: 'get',
    response: ({ query }) => {
      const { username, password } = query
      if (username === 'admin' && password === '123456') {
        return success({
          token: Random.guid(),
        })
      }
      return error('账号密码错误')
    },
  },

  {
    url: '/mock/user/userInfo',
    method: 'get',
    response: ({ body }) => {
      return success({
        name: 'Zbano',
      })
    },
  },

  {
    url: '/mock/user/routes',
    method: 'get',
    response: () => {
      return success({
        routesList: ['首页', 'page1', 'page2', 'page3', 'page4'],
      })
    },
  },
]
