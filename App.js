import React, { Component } from 'react';

import {
  Provider,
} from 'react-redux'

import configureStore from './src/store/configureStore'

const store = configureStore()

import ShareItem from './src/native/containers/share_item.react'

export default class extends Component {
  render() {
    return (
      <Provider store={store} >
        <ShareItem />
      </Provider>
    )
  }
}