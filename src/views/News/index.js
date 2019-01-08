import React, { Component } from 'react';
class News extends Component {
  render() {
    return (
      <div className="news">
        <a href='#/index'>回到home</a>
        <button onClick={() => this.props.history.push('index')}>通过函数跳转home</button>
      </div>
    );
  }
  componentDidMount() {
  }
}

export default News;