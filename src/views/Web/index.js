import React, { Component } from 'react';
import './index.styl'
import { Icon } from 'antd';
class Web extends Component {
  state = {
    list: [
      {
        name: 'react-router文档',
        url: 'https://reacttraining.com/react-router/web/guides/quick-start'
      }
    ]

  }
  sigPad = {}
  clear = () => {
    this.sigPad.clear()
  }
  color = () => {
    this.setState({
      colorChoice: 'red'
    })
  }

  jumpUrl = (item) => {
    window.open('about:blank').location.href = item.url;
  }
  render() {
    var Wraipe = this.state.list.map((item, index) => {
      return <div className="item" onClick={ this.jumpUrl.bind(this,item)}  key={index}>
              <Icon type="ie" />
              <a  rel="noopener noreferrer" href={item.url} target="_blank">{item.name}</a>
            </div>
    })
    return (
      <div className="web">
      {
        Wraipe
      }
      </div>
    );
  }
}

export default Web;