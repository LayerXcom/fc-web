import { connect } from 'react-redux'
import UserHome from '../../components/UserHome'

const mapStateToProps = state => {
  return {
    urlList: state.urlList,
    sortList: state.sortList
  }
}

export default connect(mapStateToProps)(UserHome)
