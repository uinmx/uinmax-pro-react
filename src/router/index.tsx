import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import DefaultLayout from '@/layout'

const Home = lazy(() => import('@/views/Home'))

const modulesRoutersArr = import.meta.glob('./modules/*.tsx')

/**
 * RootRouter 公共路由
 * @description 自定义公共路由配置
 * @param / 默认布局
 * @param * 重定向
 */
const RootRouter: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]

/**
 * DynamicRouter 动态路由
 * @description 模块化配置合并
 */
export const DynamicRouter = async () => {
  if (!modulesRoutersArr) return

  const moduleRoutes: RouteObject[] = await Promise.all(
    Object.values(modulesRoutersArr).map(async (module) => {
      const moduleFile = await module()

      if (moduleFile && moduleFile.default) {
        return moduleFile.default
      }
    })
  )

  const res = [...moduleRoutes.flat()]
  RootRouter.push(...moduleRoutes.flat())

  return res
}

const EnhancedRouter = () => useRoutes(RootRouter)

export default EnhancedRouter
