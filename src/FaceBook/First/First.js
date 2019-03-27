import React, { Component } from "react";

import "./style.css";

class First extends Component {
  render() {
    return (
      <div className="firstWrapper">
        <div className="card" style={{ height: "150px" }} />
        <div className="card" style={{ height: "200px" }} />
      </div>
    );
  }
}
export default First;
