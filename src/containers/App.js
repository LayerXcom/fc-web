import { connect } from 'react-redux'

import App from '../components/App'

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
