import { connect } from 'react-redux'
import {
  fetchQiita,
} from '../actions'

const mapStateToProps = (state) => {
  return {
    items: state.fetchQiita.items,
    loaded: state.fetchQiita.loaded,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     fetchQiita: url => dispatch(fetchQiita(url))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
