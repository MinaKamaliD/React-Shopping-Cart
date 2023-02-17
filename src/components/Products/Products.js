import React from "react";
import "./Products.css";
import { Component } from "react";
import Product from "../Product/Product";

const productInfo = [
  { id: 1, title: "Garmin vivomove", src: "./watches/1.jpg", price: 269.99 },
  { id: 2, title: "Amazfit Band 5", src: "./watches/2.jpg", price: 45.99 },
  {
    id: 3,
    title: "Garmin Vivoactive",
    src: "./watches/3.jpg",
    price: 128.55,
  },
  { id: 4, title: "Vi­voactive 3", src: "./watches/4.jpg", price: 89.98 },
  { id: 5, title: "Fossil Gen 6", src: "./watches/5.jpg", price: 112.99 },
  { id: 6, title: "Garmin Venu 2S", src: "./watches/6.jpg", price: 221.49 },
  { id: 7, title: "Amazfit Bip 3", src: "./watches/7.jpg", price: 97.99 },
  { id: 8, title: "Fitbit Sense 2", src: "./watches/8.jpg", price: 93.98 },
  { id: 9, title: "Amazfit GTS", src: "./watches/9.jpg", price: 128.99 },
  { id: 10, title: "Galaxy Watch5", src: "./watches/10.jpg", price: 37.99 },
  {
    id: 11,
    title: "Garmin Instinct",
    src: "./watches/11.jpg",
    price: 54.99,
  },
  { id: 12, title: "Garmin Lily", src: "./watches/12.jpg", price: 29.99 },
];

class Products extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="products">
        {productInfo.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    );
  }
}
export default Products;
