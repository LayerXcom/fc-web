import { connect } from 'react-redux'
import Crawl from '../../components/Crawl'
import * as actions from  '../../actions/index'

const mapStateToProps = state => {
  return {
    urlList: state.urlList,
    url: state.submittingUrl
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUrl: (url) => dispatch(actions.addUrl(url)),
    submittingUrl: (e) => dispatch(actions.submittingUrl(e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Crawl)
