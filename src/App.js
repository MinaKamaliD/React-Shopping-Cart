import React from "react";
import Products from "./components/Products/Products";
import "./App.css";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Title />
      <Products />;
    </div>
  );
};

export default App;
