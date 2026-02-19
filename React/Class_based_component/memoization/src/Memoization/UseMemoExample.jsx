import React from "react";

class UseMemoExample extends React.Component {
  lastNum = null;
  lastResult = null;

  heavyCalfunc(num) {
    if (num == this.lastNum) {
        console.log("Using cached value");
      return this.lastResult;
    }

    console.log("Calculating new value");
    this.lastNum = num;
    this.lastResult = num * 10;
    return this.lastResult;
  }

  render() {
    let result=this.heavyCalfunc(this.props.value)
    return <h1>Result: {result}</h1>;
  }
}

export default UseMemoExample;
