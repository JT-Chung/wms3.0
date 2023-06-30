import type { Router } from 'vue-router'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import guards from './guards'

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

// 定义一个resetRouter 方法，在退出登录后或token过期后调用
export function resetRouter () {
  const newRouter: Router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  router.resolve = newRouter.resolve
}

// 注册导航守卫
router.beforeEach(guards.loginGuard)
router.afterEach(guards.afterGuard)

export default router
