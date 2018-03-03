import React, { Component,PropTypes } from 'react';
import createReactClass from 'create-react-class';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  NavigatorIOS,
  TouchableWithoutFeedback,
  WebView,
} from 'react-native'
import { fetchQiita } from '../../actions';

const QIITA_URL = "https://qiita.com/api/v2/tags/reactjs/items";

export const ReactQiitaList = class extends Component {
  constructor(props) {
    super(props)
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      ds: ds.cloneWithRows(props.items || []),
      loaded: props.loaded
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.items !== this.props.items) {
      this.setState({
        ds: this.state.ds.cloneWithRows(nextProps.items || []),
        loaded:nextProps.loaded
      })
    }
  }
  componentDidMount() {
    this.props.fetchQiita(QIITA_URL);
  }
  render() {
    if(!this.state.loaded) {
      return (
        <View><Text>Loading ...</Text></View>
      )
    } else {
      return (
        <ListView
          dataSource={this.state.ds}
          renderRow={this.renderItem}
          style={styles.listView}/>
      )
    }
  }
  renderItem(item, sectionID, rowID) {
    return (
      <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image
          source={{uri: item.user.profile_image_url}}
          style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.name}>{item.user.id}</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
};
// 記事閲覧用のWebView
const ReactQiitaItemView = createReactClass({
  render: function() {
    return (
      <WebView
        url={this.props.url}/>
    )
  }
});

// 各種デザイン要素
const styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    margin: 8,
    textAlign: 'left',
  },
  name: {
    fontSize: 12,
    margin: 8,
    textAlign: 'left',
  },
  thumbnail: {
    width: 80,
    height: 80,
    margin: 2,
  },
  listView: {
    backgroundColor: '#FFFFFF',
  },
});

export default class extends Component {
  render() {
    return (
      <ReactQiitaList 
      items={this.props.items}
      loaded={this.props.loaded}
      fetchQiita={this.props.fetchQiita}
      ></ReactQiitaList>
    );
  }
}
