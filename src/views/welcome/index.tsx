import { Link } from 'react-router-dom'

import ReactSVG from '@/assets/react.svg'

function Welcome() {
  return (
    <>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={ReactSVG} className="logo vanilla" alt="TypeScript logo" />
      </a>
      <p>
        <dt>Welcome...</dt>
        <Link to="/layout">Go layout page</Link>
      </p>
    </>
  )
}

export default Welcome
