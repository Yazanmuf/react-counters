import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
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
      <div>
        <button
          onClick={this.handleResetAll}
          className="btn btn-primary btn-sm m-2"
        >
          Reset all
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id} //Key is passed internally only for this component, it will not be passed to children
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onResetCounter={this.handleResetCounter}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
