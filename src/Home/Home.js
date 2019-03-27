import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class Home extends Component {
  handleClick = path => {
    History.push(path);
  };
  render() {
    return (
      <div className="App">
        <h1>Flex Box</h1>
        <ul className="navContainer">
          <li className="flexItem">
            <Link to="/FlexBoxDesktop">FlexBox for DeskTop</Link>
          </li>
          <li className="flexItem">
            <Link to="/PricingBox">Pricing Box</Link>
          </li>
          <li className="flexItem">
            <Link to="/FaceBook">Facebook</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Home;
