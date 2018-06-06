import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(value) {
    this.setState({ text: value });
  }

  handleAdd() {
    this.props.add(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.text}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default NewTask;
