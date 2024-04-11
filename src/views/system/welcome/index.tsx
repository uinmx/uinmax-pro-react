import { Link } from 'react-router-dom'

import ReactSVG from '@/assets/svg/react.svg'
import { SwitchDark } from '@/components'

function Welcome() {
  return (
    <div style={styles.welcomeBox}>
      <div style={styles.logoBox}>
        <SwitchDark />
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" style={styles.logo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src={ReactSVG} style={styles.logo} className="logo vanilla" alt="TypeScript logo" />
        </a>
      </div>
      <p>
        <dt>Welcome...</dt>
        <Link to="/layout">Go layout page</Link>
      </p>
    </div>
  )
}

export default Welcome

const styles: any = {
  welcomeBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  logoBox: {
    display: 'flex'
  },
  logo: {
    height: '6em',
    padding: '1.5em',
    willChange: 'filter'
  }
}
