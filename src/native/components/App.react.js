import React, { Component } from 'react';

import {
  Provider,
} from 'react-redux'

import configureStore from '../../store/configureStore'

const store = configureStore()

import RssReader from '../containers/rss_reader.react'

export default class extends Component {
  render() {
    return (
      <Provider store={store} >
        <RssReader />
      </Provider>
    )
  }
}
