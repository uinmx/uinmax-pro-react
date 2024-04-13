import { Link } from 'react-router-dom'

function Error403() {
  return (
    <div style={styles.errorBox}>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default Error403

const styles: any = {
  errorBox: {
    textAlign: 'center'
  }
}
