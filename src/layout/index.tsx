import { useEffect, useState } from 'react'
import { Button, Layout, Menu } from 'antd'
import { isArray } from 'lodash'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Header, Content, Footer } = Layout

function DefaultLayout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [menuItems, setMenuItems] = useState([])

  async function getFlattenRoutes() {
    const { RootRouter: routes } = await import('@/router') // 动态导入路由配置

    const filterRoutes = routes.filter((route) => route?.path && route?.children)

    const menuItems = []

    const travel = (_routes) => {
      _routes.forEach((route) => {
        if (route.path && !route.children) {
          menuItems.push({
            key: route.path,
            label: route?.title || 'label'
          })
        } else if (isArray(route.children) && route.children.length) {
          travel(route.children)
        }
      })
    }

    travel(filterRoutes)

    setMenuItems(menuItems)
  }

  useEffect(() => {
    getFlattenRoutes()
  }, [pathname])

  const onClickSubMenu = ({ key }) => {
    console.log('onClickSubMenu@', key)
    navigate(`${key}`)
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo">
          <Button onClick={() => navigate('/')}>Logo</Button>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          onClick={onClickSubMenu}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '20px' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default DefaultLayout
