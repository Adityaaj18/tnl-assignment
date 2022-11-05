import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import { Card, Dropdown } from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";
import { GoPrimitiveDot } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";

const baseURL = process.env.REACT_APP_URL;
const MediaURL = process.env.REACT_APP_MEDIA;

export default function AdvertiserManagement() {
  const [accounts, setAccounts] = useState([]);
  const token = JSON.parse(window.localStorage.getItem("authData"))?.token;

  useEffect(() => {
    async function fetchAccounts() {
      const config = {
        headers: { Authorization: `Token ${token}` },
      };

      const allAccounts = await axios.get(
        baseURL + "/ad-accounts/get/",
        config
      );

      setAccounts(allAccounts.data);
    }

    fetchAccounts();
  }, []);

  return (
    <div>
      <Header user="none" />
      <div className="main-content">
        <div className="welcome">
          <div>
            <h1>Welcome Testing, </h1>
            <p>
              Simply select an ad account to setup your campaign, or create a
              new ad account if you’d like
            </p>
          </div>
          <img
            src={require("../../img/welcome-img.png")}
            alt=""
            style={{ width: "60px", height: "60px" }}
          />
        </div>

        <div className="ad-accounts-container">
          {accounts.map((e, idx) => (
            <Card key={idx} className="ad-account-card">
              <Card.Body>
                <div className="ad-account-card-menu">
                  <div className="brand-logo">
                    <img
                      src={MediaURL + e?.brand_logo}
                      width="60"
                      height="60"
                      alt="brandlogo"
                    />
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle className="ad-account-card-option">
                      <BsThreeDots style={{ color: "black" }} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-options">
                        View
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-options">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-options">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="ad-account-card-info">
                  <p>
                    Created Date : {moment(e.date_created).format("DD-MM-YYYY")}
                  </p>
                  <h4>{e.name}</h4>
                  <p className="text-muted">{e.brand_name}</p>
                </div>

                <div className="account-campaign-data">
                  <h5 className="mb-2">Campaigns</h5>
                  <div>
                    <div className="data-status Active">
                      <div>
                        <GoPrimitiveDot /> Active
                      </div>
                      <div>12</div>
                    </div>

                    <div className="data-status Scheduled">
                      <div>
                        <GoPrimitiveDot /> Scheduled
                      </div>
                      <div>12</div>
                    </div>

                    <div className="data-status Completed-s">
                      <div>
                        <GoPrimitiveDot /> Completed
                      </div>
                      <div>12</div>
                    </div>

                    <div className="data-status Draft">
                      <div>
                        <GoPrimitiveDot /> Draft
                      </div>
                      <div>12</div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}

          <div className="add-adAccount">
            <Link to="/create-ad-account" className="add-adAccount-btn">
              <GrAddCircle />
            </Link>
            <h4>Create New Ad Account</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
