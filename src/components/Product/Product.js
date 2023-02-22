import React from "react";
import "./Product.css";
import { useState } from "react";
// import { Component } from "react";

//////////// Functional Component ////////////////////////////////////

const Product = (props) => {
  const clickHandler = (id) => {
    props.onAddProduct(id);
  };
  return (
    <div className="product-card">
      <h2 className="product-title">{props.title}</h2>
      <img src={props.src} className="product-img" />
      <p className="product-price">${props.price}</p>
      <button className="add-btn" onClick={() => clickHandler(props.id)}>
        Add to List
      </button>
    </div>
  );
};

//////////// Class Component ////////////////////////////////////////

// class Product extends Component {
//   constructor() {
//     super();
//   }
//   clickHandler(id) {
//     this.props.onAddProduct(id);
//   }
//   render() {
//     return (
//       <div className="product-card">
//         <h2 className="product-title">{this.props.title}</h2>
//         <img src={this.props.src} className="product-img" />
//         <p className="product-price">${this.props.price}</p>
//         <button
//           className="add-btn"
//           onClick={this.clickHandler.bind(this, this.props.id)}
//         >
//           Add to List
//         </button>
//       </div>
//     );
//   }
// }
export default Product;
