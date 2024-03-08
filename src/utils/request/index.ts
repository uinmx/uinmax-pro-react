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
 * @name reduct_data_format 是否开启简洁的数据结构响应，默认为true
 * @name error_message_show 是否开启接口错误信息展示，默认为true
 * @name code_message_show 是否开启code不为0时的信息提示，默认为false
 */
interface CustomOptions {
  loading: boolean
  repeat_request_cancel: boolean
  reduct_data_format: boolean
  error_message_show: boolean
  code_message_show: boolean
}

/**
 * 初始化配置
 */
const initAxiosConfig = {
  baseURL: '',
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
      reduct_data_format: true,
      error_message_show: true,
      code_message_show: false
    },
    customOptions
  )

  // 请求拦截
  service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      removePending(config)
      custom_options.repeat_request_cancel && addPending(config)
      if (custom_options.loading) {
        openFullScreenLoading()
      }
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
    (response) => {
      removePending(response.config)
      custom_options.loading && closeFullScreenLoading()
      if (custom_options.code_message_show && response.data && response.data.code !== 0) {
        AntdMessage.error(response.data.message)
        return Promise.reject(response.data)
      }
      return custom_options.reduct_data_format ? response.data : response
    },
    (error: AxiosError) => {
      error.config && removePending(error.config)
      custom_options.loading && closeFullScreenLoading()
      custom_options.error_message_show && httpErrorStatusHandle(error)
      return Promise.reject(error)
    }
  )
  return service(axiosConfig)
}

export default RequestHttp
