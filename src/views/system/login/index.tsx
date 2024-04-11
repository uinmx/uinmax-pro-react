import { Col, Row, Typography } from 'antd'

import LoginForm from './LoginForm'
import { SwitchDark } from '@/components'

import './index.less'

import BannerURL from '@/assets/imgages/bg-anim-security.gif'
import LogoURL from '@/assets/svg/react.svg'

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-nav">
        <SwitchDark />
      </div>

      <Row className="login-content">
        <Col xs={0} md={16} className="login-preview flex-column-center">
          <div className="sys-logo">
            <img src={LogoURL} alt={'logo'} width={32} height={32} />
            <span>UinMax Pro</span>
          </div>
          <img src={BannerURL} className="sys-banner bg-container" alt="banner" />
          <div className="sys-title">
            <Typography.Title level={2}>开箱即用的中后台管理系统</Typography.Title>
            <Typography.Title level={5}>
              <Typography.Text type="secondary">输入您的个人详细信息开始使用！</Typography.Text>
            </Typography.Title>
          </div>
        </Col>
        <Col xs={24} md={8} className="login-form flex-column-center">
          <div>
            <LoginForm />
          </div>
        </Col>
      </Row>

      {/*<div className="login-footer">footer</div>*/}
    </div>
  )
}

export default LoginPage
