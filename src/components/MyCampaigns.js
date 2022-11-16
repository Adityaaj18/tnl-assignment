import React, { useState, useEffect } from "react";
import Header from "./home/Header";
import Sidebar from "./home/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import { BsChevronDown } from "react-icons/bs";
import Loading from "./Loading";
import styled from "styled-components";
import "../styles/mycampaigns.css";
import { Card, Dropdown } from "react-bootstrap";
import { GoPrimitiveDot } from "react-icons/go";
import { getCountdown } from "../utils/countdown";

const baseURL = process.env.REACT_APP_URL;

const MyCampaigns = () => {
  const navigate = useNavigate();
  const [menuCollapse, setMenuCollapse] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [user, setUser] = useState();
  const [campaigns, setCampaigns] = useState([]);
  const [myCampaigns, setMyCampaigns] = useState([]);

  const Tab = styled.button`
    font-size: 15px;
    padding: 10px 60px;
    cursor: pointer;
    color: "#C1ABB5";
    background: "#FDF6FF";
    border: 0;
    outline: 0;
    ${({ active }) =>
      active &&
      `
    border-bottom:;
    background: white;
    opacity: 1;
    color: #941751;
    font-weight: bold;
    
  `}
  `;
  const ButtonGroup = styled.div`
    display: flex;
  `;
  const types = ["All", "Upcoming", "Active", "Completed"];
  const [active, setActive] = useState(types[0]);

  const token = JSON.parse(window.localStorage.getItem("token"));
  const config = {
    headers: { Authorization: `Token ${token}` },
  };

  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    if (!token) {
      window.location.replace("/");
    } else {
      axios
        .get(baseURL + "/campaigns/", {
          config,
        })
        .then((res) => {
          setCampaigns(res.data);
          console.log(res.data);
        });
    }
  }, []);

  useEffect(() => {
    async function fetchMyProfile() {
      const { data } = await axios.get(baseURL + "/users/user-info/", config);
      setUser(data);
    }
    fetchMyProfile();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        let endPoint = baseURL + `/users/${user?.id}/campaigns/`;
        if (sortType === "dt-up") {
          endPoint += "?sort=dt-up";
        } else if (sortType === "asc") {
          endPoint += "?sort=asc";
        }
        const { data } = await axios.get(endPoint, config);
        console.log(data);
        setMyCampaigns(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
        // console.log(user)
      }
    };
    if (user) {
      fetchData();
    }
  }, [user, sortType]);

  return (
    <div>
      <Header menuIconClick={menuIconClick} />
      <Sidebar menuCollapse={menuCollapse} />
      <div className="main-content">
        <div>
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
                  All Campaigns
                </span>
              </div>
              <div style={{ padding: "10px 0px 10px 10px" }}>
                <a className="view-more" onClick={() => navigate("/campaigns")}>
                  View More
                </a>
              </div>
            </div>
            <div className="marketplace-card-container">
              {campaigns.slice(0, 2).map((e) => (
                <Card key={e.id}>
                  <Link
                    to={`/register/?q=${e.id}`}
                    style={{ textDecoration: "none" }}
                  >
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
                            <Link
                              className="learn-more"
                              to={`/register/?q=e.id`}
                            >
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
          {isLoading ? (
            <Loading />
          ) : (
            <div className="my-campaigns">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",

                      marginBottom: "10px",
                    }}
                  >
                    My Campaigns
                  </span>
                </div>
                <div
                  style={{
                    padding: "10px 15px",
                    border: "1px solid #962E40",
                    fontSize: "16px",
                    borderRadius: "35px",
                    color: " #962E40",
                  }}
                >
                  <Dropdown>
                    <Dropdown.Toggle className="sorting-option">
                      <span style={{ fontWeight: "600" }}>
                        Sort By:{" "}
                        {sortType === "default"
                          ? "Recent Campaigns"
                          : sortType === "dt-up"
                          ? "Date Uploaded"
                          : sortType === "asc"
                          ? "Old to New"
                          : ""}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: "100%" }}>
                      <Dropdown.Item
                        className="dropdown-options"
                        onClick={() => setSortType("asc")}
                      >
                        Old to New
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-options"
                        onClick={() => setSortType("dt-up")}
                      >
                        Date Uploaded
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-options"
                        onClick={() => setSortType("default")}
                      >
                        Recent Campaigns
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          )}
        </div>
        <ButtonGroup className="tabs">
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </Tab>
          ))}
        </ButtonGroup>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            borderTopRightRadius: "15px",
          }}
        >
          {active === "All" &&
            myCampaigns.map((campaign) => (
              <div className="active-tab" style={{ marginTop: "10px" }}>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="d-flex">
                      <img
                        src={require("../img/banner.png")}
                        alt=""
                        className="active-tab-img"
                      />
                      <h6 className="col-lg-6" style={{ fontWeight: "bold" }}>
                        {campaign.name}
                      </h6>

                      <div className="d-flex">
                        <div className={`${campaign.status}`}></div>
                        <h6 style={{ padding: "2px" }}>{campaign.status}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 view-details ">
                    <h6>
                      <Link to={`/register/?q=${campaign.id}`}>
                        view details
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          {active === "Upcoming" && (
            <div className="">
              {" "}
              <div className="">
                {myCampaigns.map(
                  (campaign) =>
                    campaign.status === "Upcoming" && (
                      <div>
                        {" "}
                        <div
                          className="active-tab"
                          style={{ marginTop: "10px" }}
                        >
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="d-flex">
                                <img
                                  src={require("../img/banner.png")}
                                  alt=""
                                  className="active-tab-img"
                                />
                                <h6
                                  className="col-lg-6"
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                >
                                  {campaign.name}
                                </h6>
                                <h6>{campaign.status}</h6>
                                <div></div>
                              </div>
                            </div>
                            <div className="col-lg-4 view-details">
                              <h6>
                                <Link to={`/register/?q=${campaign.id}`}>
                                  view details
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          )}
          {active === "Active" && (
            <div className="">
              {" "}
              <div className="">
                {myCampaigns.map(
                  (campaign) =>
                    campaign.status === "Active" && (
                      <div>
                        {" "}
                        <div
                          className="active-tab"
                          style={{ marginTop: "10px" }}
                        >
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="d-flex">
                                <img
                                  src={require("../img/banner.png")}
                                  alt=""
                                  className="active-tab-img"
                                />
                                <h6
                                  className="col-lg-6"
                                  style={{
                                    fontWeight: "bold",
                                  }}
                                >
                                  {campaign.name}
                                </h6>
                                <h6>{campaign.status}</h6>
                                <div></div>
                              </div>
                            </div>
                            <div className="col-lg-4 view-details">
                              <h6>
                                <Link to={`/register/?q=${campaign.id}`}>
                                  view details
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          )}
          {active === "Completed" && (
            <div className="">
              {myCampaigns.map(
                (campaign) =>
                  campaign.status === "Completed" && (
                    <div>
                      {" "}
                      <div className="active-tab" style={{ marginTop: "10px" }}>
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="d-flex">
                              <img
                                src={require("../img/banner.png")}
                                alt=""
                                className="active-tab-img"
                              />
                              <h6
                                className="col-lg-6"
                                style={{ fontWeight: "bold" }}
                              >
                                {campaign.name}
                              </h6>
                              <h6>{campaign.status}</h6>
                              <div></div>
                            </div>
                          </div>
                          <div className="col-lg-4 view-details">
                            <h6>
                              <Link to={`/register/?q=${campaign.id}`}>
                                view details
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCampaigns;
