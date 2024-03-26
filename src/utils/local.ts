/**
 * 获取本地存储
 * get localStorage
 * @param { string } key
 */
export function getLocalStorage(key: string) {
  if (!key) throw new Error('not found key')
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}

/**
 * 设置本地存储
 * set localStorage
 * @param { string } key
 * @param value
 */
export function setLocalStorage(key: string, value: unknown) {
  if (!key) throw new Error('not found key')
  if (!value) return
  return localStorage.setItem(key, JSON.stringify(value))
}

/**
 * 删除本地存储
 * remove localStorage
 * @param { string } key
 */
export function removeLocal(key: string) {
  if (!key) throw new Error('not found key')
  return localStorage.removeItem(key)
}

/**
 * 清空本地存储
 * clear localStorage
 */
export function clearLocal() {
  return localStorage.clear()
}
