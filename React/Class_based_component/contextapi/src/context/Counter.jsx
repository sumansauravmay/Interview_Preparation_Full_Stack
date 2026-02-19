import { CounterContext } from "./ContextProvider";
import React from "react";

class Counter extends React.Component {
  static contextType = CounterContext;
  render() {
    const { count, increment, decrement } = this.context;
    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
        </>
    )
  }
}

export default Counter;
