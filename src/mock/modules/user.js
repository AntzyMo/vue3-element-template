import { Random } from 'mockjs'
import qs from 'qs'
import { success, error, getToken } from '../utils'

export default [
  {
    url: '/mock/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = qs.parse(body)
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
    method: 'post',
    response: (body) => {
      return success({
        name: 'Zbano',
      })
    },
  },

  {
    url: '/mock/user/routes',
    method: 'post',
    response: () => {
      return success({
        routesList: ['首页', 'page1', 'page2', 'page3', 'page4'],
      })
    },
  },
]
