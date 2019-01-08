import React, { Component } from 'react';
import './index.styl';
class Regs extends Component {
  state = {
    regs: 'reg = /^[\\u3040-\\u309F\\u30A0-\\u30FF\\a-zA-Z\\u4E00-\\u9FA5\\uf900-\\ufa2d·s]{2,20}$/'
  };

  render() {
    return (
      <div className="Regs">
        <p>1、js正则验证人名，包含·（类似卡尔·马克思）增加英语、日语</p>
        <p>{this.state.regs}</p>
        <a target="_blank" rel="noopener noreferrer" href="https://blog.csdn.net/sheng_li/article/details/73649071">参考链接</a>
      </div>
    );
  }
}

export default Regs;