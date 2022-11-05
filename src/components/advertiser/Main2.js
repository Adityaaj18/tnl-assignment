import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import Sidebar from "../home/sidebar/Sidebar";
import { BsPlusCircle, BsArrowRightCircle } from "react-icons/bs";
import { AiFillCaretDown, AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import "../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = process.env.REACT_APP_URL;

export default function Main2({ history }) {
  const [campaigns, setCampaigns] = useState([]);
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  useEffect(() => {
    async function fetchCampaignData() {
      const { data } = await axios.get(baseURL + "/campaigns/");
      setCampaigns(data);
    }

    fetchCampaignData();
  }, []);

  return (
    <div>
      <Header menuIconClick={menuIconClick} />
      <Sidebar menuCollapse={menuCollapse} />
      <div className="main-content">
        <div className="" style={{}}>
          <div style={{ textAlign: "center" }}>
            <Link to="/setup">
              <BsPlusCircle
                style={{
                  fontSize: "90px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  fontWeight: "700",
                  color: "#9B51E0",
                  cursor: "pointer",
                }}
              />
            </Link>
            <h4
              style={{
                color: "#962E40",
                fontSize: "24px",
                marginBottom: "5px",
              }}
            >
              Start a New Campaign
            </h4>
            <h5 style={{ color: "#9B51E0", fontSize: "16px" }}>
              or continue where you left off
            </h5>
          </div>
          <div style={{ padding: "0px 20px", marginTop: "90px" }}>
            <h5 style={{ fontWeight: "700", fontSize: "20px" }}>
              Your Campaign Summary:
            </h5>
            <div className="row gx-5 gy-4">
              <div className="col-lg-6 col-md-12">
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "35px",
                  }}
                >
                  <div style={{ borderBottom: "3px solid #f2f2f2" }}>
                    <div
                      style={{
                        fontSize: "20px",
                        padding: "15px 30px",
                        display: "flex",
                        color: "#9B51E0",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <HiOutlineSpeakerphone
                          style={{
                            marginTop: "5px",
                            marginRight: "10px",
                            fontSize: "25px",
                          }}
                        />
                        <p style={{ margin: "0px" }}>All Campaigns</p>
                      </div>
                      <FiChevronDown
                        style={{
                          fontSize: "25px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className="col-lg-6"
                      style={{ padding: "30px 20px 20px 20px" }}
                    >
                      <div
                        style={{
                          borderRight: "3px solid #f2f2f2",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "30px",
                            color: "#962E40",
                            fontWeight: "bold",
                          }}
                        >
                          ####
                        </p>
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "18px",
                            color: "#6F6F6F",
                          }}
                        >
                          Campaigns
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      style={{ padding: "30px 20px 20px 20px" }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "30px",
                            margin: "0px",
                            color: "#962E40",
                            fontWeight: "bold",
                          }}
                        >
                          ####
                        </p>
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "18px",
                            color: "#6F6F6F",
                          }}
                        >
                          Views
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "35px",
                  }}
                >
                  <div style={{ borderBottom: "3px solid #f2f2f2" }}>
                    <div
                      style={{
                        fontSize: "20px",
                        padding: "15px 30px",
                        display: "flex",
                        color: "#9B51E0",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <RiTimerLine
                          style={{
                            marginTop: "5px",
                            marginRight: "10px",
                            fontSize: "25px",
                          }}
                        />
                        <p style={{ margin: "0px" }}>All Time</p>
                      </div>
                      <FiChevronDown
                        style={{
                          fontSize: "25px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className="col-lg-6"
                      style={{ padding: "30px 20px 20px 20px" }}
                    >
                      <div
                        style={{
                          borderRight: "3px solid #f2f2f2",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "30px",
                            color: "#962E40",
                            fontWeight: "bold",
                          }}
                        >
                          ####
                        </p>
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "18px",
                            color: "#6F6F6F",
                          }}
                        >
                          Streamers
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      style={{ padding: "30px 20px 20px 20px" }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "30px",
                            margin: "0px",
                            color: "#962E40",
                            fontWeight: "bold",
                          }}
                        >
                          ####
                        </p>
                        <p
                          style={{
                            margin: "0px",
                            fontSize: "18px",
                            color: "#6F6F6F",
                          }}
                        >
                          Clicks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <a href="#">
                See analytics <BsArrowRightCircle />
              </a>
            </div>
            <h5 style={{ fontWeight: "700" }}>Your Campaigns</h5>
            <div className="row gx-5 gy-4">
              <div className="col-lg-6">
                <div>
                  <div style={{ borderBottom: "1px solid #9B51E0" }}>
                    <div
                      style={{
                        fontSize: "20px",
                        padding: "15px 30px",
                        display: "flex",
                        color: "#9B51E0",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <HiOutlineSpeakerphone
                          style={{
                            marginTop: "5px",
                            marginRight: "10px",
                            fontSize: "25px",
                          }}
                        />
                        <p style={{ margin: "0px" }}>All Campaigns</p>
                      </div>
                      <FiChevronDown
                        style={{
                          fontSize: "25px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <div style={{ borderBottom: "1px solid #9B51E0" }}>
                    <div
                      style={{
                        fontSize: "20px",
                        padding: "15px 30px",
                        display: "flex",
                        color: "#9B51E0",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <RiTimerLine
                          style={{
                            marginTop: "5px",
                            marginRight: "10px",
                            fontSize: "25px",
                          }}
                        />
                        <p style={{ margin: "0px" }}>All Time</p>
                      </div>
                      <FiChevronDown
                        style={{
                          fontSize: "25px",
                          marginTop: "5px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <table style={{ border: "none" }}>
                <thead>
                  <th>Campaign Name</th>
                  <th>Status</th>
                  <th>Dates</th>
                  <th>Budget</th>
                  <th>Spent</th>
                  <th>Views</th>
                  <th>Clicks</th>
                </thead>
                <tbody>
                  {campaigns?.map((e, idx) => (
                    <tr key={idx}>
                      <td>{e.name}</td>
                      <td>
                        <span className={`${e.status}`}>
                          <GoPrimitiveDot />
                          {e.status}
                        </span>
                      </td>
                      <td>
                        {e.start_date} - {e.end_date}
                      </td>
                      <td>{e.budget}</td>
                      <td>####</td>
                      <td>####</td>
                      <td>####</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
