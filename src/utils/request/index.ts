import { message as AntdMessage } from 'antd'
import axios from 'axios'
import type { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'

import { addPending, removePending } from './canceler'
import { httpErrorStatusHandle } from './error-prompt'
import { closeFullScreenLoading, openFullScreenLoading } from '@/components'
import { getToken } from '@/utils/auth'

/**
 * 自定义配置
 * @name loading 是否开启loading层效果，默认为false
 * @name repeat_request_cancel 是否开启取消重复请求，默认为 true
 * @name error_message_show 是否开启接口错误信息展示，默认为true
 */
interface CustomOptions {
  loading: boolean
  repeat_request_cancel: boolean
  error_message_show: boolean
}

/**
 * 初始化配置
 */
const baseURL = import.meta.env.VITE_APP_BASE_API
const initAxiosConfig = {
  baseURL: baseURL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
}

/**
 * axios 二次封装
 * @name RequestHttp
 */
export function RequestHttp(
  axiosConfig: AxiosRequestConfig,
  customOptions?: Partial<CustomOptions>
) {
  const service = axios.create(initAxiosConfig)

  // 自定义配置
  const custom_options: CustomOptions = Object.assign(
    {
      loading: false,
      repeat_request_cancel: true,
      error_message_show: true
    },
    customOptions
  )

  // 请求拦截
  service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // * 将当前请求添加到 pending 中
      custom_options.repeat_request_cancel && addPending(config)
      custom_options.loading && openFullScreenLoading()

      // * Token处理逻辑
      if (getToken() && typeof window !== 'undefined') {
        config.headers.Authorization = getToken()
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // 响应拦截
  service.interceptors.response.use(
    (res) => {
      const { data, config } = res

      //* 在请求结束后，移除本次请求(关闭loading)
      removePending(config)
      custom_options.loading && closeFullScreenLoading()

      //* 全局错误信息拦截
      if (data.code && data.code !== 200) {
        AntdMessage.error(data.message)
        return Promise.reject(data)
      }

      return data
    },
    (error: AxiosError) => {
      const { config } = error

      config && removePending(config)
      custom_options.loading && closeFullScreenLoading()

      //* 错误处理提示
      custom_options.error_message_show && httpErrorStatusHandle(error)
      return Promise.reject(error)
    }
  )
  return service(axiosConfig)
}

export default RequestHttp
