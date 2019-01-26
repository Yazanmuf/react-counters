import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    // console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onResetCounter(this.props.counter)}
          className="btn btn-warning btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
