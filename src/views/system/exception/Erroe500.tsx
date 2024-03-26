import { Link } from 'react-router-dom'

function Error500() {
  return (
    <div style={styles.errorBox}>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default Error500

const styles: any = {
  errorBox: {
    textAlign: 'center'
  }
}
