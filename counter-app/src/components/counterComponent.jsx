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
          className={this.getBadgeClass()}
        >
          {this.formateCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increament</button>
      </React.Fragment>
    )
  }
  getBadgeClass() {
    let classes = 'badge-m2 badge-'
    classes += this.state.count == 0 ? 'warning' : 'primary'
    return classes
  }

  formateCount() {
    const { count } = this.state
    return count == 0 ? 'zero' : count
  }
}

export default Counter
