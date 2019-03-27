import React, { Component } from "react";
import Header from "./Header/Header";
import First from "./First/First";
import Last from "./Last/Last";
import Middle from "./Middle/Middle";
import "./style.css";

class FaceBook extends Component {
  render() {
    return (
      <div className="FaceBook">
        <div className="facebookWrapper">
          <Header />
          <div className="innerWrapper">
            <First />
            <Middle />
            <Last />
          </div>
        </div>
      </div>
    );
  }
}
export default FaceBook;
