import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    value: this.props.value
  };
  render() {
    return (
      <div>
        <button
          onClick={this.props.onResetAll}
          className="btn btn-primary btn-sm m-2"
        >
          Reset all
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id} //Key is passed internally only for this component, it will not be passed to children
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onResetCounter={this.props.onResetCounter}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
