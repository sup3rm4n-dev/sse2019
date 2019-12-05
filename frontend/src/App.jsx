import React from 'react';
import Counter from './Counter'
import { getAllCounters, addCounter, setCounter, deleteCounter } from './server'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [],
    };
  }

  componentDidMount() {
    getAllCounters().then(counters => {
      this.setState({
        counters,
      })
    }).catch(err => {
      console.log(err);
    })
  }

  getAllCounters = () => {
    getAllCounters().then(counters => {
      this.setState({
        counters,
      })
    }).catch(err => {
      console.log(err);
    })
  }

  createCounter = () => {
    const name = document.getElementById("new_counter").value;
    const value = 0;
    addCounter(name, value).then(() => {
      this.getAllCounters();
    }).catch(err => {
      console.log(err);
    })
  }

  addCounter = (name, value) => {
    addCounter(name, value).then(() => {
      this.getAllCounters();
    }).catch(err => {
      console.log(err);
    })
  }

  setCounter = (name, value) => {
    setCounter(name, value).then(() => {
      this.getAllCounters();
    }).catch(err => {
      console.log(err);
    })
  }

  deleteCounter = (name) => {
    deleteCounter(name).then(() => {
      this.getAllCounters();
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const { counters } = this.state;
    const lists = counters.rows || [];
    const counterList = lists.map((counter, index) => {
      return (
        <Counter
          key = {index}
          index = {index}
          counter = {counter}
          addCounter = {this.addCounter}
          setCounter = {this.setCounter}
          deleteCounter = {this.deleteCounter}
        />
      )
    })
    return (
      <div className="App">
        <div className="App-header">
          <h1>CLOCOSS sign-off 1: API with datastore</h1>
        </div>
        <div className="App-body">
          <div className="new_counter">
            <h3>Add counter:</h3>
            <input type="text" id="new_counter" />
            <button onClick={this.createCounter}>add</button>
          </div>
          <div className="counter_list">
            { counterList }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
