import { connect } from 'react-redux'
import Vote from '../../components/Vote'
import * as actions from  '../../actions/index'

const mapStateToProps = state => {
  return {
    urlList: state.urlList,
    url: state.submittingUrl
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incTruth: (id) => dispatch(action.incTruth(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
