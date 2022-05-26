import router from './router'
import { useUser } from '@/stores'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'

// 返回的是前端路由表的数据 判断有没有权限
const hasRoute = (asyncRouter, route) => {
  for (let item of asyncRouter) {
    if (item.children?.length) {
      if (hasRoute(item.children, route)) return true
    }
    const pathMap = item.path.split('/')
    const path = pathMap[pathMap.length - 1]
    if (path === route) return true
  }
}

NProgress.configure({ showSpinner: false })
// 白名单(不需要登录就可以访问的名单)
const whiteList = ['/login']

router.beforeEach(async (to) => {
  const { token, getUserInfo, getRoutes } = useUser()

  // 进度条开始
  NProgress.start()

  if (token) {
    // 如果有token
    if (to.path === '/login') {
      // 如果是登录状态 并且进入的页面是登录页面 则跳到首页
      router.push({ path: '/' })
      NProgress.done()
    } else {
      // 获取用户信息
      await getUserInfo()

      // 获取路由权限
      const { routes, type } = await getRoutes()

      if (type == 3) {
        const hrefMap = to.path.split('/')
        const path = hrefMap[hrefMap.length - 1]

        // 路由没有权限重定向到404
        if (!hasRoute(routes, path)) {
          router.replace({ path: '/404' })
        }
      } else {
        const hasRoute = () => {
          if (type == 1) {
            return !routes.includes(to.meta.role)
          } else {
            return !routes.some((item) => item.access == to.meta.role)
          }
        }
        if (to.meta?.role) {
          if (hasRoute()) {
            /**
             * return false
             * hash 模式会自动重置到 from 路由
             * history 模式会出现白屏 地址栏会发起请求
             * 要么手动去到404 要么配置ng
             */
            router.replace({ path: '/404' })
            return false
          }
        }
      }
    }
  } else {
    if (!whiteList.includes(to.path)) {
      router.push({ path: '/login' })
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
