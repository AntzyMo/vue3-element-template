import { Random } from 'mockjs'
import qs from 'qs'
import { success, error } from '../utils'

const getRouteList = (type = 1) => {
  let routeList = []
  switch (type * 1) {
    case 1:
      // 第一种
      routeList = ['page1', 'page2', 'page4']
      break

    case 2:
      // 第二种 路由加参数
      routeList = [
        {
          access: 'page1',
          title: '页面1',
          type: 0,
        },
        {
          access: 'page2',
          title: '页面2',
          type: 1,
        },
        {
          access: 'page3',
          title: '页面3',
          type: 2,
        },
        {
          access: 'page4',
          title: '页面4',
          type: 3,
        },
      ]

      break

    case 3:
      // 第三种 返回路由表
      routeList = [
        {
          path: '/',
          component: 'Layout',
          redirect: '/index',
          children: [
            {
              path: 'index',
              name: 'index',
              component: 'login',
              meta: { title: '首页' },
            },
          ],
        },
        {
          path: '/page',
          name: 'page',
          component: 'Layout',
          meta: { title: 'page' }, // 侧边栏显示的名称
          children: [
            {
              path: 'page1',
              name: 'page1',
              component: '@/views/page/page1.vue',
              meta: { title: 'page1', role: 'page1' },
            },
            {
              path: 'page2',
              name: 'page2',
              component: '@/views/page/page1.vue',
              meta: { title: 'page2', role: 'page2' },
            },
          ],
        },

        {
          path: '/page1',
          name: 'page12',
          component: 'Layout',
          meta: { title: 'page1' },
          children: [
            // {
            //   path: 'page3',
            //   name: 'page3',
            //   component: '@/views/page/page1.vue',
            //   meta: { title: 'page3', role: 'page3' },
            // },
            {
              path: 'page4',
              name: 'page4',
              component: '@/views/page/page1.vue',
              meta: { title: 'page4', role: 'page4' },
            },
          ],
        },
        {
          path: '/404',
          name: 'page12',
          meta: { hidden: true },
          component: 'Layout',
        },
      ]
      break
  }
  return routeList
}

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
    response: ({ body }) => {
      const { type } = qs.parse(body)
      return success({
        routeList: getRouteList(type),
        type,
      })
    },
  },

  {
    url: '/mock/user/modifyroutes',
    method: 'post',
    response: ({ body }) => {
      const { type } = qs.parse(body)
      console.log(type * 1, 'type')
      if (type * 1) {
        routeList.push('page3')
      } else {
        const idx = routeList.indexOf('page3')
        routeList.splice(idx, 1)
        console.log(routeList, 'routeList')
      }
      return success()
    },
  },
]
