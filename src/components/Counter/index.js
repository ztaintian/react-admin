import React from 'react'
// , { Component } f
import { increment, decrement } from '../../redux/action'
import { connect } from 'react-redux';
const buttonStyle = {
  margin: "20px"
}

function Counter({ caption, Increment, Decrement, value }) {
  return (
    <div>
      <button style={buttonStyle} onClick={Increment}>+</button>
      <button style={buttonStyle} onClick={Decrement}>-</button>
      <span>{caption} count :{value}</span>
    </div>
  )
}
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   render() {
//     return (
//       <div>
   
//       </div>
//     );
//   }
//   componentDidMount() {
//     console.log(this);
//   }
// }

function mapState(state, ownProps) {
  console.log('state', state);
  console.log('ownProps', ownProps);
  return {
    value: state[ownProps.caption]
  }
}
function mapDispatch(dispatch, ownProps) {
  return {
    Increment: () => {
      dispatch(increment(ownProps.caption))
    },
    Decrement: () => {
      dispatch(decrement(ownProps.caption))
    }

  }
}

export default connect(mapState, mapDispatch)(Counter)