import React from "react";
import Products from "./components/Products/Products";
import "./App.css";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Title />
      <Products />;
      <Footer />
    </div>
  );
};

export default App;
