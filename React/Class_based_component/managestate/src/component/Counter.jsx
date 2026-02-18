import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  handleInc = () => {
    this.setState((pre) => ({ count: pre.count + 1 }));
  };

  handleDec = () => {
    this.setState((nex) => ({ count: nex.count - 1 }));
  };

  handleReset = () => {
    this.setState(() => ({ count: 0 }));
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleInc}>Inc</button>
        <button onClick={this.handleDec}>Dec</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}
export default Counter;
