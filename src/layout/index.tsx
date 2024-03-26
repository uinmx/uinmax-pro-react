import React from 'react'
import * as AntdIcons from '@ant-design/icons'
import { Layout } from 'antd'
import type { MenuProps } from 'antd'
import { Outlet } from 'react-router-dom'

import './index.less'

import { HeaderBar } from './components'

const { Content, Footer } = Layout

/**
 * 菜单图标获取
 * antd icon
 * @param iconName
 * @return component
 */
const customIcons: { [key: string]: any } = AntdIcons
const getIconComp = (name: string) => {
  const iconName = name && customIcons[name] ? name : 'AlignLeftOutlined'
  return React.createElement(customIcons[iconName])
}

/**
 * 渲染菜单类型
 * antd menu
 */
export type MenuItem = Required<MenuProps>['items'][number]
const getMenuItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem =>
  ({
    label,
    key,
    icon,
    children,
    type
  }) as MenuItem

/**
 * 递归遍历菜单
 * @param menuList 菜单列表
 * @param newArr
 * @return new menuList
 */
export const deepLoopFloat = (menuList: any[], newArr: MenuItem[] = []) => {
  menuList.forEach((item: any) => {
    if (!item.meta) return
    if (!item?.children?.length) {
      return newArr.push(getMenuItem(item.meta.title, item.path, getIconComp(item.meta.icon)))
    }
    newArr.push(
      getMenuItem(
        item.meta.title,
        item.path,
        getIconComp(item.meta.icon),
        deepLoopFloat(item.children)
      )
    )
  })
  return newArr
}

/**
 * 默认布局
 * -- 菜单主题配置
 * -- 菜单权限配置
 */
function DefaultLayout() {
  return (
    <Layout style={{ height: '100vh' }}>
      <HeaderBar />
      <Content className="layout-content-body">
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default DefaultLayout
