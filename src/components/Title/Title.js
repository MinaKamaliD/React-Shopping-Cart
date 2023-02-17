import React from "react";
import { Component } from "react";
import "./Title.css";

class Title extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1 className="page-title">
          The Big <span>W</span>atch Shop
        </h1>
      </div>
    );
  }
}
export default Title;
