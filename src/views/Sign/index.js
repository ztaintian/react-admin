import React, { Component } from 'react';
import SignatureCanvas from 'react-signature-canvas'
import './index.styl'
class Sign extends Component {
  state = {
    trimmedDataURL: null,
    colorChoice: 'green'
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
  trim = () => {
    this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png')})
  }
  render() {
    let {trimmedDataURL} = this.state
    return (
      <div className="sign">
        <SignatureCanvas penColor={this.state.colorChoice} ref={(ref) => { this.sigPad = ref }} canvasProps={{ className: 'sigCanvas' }} />
        <div className="bottom">
          <span onClick={this.trim}>使用</span>
          <span onClick={this.clear}>清除</span>
          <span onClick={this.color}>红色</span>
        </div>
      {trimmedDataURL
        ? <img 
          src={trimmedDataURL} />
        : null}
      </div>

    );
  }
}

export default Sign;