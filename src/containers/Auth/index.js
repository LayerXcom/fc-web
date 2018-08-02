import { connect } from 'react-redux'
import Auth from '../../components/Auth'

function mapStateToProps(state) {
  return {
    initialized: state.initialized,
    logined:
      state.initialized && state.account !== '' && state.network === 'private'
  }
}

export default connect(mapStateToProps)(Auth)
