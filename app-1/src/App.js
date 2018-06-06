import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    }
  }

  changeUserInput( value ) {
    this.setState({ message: value })
  }

  render() {
    return (
      <div className="App">User Input 
        <input onChange={ (e) => this.changeUserInput( e.target.value ) } type="text" /> <br/>
        <span>{ this.state.message }</span>
      </div>
    );
  }
}

export default App;
