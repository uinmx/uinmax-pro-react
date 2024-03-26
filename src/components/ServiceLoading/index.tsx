import ReactDOM from 'react-dom/client'

import { Loading } from '../index.ts'

let needLoadingRequestCount = 0

// 显示loading
export const openFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    const dom = document.createElement('div')
    dom.setAttribute('id', 'loading')
    document.body.appendChild(dom)
    ReactDOM.createRoot(dom).render(<Loading />)
  }
  needLoadingRequestCount++
}

// 关闭loading
export const closeFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    document.body.removeChild(document.getElementById('loading') as HTMLElement)
  }
}
