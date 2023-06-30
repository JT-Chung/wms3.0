import type { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia'
import { useUserStore } from '@/store'
import { ref } from 'vue'
import generateMenu from '@/router/dynamicRoutes'

export const useMenuStore = defineStore('menu', () => {
  const loading = ref(false)
  const menuList = ref<RouteRecordRaw[]>([])

  function getMenuList() {
    loading.value = true
    const userStore = useUserStore()
    return userStore.getInfo()
      .then(async list => {
        const routesRaw = await generateMenu(list)
        menuList.value = routesRaw
        return routesRaw
      })
      .catch(() => [])
      .finally(() => (loading.value = false))
  }

  return {
    getMenuList,
    menuList,
  }
}
)
