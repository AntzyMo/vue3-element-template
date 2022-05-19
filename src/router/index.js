import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

/**
 * meta:{
 *  title      {String}  标题
 *  hidden     {Boolean}  不显示在侧边栏
 *  login      {Boolean} 是否需要登陆后才进页面
 *  pageActive {Number} 如果有写会出现底部导航栏
 *  noInfo     {Boolean} 为true 不显示footerInfo
 * }
 *
 */

export const localRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },

  {
    path: '/page',
    component: Layout,
    meta: { title: 'page' },
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: () => import('@/views/page1/page1.vue'),
        meta: { title: 'page1' },
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import('@/views/page1/page2.vue'),
        meta: { title: 'page2' },
      },
    ],
  },
]

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { hidden: true },
    component: () => import('@/views/login/index.vue'),
  },
  ...localRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
