import { connect } from 'react-redux'
import UserHome from '../../components/UserHome'

const mapStateToProps = state => {
  return {
    urlList: state.urlList
  }
}

export default connect(mapStateToProps)(UserHome)
