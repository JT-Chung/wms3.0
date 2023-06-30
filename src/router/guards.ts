import type { NavigationGuard, NavigationHookAfter } from 'vue-router'
import http from '@/api'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '.'
import { useMenuStore, useUserStore } from '@/store'
import { resetRouter } from './index'

NProgress.configure({ showSpinner: false })

enum Path {
  LoginRoutePath = '/user/login',
  DefaultRoutePath = '/system/dict'
}

const loginGuard: NavigationGuard = function (to, from, next) {
  NProgress.start()
  if (http.checkAuthorization()) {
    if (to.path === Path.LoginRoutePath) {
      next({ path: Path.DefaultRoutePath })
      NProgress.done()
    } else {
      const menuStore = useMenuStore()
      if (menuStore.menuList.length === 0) {
        menuStore.getMenuList()
          .then(routesRaw => {
            resetRouter() //
            routesRaw.forEach(r => {
              router.addRoute(r)
            })
            // 请求带有 redirect 重定向时，登录自动重定向到该地址
            const redirect = decodeURIComponent(from.query.redirect as string || to.path)
            if (to.path === redirect) {
              // set the replace: true so the navigation will not leave a history record
              next({ ...to, replace: true })
            } else {
              // 跳转到目的路由
              next({ path: redirect })
            }
          })
          .catch(error => {
            console.log(error, '--------loginGuard-error-------')
            //跳转登录页
            useUserStore().logout()
              .then(() => {
                next({ path: Path.LoginRoutePath, query: { redirect: to.fullPath } })
              })        
          })
      } else {
        next()
      }
    }
  } else {
    if (!/^\/user\/(login)?$/.test(to.fullPath)) {
      next({path: Path.LoginRoutePath})
    }
    next()
    NProgress.done()
  }
}

const afterGuard: NavigationHookAfter = function () {
  NProgress.done()
}
export default {
  loginGuard,
  afterGuard
}
