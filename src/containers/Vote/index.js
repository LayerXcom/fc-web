import { connect } from 'react-redux'
import Vote from '../../components/Vote'
import * as actions from  '../../actions/index'

const mapStateToProps = state => {
  return {
    urlList: state.urlList,
    sortList: state.sortList,
    url: state.submittingUrl
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incTruth: (id) => dispatch(actions.incTruth(id)),
    incFake: (id) => dispatch(actions.incFake(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
