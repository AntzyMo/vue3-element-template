import { createRouter, createWebHistory } from 'vue-router'

/**
 * meta:{
 *  login      {Boolean} 是否需要登陆后才进页面
 *  pageActive {Number} 如果有写会出现底部导航栏
 *  noInfo     {Boolean} 为true 不显示footerInfo
 * }
 *
 */
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
