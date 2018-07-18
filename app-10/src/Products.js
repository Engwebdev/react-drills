import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios.get("https://practiceapi.devmountain.com/products").then(response => {
      this.setState({
        products: response.data
      });
    });
  }
  render() {
    let products = this.state.products.map((product, index) => {
      return (
        <Link key={index} to={`/details/${product.id}`}>
          <img width="200" src={product.image} />
        </Link>
      );
    });
    return <div>{products}</div>;
  }
}
export default Products;
