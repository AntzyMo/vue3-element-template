import router from './router'
import { useUser } from '@/stores'
import NProgress from 'nprogress' // 进度条

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
      if (!routes.length) {
        // 获取用户信息
        await getUserInfo()

        // 获取路由
        // const routes = await getRoutes()

        // 路由添加进去了没有及时更新 需要重新进去一次拦截
        // if (hasRoles) {
        //   routes.forEach((item) => router.addRoute(item))
        //   hasRoles = false
        //   router.push({ ...to, replace: true })
        // }
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
