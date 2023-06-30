import { RouteRecordRaw } from 'vue-router'
const constantRouterMap: RouteRecordRaw[] = [
  {
    path: '/user/',
    name: 'user',
    redirect: '/user/login',
    meta: {
      title: 'user.title',
      renderMenu: false,
      cacheable: false,
    },
    component: () => import('@/layouts/UserLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          renderMenu: false,
          cacheable: false,
        },
        component: () => import('@/views/user/Login.vue'),
      },
    ],
  },
  {
    path: '/403',
    name: '403',
    props: true,
    meta: {
      renderMenu: false,
    },
    component: () => import('@/views/Exp403.vue'),
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: '404',
  //   props: true,
  //   meta: {
  //     icon: 'CreditCardOutlined',
  //     renderMenu: false,
  //     cacheable: false,
  //     _is404Page: true,
  //   },
  //   component: () => import('@/views/Exp404.vue'),
  // },
]

export default constantRouterMap
