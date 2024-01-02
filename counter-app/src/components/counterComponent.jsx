import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <React.Fragment>
        <span>{this.formateCount()}</span>
        <button>Increament</button>
      </React.Fragment>
    )
  }
  formateCount() {
    const { count } = this.state
    return count == 0 ? 'zero' : count
  }
}

export default Counter
