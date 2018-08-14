import { connect } from 'react-redux'
import Crawl from '../../components/Crawl'
import * as actions from  '../../actions/index'

const mapStateToProps = state => {
  return {
    urlList: state.urlList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUrl: (url) => dispatch(actions.addUrl(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Crawl)
