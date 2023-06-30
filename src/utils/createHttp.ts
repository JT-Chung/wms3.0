import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import Cookie from 'js-cookie'

declare interface _AxiosExtend {
  /**
   * 设置token
   * @param value token值
   * @param expires 过期时间
   * - 类型为 number 时，表示 expires 天后 token 过期
   * - 类型为 Date 时，表示在 expires 这个时间点 token 过期
   * @param name token 名称，默认为当前 http 实例的 xsrfCookieName 属性值
   */
  setAuthorization(value: string, expires: number | Date, name?: string): void

  /**
   * 移出token
   * @param name token 名称， 默认为当前 http 实例的 xsrfCookieName 属性值
   */
  removeAuthorization(name?: string): void

  /**
   * 校验 token 是否有效
   * @param name 需要校验的 token 名称，默认为当前 http 实例的 xsrfCookieName 属性值
   */
  checkAuthorization(name?: string): boolean
}

export interface HttpInstance extends AxiosInstance, _AxiosExtend {}

/**
 * 创建 axios http
 * @param config
 * @returns
 */
//todo 实例上新增toFormData方法?
function createAxiosHttp(config: AxiosRequestConfig) {
  const _axios = axios.create(config)
  return {
    ..._axios,
    setAuthorization(token: string, expires: number | Date, name?: string): void {
      Cookie.set(name ?? _axios.defaults.xsrfCookieName!, token, { expires })
    },
    removeAuthorization(name?: string): void {
      Cookie.remove(name ?? _axios.defaults.xsrfCookieName!)
    },
    checkAuthorization(name?: string | undefined): boolean {
      return Boolean(Cookie.get(name ?? _axios.defaults.xsrfCookieName!))
    },
  } as HttpInstance
}

export default createAxiosHttp
