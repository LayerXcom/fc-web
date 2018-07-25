import { connect } from 'react-redux'

import App from '../components'

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
