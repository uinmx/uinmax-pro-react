import { useEffect, useRef, useState } from 'react'
import { GithubFilled } from '@ant-design/icons'
import { Avatar, Layout, Menu } from 'antd'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

import { deepLoopFloat, MenuItem } from '@/layout'

const { Header } = Layout

export function HeaderBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const scrollRef = useRef<any>(null)
  const [showNavBar, setShowNavBar] = useState(true)

  async function getFlattenRoutes() {
    const { RootRouter: routes } = await import('@/router')
    setMenuItems(deepLoopFloat(routes))
  }

  useEffect(() => {
    getFlattenRoutes()

    let inObserver: IntersectionObserver
    if (scrollRef.current) {
      inObserver = new IntersectionObserver((entries) => {
        setShowNavBar(entries[0].isIntersecting)
      })
      inObserver.observe(scrollRef.current)
    }

    return () => {
      if (scrollRef.current && inObserver) {
        inObserver.unobserve(scrollRef.current)
        inObserver.disconnect()
      }
    }
  }, [pathname, scrollRef.current])

  const onClickSubMenu = ({ key }: any) => {
    navigate(`${key}`)
  }

  return (
    <>
      <Header className={!showNavBar ? 'fixed-header' : 'layout-header'}>
        <div className="layout-header-logo">
          <NavLink to="/">
            <Avatar
              src={
                <img
                  src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'}
                  alt="Logo"
                />
              }
            />
          </NavLink>
        </div>
        <Menu
          // theme="dark"
          mode="horizontal"
          items={menuItems}
          onClick={onClickSubMenu}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Link to="https://github.com/uinmx/react-template" target="_blank" rel="noreferrer">
          <Avatar
            icon={<GithubFilled style={{ fontSize: '20px', color: '#000', background: '#fff' }} />}
            style={{ backgroundColor: '#fff' }}
          />
        </Link>
      </Header>
      <div ref={scrollRef} className="top-flag" />
    </>
  )
}
