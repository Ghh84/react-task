import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
    tag: ['tag1', 'tag2', 'tag3'],
  }
  render() {
    return (
      <div>
        <span
          //   style={{ fontSize: 20, alignItems: 'center' }}
          className={this.getBadgeClass()}
        >
          {this.formateCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increament</button>
        <ul>
          {this.state.tag.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
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
