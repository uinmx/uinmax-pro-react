import { message as AntdMessage } from 'antd'
import axios from 'axios'

/**
 * @name 接口异常,提示交互
 * @param error
 */
export function httpErrorStatusHandle(error: any) {
  if (axios.isCancel(error)) return console.error('请求的重复请求：' + error.message)
  let messageString = ''
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        messageString = '接口重定向了！'
        break
      case 400:
        messageString = '参数不正确！'
        break
      case 401:
        messageString = '未登录，或者登录已经超时，请先登录！'
        break
      case 403:
        messageString = '没有权限操作！'
        break
      case 404:
        messageString = `请求地址出错: ${error.response.config.url}`
        break
      case 408:
        messageString = '请求超时！'
        break
      case 409:
        messageString = '系统已存在相同数据！'
        break
      case 500:
        messageString = '服务器内部错误！'
        break
      case 501:
        messageString = '服务未实现！'
        break
      case 502:
        messageString = '网关错误！'
        break
      case 503:
        messageString = '服务不可用！'
        break
      case 504:
        messageString = '服务暂时无法访问，请稍后再试！'
        break
      case 505:
        messageString = 'HTTP版本不受支持！'
        break
      default:
        messageString = '异常问题，请联系管理员！'
        break
    }
  }
  if (error.message.includes('timeout')) messageString = '网络请求超时！'
  if (error.message.includes('Network')) {
    messageString = window.navigator.onLine ? '服务端异常！' : '您断网了！'
  }
  AntdMessage.error(messageString)
}
