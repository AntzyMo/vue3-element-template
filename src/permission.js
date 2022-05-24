import router from './router'
import { useUser } from '@/stores'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })
// 白名单(不需要登录就可以访问的名单)
const whiteList = ['/login']

router.beforeEach(async (to) => {
  const { token, routes, getUserInfo, getRoutes } = useUser()

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
      const routes = await getRoutes()
      if (to.meta?.role) {
        if (!routes.includes(to.meta.role)) {
          return false
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
