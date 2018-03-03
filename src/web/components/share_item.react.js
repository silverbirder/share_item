import React from 'react'
import createReactClass from 'create-react-class'

const QIITA_URL = "https://qiita.com/api/v2/tags/reactjs/items";

const ReactQiitaList = createReactClass({
  getInitialState: function() {
    return {
      items: null,
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ul>
        {this.state.items.map((item, i) =>
          <li key={i}>{ item.title }</li>
        )}
      </ul>
    );
  },

  renderLoadingView: function() {
    return (
      <div>
        <div>
          Loading movies...
        </div>
      </div>
    );
  },

  // API呼び出し
  fetchData: function() {
    fetch(QIITA_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData,
          loaded: true,
        });
      });
  },
});

export default createReactClass({
  render() {
    return (
      <ReactQiitaList/>
    )
  }
})
