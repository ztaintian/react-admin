import React, { Component } from 'react'
import Counter from '../../components/Counter'
import Summary from '../../components/Summary'
const style = {
  margin: "20px"
}

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr />
        <Summary />
      </div>
    )
  }
}
export default ControlPanel