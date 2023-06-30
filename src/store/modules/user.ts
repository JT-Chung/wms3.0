import type { LoginForm } from '@/types'
import { defineStore } from 'pinia'
import router from '@/router'
import http from '@/api'
import { authorize,getPermissionsByUid } from '@/api/login'

export interface Identity {
  accessToken: string
  username: string
  uid: string | number
  expires: number
}

export type PermissionList = string[]

export const useUserStore = defineStore('user', {
  persist: true,
  state: () => ({
    identity: {} as Identity,
    permissionList: [] as PermissionList,
    logged: false,
  }),
  actions: {
    login(params: LoginForm) {
      return authorize(params).then((authorized) => {
        if (authorized.data.error) return Promise.reject('login failed')
        const identity: Identity = {
          accessToken: authorized.data.accessToken,
          username: authorized.data.username,
          uid: authorized.data.uid,
          expires: 7, //todo 后台支持
        }
        this.identity = identity
        http.setAuthorization(`Bearer ${identity.accessToken}`, identity.expires)
        this.logged = true
        return authorized
      })
    },
    getInfo() {
      return getPermissionsByUid(this.identity.uid).then(list => {
        if (list instanceof Array && list.length > 0) {
          this.permissionList = list as PermissionList
          return (list as unknown) as PermissionList
        }
        return Promise.reject('permission does not exist')
        })
    },
    logout() {
      return new Promise<void>((resolve) => {
        http.removeAuthorization()
        this.$reset()
        router.push('/')
        //todo 后台添加登出API
        resolve()
      })
    },
  },
})
