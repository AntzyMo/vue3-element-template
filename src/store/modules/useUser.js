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
  const hasPermission = item => {
    const { role } = item.meta
    const isString = typeof routes[0] === 'string'

    if (isString) {
      return routes.includes(role)
    } else {
      // 如果是对象的话 把需要的参数放到meta里面
      return routes.some(v => {
        item.meta = { ...item.meta, ...v }
        return v.access === role
      })
    }
  }

  const asyncRouter = asyncRouterMap.filter(item => {
    if (item.children?.length) {
      item.children = accessRouters(item.children, routes)
      return item
    } else {
      if (item.meta?.role) {
        if (hasPermission(item)) {
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
    // 可以删除 用于测试用例
    asyncRouteType: 1
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

    // 改变动态路由切换模式
    changeAsyncRouterType(type = 1) {
      this.asyncRouteType = type
      this.getRoutes()
    },

    /* 获取路由 */
    async getRoutes() {
      const { routes } = router.options

      const { routeList, type } = await getRoutes({ type: this.asyncRouteType })
      this.permission = routeList
      this.routesList = type == 3 ? routeList : accessRouters(routes, routeList)
      return { routes: routeList, type }
    },

    /* 退出登录 */
    logout() {
      removeStorage('token', 'userInfo')
      location.reload()
    }
  }
})
