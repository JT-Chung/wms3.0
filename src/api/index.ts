import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import createHttpInstance from '@/utils/createHttp'
import NProgress from 'nprogress'

const http = createHttpInstance({
  timeout: 10000,
  baseURL: '/http',
  withCredentials: true,
  xsrfCookieName: 'Authorization',
  xsrfHeaderName: 'Authorization',
})

const isAxiosResponse = (obj: any): obj is AxiosResponse => {
  return typeof obj === 'object' && obj.status && obj.statusText && obj.headers && obj.config
}

// progress 进度条 -- 开启
http.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
  return req
})

// 解析响应结果
http.interceptors.response.use(
  (rep: AxiosResponse) => {
    const { data } = rep
    return data
  },
  (error) => {
    if (error.response && isAxiosResponse(error.response)) {
      return Promise.reject({
        message: error.response.statusText,
        code: error.response.status,
        data: error.response.data,
      })
    }
    return Promise.reject(error)
  }
)

// progress 进度条 -- 关闭
http.interceptors.response.use(
  (rep) => {
    if (NProgress.isStarted()) {
      NProgress.done()
    }
    return rep
  },
  (error) => {
    if (NProgress.isStarted()) {
      NProgress.done()
    }
    return error
  }
)

export default http
