import LazyLoad from '@/utils/lazyLoad'

const Error403 = LazyLoad(() => import('@/layout/components/NoMatch'))
const Error404 = LazyLoad(() => import('@/layout/components/NoMatch'))
const Error500 = LazyLoad(() => import('@/layout/components/NoMatch'))

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
