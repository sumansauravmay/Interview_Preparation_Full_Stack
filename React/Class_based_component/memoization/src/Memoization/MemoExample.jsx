import React from "react";

class MemoExample extends React.PureComponent {
  expensiveCal(num) {
    console.log("calculation");
    return num * 10;
  }
  render() {
    let result = this.expensiveCal(this.props.value);
    return (
      <h1
        style={{
          marginBottom: "500px",
        }}
      >
        Result: {result}
      </h1>
    );
  }
}

export default MemoExample;
