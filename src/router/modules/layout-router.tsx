import { RouteObject } from 'react-router-dom'

import DefaultLayout from '@/layout'
import LazyLoad from '@/utils/lazyLoad'

const Home = LazyLoad(() => import('@/views/home'))
const About = LazyLoad(() => import('@/views/about'))

const AboutRouter: Array<RouteObject | any> = [
  {
    path: '/layout',
    title: 'layout',
    element: <DefaultLayout />,
    children: [
      {
        path: 'home',
        title: '首页',
        element: <Home />
      },
      {
        path: 'about',
        title: '关于我们',
        element: <About />
      }
    ]
  }
]

export default AboutRouter
