import React from "react";
import "./Products.css";
import Product from "../Product/Product";
import { useState } from "react";
// import { Component } from "react";

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

//////////// Functional Component ////////////////////////////////////////

const Products = () => {
  const [products, setProducts] = useState([]);

  const addToCart = (productId) => {
    productInfo.map((item) => {
      if (item.id === productId) {
        setProducts((prevState) => [...prevState, item]);
      }
    });
  };
  const onRemoveHandler = (id) => {
    let leftProducts = products.filter((item) => item.id !== id);
    setProducts(leftProducts);
  };
  const emptyListHandler = () => {
    setProducts([]);
  };

  return (
    <>
      <div className="products">
        {productInfo.map((product) => (
          <Product {...product} key={product.id} onAddProduct={addToCart} />
        ))}
      </div>
      <h2 className="list-title">Shopping List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="row">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="selected">
                {
                  <img
                    src={product.src}
                    style={{ width: 60, marginRight: 10 }}
                  />
                }
                {product.title}
              </td>
              <td className="price">${product.price}</td>
              <td className="btn">
                <button onClick={() => onRemoveHandler(product.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button">
        <button className="empty-button" onClick={emptyListHandler}>
          Empty The List
        </button>
      </div>
    </>
  );
};

//////////// Class Component ////////////////////////////////////////

// class Products extends Component {
//   constructor() {
//     super();
//     this.state = {
//       products: [],
//     };
//     this.addToCart = this.addToCart.bind(this);
//     this.emptyListHandler = this.emptyListHandler.bind(this);
//   }
//   addToCart(productId) {
//     productInfo.map((item) => {
//       if (item.id === productId) {
//         this.setState((prevState) => {
//           return { products: [...prevState.products, item] };
//         });
//       }
//     });
//   }
//   onRemoveHandler(id) {
//     let leftProducts = this.state.products.filter((item) => item.id !== id);
//     this.setState({ products: leftProducts });
//   }
//   emptyListHandler() {
//     this.setState({ products: [] });
//   }
//   render() {
//     return (
//       <>
//         <div className="products">
//           {productInfo.map((product) => (
//             <Product
//               {...product}
//               key={product.id}
//               onAddProduct={this.addToCart}
//             />
//           ))}
//         </div>
//         <h2 className="list-title">Shopping List</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Price</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody className="row">
//             {this.state.products.map((product) => (
//               <tr key={product.id}>
//                 <td className="selected">
//                   {
//                     <img
//                       src={product.src}
//                       style={{ width: 60, marginRight: 10 }}
//                     />
//                   }
//                   {product.title}
//                 </td>
//                 <td className="price">${product.price}</td>
//                 <td className="btn">
//                   <button onClick={this.onRemoveHandler.bind(this, product.id)}>
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="button">
//           <button className="empty-button" onClick={this.emptyListHandler}>
//             Empty The List
//           </button>
//         </div>
//       </>
//     );
//   }
// }
export default Products;
