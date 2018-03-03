import React from 'react'

import {
  Provider,
} from 'react-redux'

import configureStore from '../../store/configureStore'

const store = configureStore()

import RssReader from '../containers/rss_reader.react'

import createReactClass from 'create-react-class'

export default createReactClass({
  render() {
    return (
      <Provider store={store} >
        <RssReader />
      </Provider>
    )
  }
})
