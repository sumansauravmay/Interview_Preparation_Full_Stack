import React from "react";

class MemoExample2 extends React.Component {
  shouldComponentUpdate(nextProps) {
    // Only re-render if value changes
    return nextProps.value !== this.props.value;
  }

  heavyCalculation(num) {
    console.log("Calculating...");
    return num * 1000;
  }

  render() {
    const result = this.heavyCalculation(this.props.value);

    return <h1>Result: {result}</h1>;
  }
}
export default MemoExample2;