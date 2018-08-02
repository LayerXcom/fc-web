import { connect } from 'react-redux'
import Login from '../../components/Login'

function mapStateToProps(state) {
  return {
    logined:
      state.initialized && state.account !== '' && state.network === 'private',
    initialized: state.initialized
  }
}

export default connect(mapStateToProps)(Login)
