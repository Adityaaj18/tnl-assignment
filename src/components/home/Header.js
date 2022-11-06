import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useParams } from "react-router-dom";
import "../../styles/header.css";

const Header = ({ menuIconClick, user }) => {
  return (
    <div>
      <nav className="navbar navbar-other justify-content-between">
        <div style={{ display: "flex" }}>
          <div>
            <GiHamburgerMenu
              className="hamburger-menu"
              onClick={menuIconClick}
            />
          </div>
        </div>
        {user !== "none" && (
          <div className="subnav" style={{ display: "flex" }}>
            <div
              style={{
                borderRight: "1px solid #f2f2f2",
              }}
            >
              <p style={{ color: "#962E40" }}>Balance</p>
              <h6>₹320.83</h6>
            </div>
            <div className="nav-profile-pic">
              <img src={require("../../img/profile.png")} alt="" />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
