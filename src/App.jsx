import React, { Component } from "react";
import Counters from "./Counters";
import Navbar from "./Navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  // When delete button clicked, logging string, but counterId redturns undefined???? why? Worked after adding new attribute username, WHY NOT WITH KEY?
  handleDelete = counter => {
    // console.log("event handler caught", counter);
    const counters = [...this.state.counters];
    // console.log(counters);
    const index = counters.indexOf(counter);
    // console.log(index, "index");
    counters[index] = { ...counter };
    // console.log(counters[index]);

    const filteredCounters = counters.filter(c => c.id !== counter.id);
    // console.log(filteredCounters);
    // because key and value are the same {counters : counters} we can simplyify it like below
    this.setState({ counters: filteredCounters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleResetCounter = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = 0;
    this.setState({ counters });
  };

  handleResetAll = () => {
    console.log("Reset all clicked");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounter={this.state.counters.filter(c => c.value !== 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onResetCounter={this.handleResetCounter}
            onResetAll={this.handleResetAll}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
