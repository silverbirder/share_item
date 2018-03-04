import {
  DO_TMP,
} from '../../actions'

export default (state = [], action) => {
  switch (action.type) {
    case DO_TMP:
      return Object.assign({}, state, {
        doTmp: null
      })
    default:
      return Object.assign({}, state, {
        doTmp: null
      })
  }
}
