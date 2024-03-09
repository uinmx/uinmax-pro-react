import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const AboutRouter: Array<RouteObject | any> = [
  {
    path: '/about',
    element: lazy(() => import('@/views/about')),
    meta: {
      requiresAuth: false,
      title: '关于我们',
      key: 'about'
    }
  }
]

export default AboutRouter
