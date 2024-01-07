import React, { Component } from 'react'

class Counter extends Component {
  state = {
    value: this.props.value,
    tag: ['tag1', 'tag2', 'tag3'],
  }
  renderTag() {
    if (this.state.tag.length === 0) return 'There is no tag.'
    return (
      <ul>
        {this.state.tag.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    )
  }
  handleIncreament = () => {
    this.setState({ value: this.state.value + 1 })
  }
  render() {
    return (
      <div>
        <span
          style={{ fontSize: 20, alignItems: 'center', margin: 10 }}
          className={this.getBadgeClass()}
        >
          {this.formateCount()}
        </span>
        <button
          type="button"
          onClick={this.handleIncreament}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        {/* {this.state.tag.length == 0 && 'Please create tag.'}
        {this.renderTag()} */}
      </div>
    )
  }
  getBadgeClass() {
    let classes = 'badge-m2 badge-'
    classes += this.state.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formateCount() {
    const { value } = this.state
    return value === 0 ? 'zero' : value
  }
}

export default Counter
