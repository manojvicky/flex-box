import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import FlexBoxD from "./FlexBox for DeskTop/FlexBox";
import PricingBox from "./Pricing Box/PricingBox";
import FaceBook from "./FaceBook/FaceBook";
import history from "history/createBrowserHistory";
import Home from "./Home/Home";
import "./styles.css";
const History = history();

export default class App extends Component {
  render() {
    return (
      <Router history={History}>
        <div style={{ width: "100%" }}>
          <Route exact path="/" component={Home} />
          <Route path="/FlexBoxDesktop" component={FlexBoxD} />
          <Route path="/PricingBox" component={PricingBox} />
          <Route path="/FaceBook" component={FaceBook} />
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
