import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Modal1 from "./Modals/Modal1";
import Modal2 from "./Modals/Modal2";
import { useNavigate } from "react-router-dom";

import { IoGameControllerOutline, IoWalletOutline } from "react-icons/io5";
import { TokenContext } from "../../context/TokenContext";

import Loading from "../Loading";

import "../../styles/main.css";
import getCountdown from "../../utils/countdown";
import { Card } from "react-bootstrap";
import { GoPrimitiveDot } from "react-icons/go";

const baseURL = process.env.REACT_APP_URL;

const Main = () => {
  const token = JSON.parse(window.localStorage.getItem("token"));
  const config = {
    headers: { Authorization: `Token ${token}` },
  };

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState();
  const [campaigns, setCampaigns] = useState([]);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  useEffect(() => {
    async function fetchDashboardInfo() {
      const { data } = await axios.get(baseURL + `/users/user-info/`, config);
      setUser(data);
      const res = await axios.get(baseURL + `/campaigns/`);
      setCampaigns(res.data);
      setIsLoading(false);
    }

    fetchDashboardInfo();
  }, []);

  return (
    <div className="main-content">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="welcome">
            <div>
              <h1>Welcome Back {user?.full_name}!</h1>
              <p>
                Tip: Did you know the support team is online 24/7 to help you
                out?
              </p>
            </div>
            <img
              src={require("../../img/welcome-img.png")}
              alt=""
              style={{ width: "60px", height: "60px" }}
            />
          </div>

          <div className="" style={{ marginTop: "60px" }}>
            <div className="campaign-wallet row gx-4 gy-5">
              <div className="col-lg-6 ">
                <div className="campaign-wallet-card  ">
                  <div className="campaign-wallet-card-wrapper">
                    <div
                      style={{
                        padding: " 5px 10px",
                      }}
                    >
                      <IoGameControllerOutline
                        className="icon"
                        style={{ backgroundColor: "#56CCF2" }}
                      />
                      <h4
                        style={{
                          fontWeight: "700",
                          padding: "10px 0px 0px 20px",
                          fontSize: "22px",
                        }}
                      >
                        Campaigns
                      </h4>
                    </div>

                    <div style={{ padding: "10px 20px 10px 10px" }}>
                      <a
                        onClick={() => {
                          console.log("new");
                        }}
                        className="view-more"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                  <div className="dots-wrapper">
                    <div className="dots">
                      <div style={{ display: "flex", gap: "7px" }}>
                        <div
                          className="dot"
                          style={{ backgroundColor: "#27AE60" }}
                        ></div>
                        <span>Ongoing</span>
                      </div>
                      <span style={{ fontWeight: "700" }}>
                        {user?.campaigns?.ongoing}
                      </span>
                    </div>
                    <div className="dots">
                      <div style={{ display: "flex", gap: "7px" }}>
                        <div
                          className="dot"
                          style={{ backgroundColor: "#2F80ED" }}
                        ></div>
                        <span>Available</span>
                      </div>
                      <span style={{ fontWeight: "700" }}>
                        {user?.campaigns?.available}
                      </span>
                    </div>
                    <div className="dots">
                      <div style={{ display: "flex", gap: "7px" }}>
                        <div
                          className="dot"
                          style={{ backgroundColor: "#F2C94C" }}
                        ></div>
                        <span>Participated</span>
                      </div>
                      <span style={{ fontWeight: "700" }}>
                        {user?.campaigns?.completed}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="campaign-wallet-card  ">
                  <div
                    className="campaign-wallet-card-wrapper"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        padding: " 5px 10px",
                      }}
                    >
                      <IoWalletOutline
                        className="icon"
                        style={{ backgroundColor: "#9B51E0" }}
                      />
                      <h4
                        style={{
                          fontWeight: "700",
                          padding: "10px 0px 0px 20px",
                          fontSize: "22px",
                        }}
                      >
                        Wallet
                      </h4>
                    </div>
                    <div style={{ padding: "10px 20px 10px 10px" }}>
                      <a className="view-more">View More</a>
                    </div>
                  </div>
                  <div className="dots-wrapper">
                    <div className="dots">
                      <div style={{ display: "flex", gap: "7px" }}>
                        <div
                          className="dot"
                          style={{ backgroundColor: "#56CCF2" }}
                        ></div>
                        <span>Balance</span>
                      </div>
                      <span style={{ fontWeight: "700" }}>
                        ₹{user?.wallet?.balance}
                      </span>
                    </div>
                    <div className="dots">
                      <div style={{ display: "flex", gap: "7px" }}>
                        <div
                          className="dot"
                          style={{ backgroundColor: "#BB6BD9" }}
                        ></div>
                        <span>Last Stream</span>
                      </div>
                      <span style={{ fontWeight: "700" }}>
                        ₹{user?.wallet?.last_stream}
                      </span>
                    </div>
                    <div className="dots">
                      <div style={{ display: "flex", gap: "7px" }}>
                        <div
                          className="dot"
                          style={{ backgroundColor: "#333333" }}
                        ></div>
                        <span>Total Earned</span>
                      </div>
                      <span style={{ fontWeight: "700" }}>
                        ₹{user?.wallet?.earnings}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div
              className="you-might-like"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginBottom: "28px" }}>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  Campaigns Marketplace
                </span>
              </div>
              <div style={{ padding: "10px 0px 10px 10px" }}>
                <a className="view-more" onClick={() => navigate("/campaigns")}>
                  View More
                </a>
              </div>
            </div>
          </div>

          <div className="marketplace-card-container">
            {campaigns?.map((e) => (
              <Card key={e.id}>
                <Link to={`/register/?q=${e.id}`}>
                  <Card.Body className="st-campaign-card">
                    <div style={{ padding: "30px" }}>
                      <div className={`${e.status} mb-2`}>
                        <GoPrimitiveDot />
                        {e.status}
                      </div>
                      <span className="timer">
                        Ends in: {getCountdown(e?.end_date)}
                      </span>
                      <div className="streampala mt-5">
                        <div className="streampala-wrapper">
                          <h3>{e.name}</h3>
                          <h2>₹{e.budget}</h2>
                        </div>

                        <p>
                          {e.description}{" "}
                          <Link className="learn-more" to={`/register/?q=e.id`}>
                            Learn More
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
