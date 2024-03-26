import React from 'react'
import type { MenuProps } from 'antd'
import type { RouteObject } from 'react-router-dom'
import { Navigate, useRoutes } from 'react-router-dom'

import LazyLoad from '@/utils/lazyLoad'

const Welcome = LazyLoad(() => import('@/views/welcome'))

export type CustomRouterParamsTypes = {
  meta: {
    title?: React.ReactNode
    key?: React.Key | null
    icon?: React.ReactNode
    children?: CustomRouterParamsTypes[]
    type?: 'group'
  }
} & MenuProps &
  RouteObject

/**
 * 导入所有路由模块
 */
const moduleRouterFiles = import.meta.glob('./modules/*.tsx', { eager: true })

/**
 * DynamicRouter 动态路由
 * @description 模块化配置合并
 */
const moduleRoutes: RouteObject[] = Object.values(moduleRouterFiles)
  .map((module: any) => module.default)
  .flat()

/**
 * RootRouter 公共路由
 * @description 自定义公共路由配置
 * @param / 默认路由
 * @param * 重定向
 */
export const RootRouter: Array<RouteObject | CustomRouterParamsTypes> = [
  {
    path: '/',
    element: <Welcome />,
    meta: {
      title: '欢迎',
      key: 'welcome',
      icon: 'SmileOutlined',
      type: 'group'
    }
  },
  ...moduleRoutes,
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]

export default () => useRoutes(RootRouter)
