import LazyLoad from '@/router/_utils/lazyLoad'

const Error403 = LazyLoad(() => import('@/views/system/exception/Erroe403'))
const Error404 = LazyLoad(() => import('@/views/system/exception/Erroe404'))
const Error500 = LazyLoad(() => import('@/views/system/exception/Erroe500'))

// 错误页面模块
const errorRouter: Array<any> = [
  {
    path: '/403',
    element: <Error403 />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/500',
    element: <Error500 />
  }
]

export default errorRouter
