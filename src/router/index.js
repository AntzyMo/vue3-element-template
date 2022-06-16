import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

/**
 * meta:{
 *  title      {String}  标题
 *  hidden     {Boolean}  不显示在侧边栏
 *  pageActive {Number} 如果有写会出现底部导航栏
 *  noInfo     {Boolean} 为true 不显示footerInfo
 *  role       {String}   路由权限(只能写在children里面)
 * }
 *
 */

const asyncRouter = [
  {
    path: '/page',
    name: 'page',
    component: Layout,
    meta: { title: 'page' }, // 侧边栏显示的名称
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: () => import('@/views/page/page1.vue'),
        meta: { title: 'page1', role: 'page1' }
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import('@/views/page/page2.vue'),
        meta: { title: 'page2', role: 'page2' }
      }
    ]
  },

  {
    path: '/page1',
    name: 'page12',
    component: Layout,
    meta: { title: 'page1' },
    children: [
      {
        path: 'page3',
        name: 'page3',
        component: () => import('@/views/page1/page1.vue'),
        meta: { title: 'page3', role: 'page3' }
      },
      {
        path: 'page4',
        name: 'page4',
        component: () => import('@/views/page1/page2.vue'),
        meta: { title: 'page4', role: 'page4' }
      }
    ]
  }
]

const routes = [
  {
    path: '/login',
    meta: { hidden: true },
    component: () => import('@/views/login/index.vue')
  },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' }
      }
    ]
  },

  {
    path: '/404',
    component: () => import('@/views/errorPage/404.vue'),
    meta: { hidden: true }
  },

  ...asyncRouter
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
