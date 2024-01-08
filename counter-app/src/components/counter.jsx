import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formateCount()}</span>
        <button
          type="button"
          onClick={this.props.onIncreament}
          className="btn btn-secondary btn-sm m-2"
        >
          Increament
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn  btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    )
  }
  getBadgeClass() {
    let classes = 'badge m-2 badge-'
    classes += this.props.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formateCount() {
    const { value } = this.props
    return value === 0 ? 'zero' : value
  }
}

export default Counter
