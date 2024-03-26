import request from '@/utils/request'

// 查询测试单表列表
export function listDemo(query?: any) {
  return request({
    url: 'http://jsonplaceholder.typicode.com/posts',
    method: 'get',
    params: query
  })
}
