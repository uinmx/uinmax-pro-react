import { RouteObject } from 'react-router-dom'

import DefaultLayout from '@/layout'
import LazyLoad from '@/utils/lazyLoad'

const Home = LazyLoad(() => import('@/views/home'))
const About = LazyLoad(() => import('@/views/about'))

const AboutRouter: Array<RouteObject | any> = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]

export default AboutRouter
