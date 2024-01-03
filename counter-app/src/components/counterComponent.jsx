import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <React.Fragment>
        <span
          style={{ fontSize: 20, alignItems: 'center' }}
          className="badge badge-primary m-2"
        >
          {this.formateCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increament</button>
      </React.Fragment>
    )
  }
  formateCount() {
    const { count } = this.state
    return count == 0 ? 'zero' : count
  }
}

export default Counter
