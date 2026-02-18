import React from "react";
import { createRef } from "react";

class FocusInput extends React.Component {
  inputRef = createRef();

  handleFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.handleFocus}>Click Me</button>
      </>
    );
  }
}

export default FocusInput;
