import React from "react";
import "./Product.css";
import { Component } from "react";

class Product extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="product-card">
        <h2 className="product-title">{this.props.title}</h2>
        <img src={this.props.src} className="product-img" />
        <p className="product-price">${this.props.price}</p>
        <button className="add-btn">Add to List</button>
      </div>
    );
  }
}
export default Product;
