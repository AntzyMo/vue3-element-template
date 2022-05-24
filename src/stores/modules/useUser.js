import { defineStore } from 'pinia'
import { getStorage, setStorage, removeStorage } from '@/hooks'
import { login, getUserInfo, getRoutes } from '@/api/login'
import router from '@/router'

/**
 *
 * @param {*} asyncRouterMap 前端路由表
 * @returns  处理好的动态路由
 */
const accessRouters = (asyncRouterMap, routes) => {
  /* 判断是否有权限 */
  const hasPermission = (role) => routes?.includes(role)
  const asyncRouter = asyncRouterMap.filter((item) => {
    if (item.children?.length) {
      item.children = accessRouters(item.children, routes)
      return item
    } else {
      if (item.meta.role) {
        if (hasPermission(item.meta?.role)) {
          return item
        }
        return false
      }
      return true
    }
  })

  return asyncRouter
}

export default defineStore({
  id: 'user',
  state: () => ({
    token: getStorage('token') || '',
    userInfo: getStorage('userInfo') || {},
    permission: [],
    routesList: [],
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
      const { routes } = router.options
      const { routeList } = await getRoutes()
      this.permission = routeList
      this.routesList = accessRouters(routes, routeList)
      return routeList
    },

    /* 退出登录 */
    logout() {
      removeStorage('token', 'userInfo')
      location.reload()
    },
  },
})
