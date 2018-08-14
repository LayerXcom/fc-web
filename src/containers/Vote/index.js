import { connect } from 'react-redux'
import Vote from '../../components/Vote'

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Vote)
