import http from '@/api'
import type { LoginForm } from '@/types'

enum UserApi {
  Authorize = '/oauth/token',
  Permissions = 'api/permissions/',
}

function authorize(params: LoginForm) {
  return http.post(
    UserApi.Authorize,
    params
  )
}

function getPermissionsByUid(uid: string | number) {
  return http.get(
    UserApi.Permissions + uid
  )
}

export { authorize, getPermissionsByUid }
