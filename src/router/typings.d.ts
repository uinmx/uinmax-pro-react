import React from 'react'
import { MenuProps } from 'antd'
import { RouteObject } from 'react-router-dom'

/**
 * 自定义路由配置参数
 */
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
