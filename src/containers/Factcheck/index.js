import { connect } from 'react-redux'
import Factcheck from '../../components/Factcheck'

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Factcheck)
