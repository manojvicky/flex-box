import React, { Component } from "react";

import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="headerWrapper">
          <div className="item">
            <span className="icon fbicon" />
          </div>
          <div className="item adjust">
            <div className="outerforsearch">
              <input
                className="inputBox adjust"
                type="text"
                placeholder="Search"
              />
              <button className="submitBlue">
                <i className="submitButton" />
              </button>
            </div>
          </div>
          <div className="item">
            <div className="innerItem">
              <div className="inneritems">
                <div className="outerforProfile">
                  <div className="profileIcon" />
                  <div className="profileName">
                    <span className="pointer">Manoj</span>
                  </div>
                </div>
              </div>
              <div className="inneritems">
                <div className="outerforHome">
                  <div className="homeName">
                    <span className="pointer">Home</span>
                  </div>
                </div>
              </div>
              <div className="inneritems">
                <div className="outerforHome">
                  <div className="homeName">
                    <span className="pointer">Create</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="outerofAllIcons flex">
              <span className="icon friendReq" />
              <span className="icon Messages" />
              <span className="icon Notifications" />
              <span className="br" />
            </div>
          </div>
          <div className="item">
            <div className="outerofAllIcons flex">
              <span className="icon help" />
              <span className="icon more" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
