import Cookies from 'js-cookie'

/**
 * 自定义kye
 * @param {string} TokenKey
 * @param {string} ExpiresInKey
 */
const TokenKey = 'Auth-Token'
const ExpiresInKey = 'Auth-Expires-In'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getExpiresIn() {
  return Cookies.get(ExpiresInKey) || -1
}

export function setExpiresIn(time: string) {
  return Cookies.set(ExpiresInKey, time)
}

export function removeExpiresIn() {
  return Cookies.remove(ExpiresInKey)
}
