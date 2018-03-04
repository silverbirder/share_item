import { connect } from 'react-redux'
import {
  doTmp,
} from '../actions'

const mapStateToProps = (state) => {
  return {
    tmp: state.doTmp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doTmp: dispatch(doTmp())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
