import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.counter,
      index: props.index,
    };
  }

  componentDidUpdate() {
    if(this.state.counter !== this.props.counter) {
      this.setState({
        counter : this.props.counter,
      })
    }
  }

  setCounter = (name) => {
    const { index } = this.state;
    const value = document.getElementById(`counter_value_${index}`).value;
    if(!value) return;
    this.props.setCounter(name, value);
  }

  addCounter = (name) => {
    const { index } = this.state;
    const value = document.getElementById(`counter_value_${index}`).value;
    if(!value) return;
    this.props.addCounter(name, value);
  }

  deleteCounter = (name) => {
    this.props.deleteCounter(name);
  }

  render() {
    const { counter, index } = this.state;
    return (
      <div className="counter">
        <h5>Counter {counter.name}: {counter.value}</h5>
        <input type="text" id={`counter_value_${index}`} />
        <button onClick={() => this.addCounter(counter.name)}>add</button>
        <button onClick={() => this.setCounter(counter.name)}>set</button>
        <button onClick={() => this.deleteCounter(counter.name)}>delete</button>
      </div>
    );
  }
}

export default Counter;
