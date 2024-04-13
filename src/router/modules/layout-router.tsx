import { RouteObject } from 'react-router-dom'

import DefaultLayout from '@/layout'
import LazyLoad from '@/router/_utils/lazyLoad'

const Home = LazyLoad(() => import('@/views/system/home'))
const About = LazyLoad(() => import('@/views/system/about'))

const AboutRouter: Array<RouteObject | any> = [
  {
    path: '/',
    element: <DefaultLayout />,
    meta: {
      title: 'layout',
      icon: 'BarsOutlined',
      type: 'group'
    },
    children: [
      {
        path: '',
        element: <Home />,
        meta: {
          title: '首页',
          key: 'home',
          icon: 'HomeOutlined'
        }
      },
      {
        path: 'about',
        element: <About />,
        meta: {
          title: '关于我们',
          key: 'about',
          icon: 'BlockOutlined'
        }
      }
    ]
  }
]

export default AboutRouter
