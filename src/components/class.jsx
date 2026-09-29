import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: props.initialCount || 0
    };

    // Bind event handlers (or use arrow functions)
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrement() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment} style={{ marginLeft: '0.5rem' }}>+</button>
      </div>
    );
  }
}

export default ClassCounter;