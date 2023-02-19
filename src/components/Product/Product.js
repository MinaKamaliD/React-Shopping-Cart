import React from "react";
import "./Product.css";
import { Component } from "react";

class Product extends Component {
  constructor() {
    super();
  }
  clickHandler(id) {
    this.props.onAddProduct(id);
  }
  render() {
    return (
      <div className="product-card">
        <h2 className="product-title">{this.props.title}</h2>
        <img src={this.props.src} className="product-img" />
        <p className="product-price">${this.props.price}</p>
        <button
          className="add-btn"
          onClick={this.clickHandler.bind(this, this.props.id)}
        >
          Add to List
        </button>
      </div>
    );
  }
}
export default Product;
