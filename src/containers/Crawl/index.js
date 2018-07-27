import { connect } from 'react-redux'
import Crawl from '../../components/Crawl'

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Crawl)
