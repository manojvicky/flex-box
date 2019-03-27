import React, { Component } from "react";

import "./style.css";

class Last extends Component {
  render() {
    return (
      <div className="lastWrapper">
        <div className="card" style={{ height: "250px" }} />
        <div className="card" style={{ height: "100px" }} />
        <div className="card" style={{ height: "400px" }} />
      </div>
    );
  }
}
export default Last;
