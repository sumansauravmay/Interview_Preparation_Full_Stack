import React from "react";
class LifeCycleFlow extends React.Component {
  constructor() {
    super();
    console.log("1 Constructor");
    this.state = {
      count: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("2 getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("3 Mounting phase");
  }

  render() {
    console.log("4 render");
    return <p>React Life Cycle Method</p>;
  }
}

export default LifeCycleFlow;
