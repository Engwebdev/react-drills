import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }
  }

  handleChange( filter ) {
    this.setState({ filterString: filter })
  }

  render() {
    let foodsToDisplay = 
      this.state.foods
        .filter( (food) => {
          return food.includes( this.state.filterString ); // filterString is userInput.
        })//a new, filtered array
        .map( (food, index) => {
          return <h2 key={index}>{food}</h2>
        }) //creates new array, takes each item in the old array, and puts h2 tags around it.

      
    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" />
        { foodsToDisplay }
      </div>
    );
  }
}

export default App;
