export const success = (data) => {
  return {
    code: 200,
    msg: 'success',
    data,
  }
}

export const error = (msg) => {
  return {
    code: 504,
    msg,
    data: null,
  }
}

export const getRouteList = (type = 1) => {
  const data = [
    ['page1', 'page2', 'page4'],
    [
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
    ],
    [
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
    ],
  ]

  return data[type - 1]
}
