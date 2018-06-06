import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ''
    };

    this.handleAddTask = this.handleAddTask.bind( this );
  }

  handleInputChange(value) {
    this.setState({input: value})
  }

  handleAddTask() {
    this.setState({ 
      list: [...this.state.list, this.state.input], input: ""}); 
      //...this.state.list: will take all user input and add it to the (list)
      //this.state.input: will render it on the screen.
      //input:'' => this will set the input back to empty
  }

  render() {
    let list = this.state.list.map( ( element, index ) => {
    return (
    <Todo key={index} task={element}/>
    )
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input value={this.state.input} 
          placeholder = "Enter Your Task"
          onChange={ (event)=> this.handleInputChange(event.target.value) }
          />

          <button onClick={ this.handleAddTask }>Add</button>
        </div>

        <br />

        { list }
      </div>
    );
  }
}

export default App;
