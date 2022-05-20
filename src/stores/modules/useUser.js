import { defineStore } from 'pinia'
import { getStorage, setStorage, removeStorage } from '@/hooks'
import { login, getUserInfo, getRoutes } from '@/api/login'
import { localRoutes } from '@/router'

const mergeRoutes = (routes) => {
  routes.forEach((item) => {})
}

export default defineStore({
  id: 'user',
  state: () => ({
    token: getStorage('token'),
    userInfo: getStorage('userInfo') || {},
    routes: [],
  }),
  actions: {
    /* 登录 */
    async login(form) {
      try {
        const { token } = await login(form)
        this.token = token
        setStorage('token', token)
      } catch (err) {
        return Promise.reject(err)
      }
    },

    /* 获取用户信息 */
    async getUserInfo() {
      try {
        const data = await getUserInfo({ token: this.token })
        this.userInfo = data
        setStorage('userInfo', data)
      } catch (err) {
        return Promise.reject(err)
      }
    },

    /* 获取路由 */
    async getRoutes() {
      const route = await getRoutes()
      console.log(route, 'route')
      mergeRoutes(route)
    },

    /* 退出登录 */
    logout() {
      removeStorage('token', 'userInfo')
      location.reload()
    },
  },
})
