import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export { storeToRefs } from 'pinia'
export * from './modules/user'
export * from './modules/app'
export * from './modules/form'
export * from './modules/menu'

const pinia = createPinia()
//注册插件
pinia.use(
  createPersistedState({
    storage: sessionStorage
  })
)

export default pinia
