import React from "react";
import Products from "./components/Products/Products";
import "./App.css";
import Title from "./components/Title/Title";
import List from "./components/List/List";

const App = () => {
  return (
    <div>
      <Title />
      <Products />;
      <List />
    </div>
  );
};

export default App;
