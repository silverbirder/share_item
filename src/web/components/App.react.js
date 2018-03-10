import React from 'react'

import {
  Provider,
} from 'react-redux'

import configureStore from '../../store/configureStore'

const store = configureStore()

import ShareItem from '../containers/share_item.react'

import createReactClass from 'create-react-class'

export default createReactClass({
  render() {
    return (
      <Provider store={store} >
        <ShareItem />
      </Provider>
    )
  }
})
