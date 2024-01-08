import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }
  handleIncreament = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counter[index] = { ...counter }
    counters[index].value++

    this.setState({ counters })
  }
  handleDelete = (id) => {
    const counters = this.state.counters.filter((m) => m.id !== id)
    this.setState({ counters })
  }
  handleRest = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }
  render() {
    return (
      <div>
        <button
          onClick={this.handleRest}
          className="btn  btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            onIncreament={() => this.handleIncreament(counter)}
            onDelete={() => this.handleDelete(counter.id)}
            onReset={() => this.handleRest()}
            id={counter.id}
            selected
          />
        ))}
      </div>
    )
  }
}

export default Counters
