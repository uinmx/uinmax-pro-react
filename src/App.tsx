import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from '@/router'

function App() {
  return (
    <div className="app-body">
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ConfigProvider>
    </div>
  )
}

export default App
