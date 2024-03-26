import { BrowserRouter } from 'react-router-dom'

import AppRouter from '@/router'

function App() {
  return (
    <div className="app-body">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
