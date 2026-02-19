import React from "react";

class LifeCycleMethod extends React.Component {
  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps) {
      fetchData(this.props.id);
    }

    /*
ComponentDidUpdate is similar to below code: 

useEffect(() => {
  fetchData(id);
}, [id]);
*/
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default LifeCycleMethod;
