import axios, { Canceler, InternalAxiosRequestConfig } from 'axios'

/**
 * 接口处理记录
 */
const pendingMap: Map<string, Canceler> = new Map()

/**
 * 添加记录接口
 * @param config
 */
export function addPending(config: InternalAxiosRequestConfig) {
  const pendingKey = getPendingKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel)
      }
    })
}

/**
 * 移除接口
 * @param config
 */
export function removePending(config: InternalAxiosRequestConfig) {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancel = pendingMap.get(pendingKey)
    cancel && cancel(pendingKey)
    pendingMap.delete(pendingKey)
  }
}

/**
 * 通过接口请求信息生成唯一的key
 * @param config
 */
export function getPendingKey(config: InternalAxiosRequestConfig) {
  // eslint-disable-next-line prefer-const
  let { url, method, params, data } = config
  if (typeof data === 'string') data = JSON.parse(data)
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
}
