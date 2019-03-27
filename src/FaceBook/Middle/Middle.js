import React, { Component } from "react";

import "./style.css";

class Middle extends Component {
  render() {
    return (
      <div className="middleWrapper">
        <div className="card middle" style={{ height: "150px" }} />
        <div className="card middle" style={{ height: "400px" }} />
        <div className="card middle" style={{ height: "700px" }} />
        <div className="card middle" style={{ height: "200px" }} />
        <div className="card middle" style={{ height: "500px" }} />
        <div className="card middle" style={{ height: "100px" }} />
        <div className="card middle" style={{ height: "300px" }} />
        <div className="card middle" style={{ height: "700px" }} />
        <div className="card middle" style={{ height: "900px" }} />
        <div className="card middle" style={{ height: "200px" }} />
      </div>
    );
  }
}
export default Middle;
