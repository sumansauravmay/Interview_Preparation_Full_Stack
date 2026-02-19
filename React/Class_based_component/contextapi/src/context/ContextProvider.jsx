import { createContext } from "react";
import React from "react";

export const CounterContext = createContext();

class ContextProvider extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((pre) => ({ count: pre.count + 1 }));
  };
  decrement = () => {
    this.setState((pre) => ({ count: pre.count - 1 }));
  };
  render() {
    return (
      <CounterContext.Provider
        value={{
          count: this.state.count,
          increment: this.increment,
          decrement: this.decrement,
        }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export default ContextProvider;
