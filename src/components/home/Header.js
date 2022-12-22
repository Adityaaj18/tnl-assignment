import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useParams } from "react-router-dom";
import "../../styles/header.css";

const baseURL = process.env.REACT_APP_URL;
const Header = ({ menuIconClick }) => {

  const [user, setUser] = useState();
  const token = JSON.parse(window.localStorage.getItem("token"));
  const config = {
    headers: { Authorization: `Token ${token}` },
  };

  useEffect(() => {
    async function fetchMyProfile() {
      const { data } = await axios.get(baseURL + "/users/user-info/", config);
      setUser(data);
      console.log(data, data.advertiser_type, "data in header");
    }
    fetchMyProfile();
  }, []);
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
              {
                user && user.advertiser_type === 1 ? (
                  <>



                    <Dropdown >
                      <Dropdown.Toggle variant="success" id="dropdown-basic" className="ad_account_dropdown">
                        Ad Account 1
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Ad Account 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Ad Account 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  <>

                    <p style={{ color: "#962E40" }}>Balance</p>
                    <h6>₹320.83</h6>
                  </>
                )


              }
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
