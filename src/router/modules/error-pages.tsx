import React from 'react'

// 错误页面模块
const errorRouter: Array<any> = [
  {
    path: '/403',
    // element:  React.lazy(() => import("@/components/ErrorMessage/403")),
    meta: {
      requiresAuth: true,
      title: '403页面',
      key: '403'
    }
  },
  {
    path: '/404',
    element: React.lazy(() => import('@/layout/components/NoMatch')),
    meta: {
      requiresAuth: false,
      title: '404页面',
      key: '404'
    }
  },
  {
    path: '/500',
    // element: React.lazy(() => import("@/components/ErrorMessage/500")),
    meta: {
      requiresAuth: false,
      title: '500页面',
      key: '500'
    }
  }
]

export default errorRouter
