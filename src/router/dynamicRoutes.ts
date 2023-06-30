import type { RouteOption, LazyRouteComponent } from './interface'
import type { RouteRecordRaw } from 'vue-router'
import { PermissionList } from '@/store'
import asyncRouterMap from './config/asyncRouter.json'
import Views from '@/views'
import { initUndefined } from '@/utils/helpers';


// 注册 BlankLayout, BasicLayout 组件
Views['BlankLayout'] = () => import('@/layouts/BlankLayout.vue')
Views['BasicLayout'] = () => import('@/layouts/BasicLayout.vue')

/**
 * 解析路由组件
 * @param component
 * @returns
 */
const parseComponent = (component: null | undefined | string | Record<string, string>) => {
  if (component === null || component === undefined) {
    return component
  }
  if (typeof component === 'string') {
    return Views[component]
  } else {
    return Object.entries(component).reduce((p, [key, val]) => {
      p[key] = Views[val]
      return p
    }, {} as Record<string, LazyRouteComponent>)
  }
}

/**
 * 解析路由
 * @param routes
 * @returns
 */
function parseRoutes(routes: RouteOption[]): RouteRecordRaw[] {
  return routes.map<RouteRecordRaw>((route) => {
    // 初始化meta
    route.meta = route.meta ?? {}
    initUndefined(route.meta, {
      cacheable: true,
      renderMenu: true,
    })
    // 解析组件 及 子路由
    const _route = {
      ...route,
      children: route.children && parseRoutes(route.children),
      component: route.component && parseComponent(route.component),
      components: route.components && parseComponent(route.components),
    } as any
    // 删除 undefined 属性
    Object.keys(_route).forEach((key) => {
      if (_route[key] === undefined) {
        delete _route[key]
      }
    })

    return _route
  })
}

/**
 * @function toRoutes
 * @param list 权限列表
 * @return RouteOption 过滤后的菜单配置项
 * */

function hasPermission(list: PermissionList, route: RouteOption) {
  if (route.meta && route.meta.permissions) {
    let flag = false
    for (let i = 0, len = list.length; i < len; i++) {
      flag = route.meta.permissions.includes(list[i])
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

function filterAsyncRouter(routerMap: RouteOption[], permissionList: PermissionList): RouteOption[] {
  const accessedRouters = routerMap.filter((route) => {
    if (hasPermission(permissionList, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children as RouteOption[], permissionList)
      }
      if (route.component) {
        route.component = `@/views/${route.meta.title?.split('.')[1]}/${route.name}/${route.component}.vue`
      }
      if (!route.component) {
        route.component = 'BlankLayout'
      }
      return true
    }
    return false
  })
  return accessedRouters
}

// 根级菜单
const rootRouter: RouteOption = {
  name: 'index',
  path: '/',
  component: 'BasicLayout',
  redirect: '/system/dict',
  meta: {
    title: '首页'
  },
  children: []
}

function deepClone(target: any) {
    function isObj(o:object) {
        return (typeof o === 'object' || typeof o === 'function') && o !== null;
    }
    if (isObj(target)) {
        let cloneTarget:any = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = deepClone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
}

function toRoutes(list: PermissionList): RouteOption {
  //todo 更换库函数
  const routerMap = deepClone(asyncRouterMap)
  const accessedRouters = filterAsyncRouter(routerMap, list)
  rootRouter.children = accessedRouters
  return rootRouter
}


/**
 * 添加路由
 * @param list
 */
function generateMenu(list: PermissionList): Promise<RouteRecordRaw[]> {
  return new Promise(resolve => {
    const routes = toRoutes(list)
    const routesRaw: RouteRecordRaw[] = parseRoutes([routes])
    resolve(routesRaw)
  })
}

export default generateMenu