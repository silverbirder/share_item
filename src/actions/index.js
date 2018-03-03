export const FETCH_QIITA = 'FETCH_QIITA'

export const fetchQiita = (url) => {
  return dispatch => {
    fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      dispatch(ok_qiita(responseData))
    });  
  }
}

function ok_qiita(responseData) {
  return {
    type: FETCH_QIITA,
    data: responseData,
    loaded: true,
  }
}
