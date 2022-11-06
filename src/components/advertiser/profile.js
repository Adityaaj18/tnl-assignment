import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import Sidebar from "../home/sidebar/Sidebar";
import axios from "axios";
import Loading from "../Loading";
import { Form } from "react-bootstrap";

const baseURL = process.env.REACT_APP_URL;

const AdvertiserProfile = () => {
  const thisUser = JSON.parse(window.localStorage.getItem("authData"));
  const config = {
    headers: { Authorization: `Token ${thisUser?.token}` },
  };

  const [user, setUser] = useState();
  const [editUser, setEditUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    async function fetchProfileData() {
      const { data } = await axios.get(baseURL + `/users/user-info/`, config);
      setUser(data);
      setIsLoading(false);
    }

    fetchProfileData();
  }, []);

  const [menuCollapse, setMenuCollapse] = useState(true);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const handleEditingOn = () => {
    setEditUser({
      business_name: user.business_name,
      linkedin_url: user.linkedin_url,
      email: user.email,
      phone: user.phone,
      email_alert: user.email_alert,
    });

    setIsEdit(true);
  };

  const updateProfile = async () => {
    const { data } = await axios.patch(
      baseURL + `advertisers/${thisUser?.user_id}/`,
      editUser,
      config
    );
    setUser(data);
    setIsEdit(false);
  };

  return (
    <div>
      <Header menuIconClick={menuIconClick} />
      <Sidebar menuCollapse={menuCollapse} />
      <div className="main-content">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {isEdit ? (
              <div className="profile-section">
                <div>
                  <div className="profile-card-wrapper">
                    <div className=" ">
                      <div className="">
                        <div style={{ height: "170px" }}>
                          <img
                            src={require("../../img/profile-bg.png")}
                            alt=""
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "35px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            backgroundColor: "#fff",
                            marginTop: "-30px",
                            borderBottomLeftRadius: "35px",
                            borderBottomRightRadius: "35px",
                            border: "1px solid #d9c0f0",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <div style={{ display: "flex" }}>
                                <img
                                  src={require("../../img/johndoe.png")}
                                  alt=""
                                  style={{
                                    width: "182px",
                                    height: "182px",
                                    marginTop: "-40px",
                                    marginLeft: "80px",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: "50px",
                                }}
                              >
                                <div style={{ display: "flex" }}>
                                  <h1
                                    style={{
                                      fontSize: "36px",
                                      fontWeight: "700",
                                      padding: "30px",
                                      color: "#9B51E0",
                                    }}
                                  >
                                    {user?.full_name}
                                  </h1>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                margin: "80px 20px 20px 20px",
                              }}
                            >
                              <div className="profile-buttons">
                                <button
                                  onClick={() => setIsEdit(false)}
                                  className="cancel"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={updateProfile}
                                  id="edit-profile"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="profile-body"
                        style={{ paddingTop: "44px" }}
                      >
                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">Username</div>
                          <div className="col-lg-9">
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                backgroundColor: "#fff",
                                borderRadius: "6px",
                                border: "1px solid #d9c0f0",
                              }}
                            >
                              <input
                                type="text"
                                value={editUser.business_name}
                                onChange={(e) =>
                                  setEditUser({
                                    ...editUser,
                                    business_name: e.target.value,
                                  })
                                }
                                style={{
                                  border: "none",
                                  padding: "5px",
                                  width: "100%",
                                  borderRadius: "6px",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row data-row gy-3">
                          <div className="col-lg-2 profile-data">Website</div>
                          <div className="col-lg-9">
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                backgroundColor: "#fff",
                                borderRadius: "6px",
                                border: "1px solid #d9c0f0",
                              }}
                            >
                              <div
                                style={{
                                  padding: "2px 118px 2px 29px",
                                  borderRight: "1px solid #f2f2f2",
                                }}
                              >
                                <img
                                  src={require("../../img/linkedin.png")}
                                  alt=""
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    fontWeight: "700",
                                  }}
                                />
                              </div>
                              <input
                                type="text"
                                value={editUser.linkedin_url}
                                onChange={(e) =>
                                  setEditUser({
                                    ...editUser,
                                    linkedin_url: e.target.value,
                                  })
                                }
                                style={{
                                  border: "none",
                                  padding: "5px",
                                  width: "100%",
                                  borderRadius: "6px",
                                }}
                              />
                            </div>
                          </div>

                          <div
                            className="col-lg-2 profile-data"
                            style={{ color: "#f2e9fa" }}
                          >
                            .
                          </div>
                        </div>
                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">Email</div>
                          <div className="col-lg-9">
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                backgroundColor: "#fff",
                                borderRadius: "6px",
                                border: "1px solid #d9c0f0",
                              }}
                            >
                              <label
                                style={{
                                  fontSize: "14px",
                                  padding: "5px 68px 5px 29px",
                                  borderRight: "1px solid #f2f2f2",
                                  color: "#6F6F6F",
                                }}
                              >
                                gmail.com
                              </label>
                              <input
                                type="text"
                                value={editUser.email}
                                onChange={(e) =>
                                  setEditUser({
                                    ...editUser,
                                    email: e.target.value,
                                  })
                                }
                                style={{
                                  border: "none",
                                  padding: "5px",
                                  width: "100%",
                                  borderRadius: "6px",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">Phone</div>
                          <div className="col-lg-9">
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                backgroundColor: "#fff",
                                borderRadius: "6px",
                                border: "1px solid #d9c0f0",
                              }}
                            >
                              <label
                                style={{
                                  fontSize: "14px",
                                  padding: "5px 120px 5px 29px",
                                  borderRight: "1px solid #f2f2f2",
                                  color: "#6F6F6F",
                                }}
                              >
                                +91
                              </label>
                              <input
                                type="text"
                                value={editUser.phone}
                                onChange={(e) =>
                                  setEditUser({
                                    ...editUser,
                                    phone: e.target.value,
                                  })
                                }
                                style={{
                                  border: "none",
                                  padding: "5px",
                                  width: "100%",
                                  borderRadius: "6px",
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">
                            Email Alert
                          </div>
                          <div className="col-lg-9">
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                backgroundColor: "#fff",
                                borderRadius: "6px",
                                border: "1px solid #d9c0f0",
                              }}
                            >
                              <Form.Check
                                type="switch"
                                id="custom-switch"
                                style={{ fontSize: "22px" }}
                                checked={editUser?.email_alert}
                                onChange={(e) =>
                                  setEditUser({
                                    ...editUser,
                                    email_alert: e.target.checked,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="profile-section">
                <div>
                  <div className="profile-card-wrapper  ">
                    <div className=" ">
                      <div className="">
                        <div style={{ height: "170px" }}>
                          <img
                            src={require("../../img/profile-bg.png")}
                            alt=""
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "35px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            backgroundColor: "#fff",
                            marginTop: "-30px",
                            borderBottomLeftRadius: "35px",
                            borderBottomRightRadius: "35px",
                            border: "1px solid #9B51E0",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <div style={{ display: "flex" }}>
                                <img
                                  src={require("../../img/johndoe.png")}
                                  alt=""
                                  style={{
                                    width: "182px",
                                    height: "182px",
                                    marginTop: "-40px",
                                    marginLeft: "80px",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: "50px",
                                }}
                              >
                                <div style={{ display: "flex" }}>
                                  <h1
                                    style={{
                                      fontSize: "36px",
                                      fontWeight: "700",
                                      borderRight: "1px solid #56CCF2",
                                      padding: "30px",
                                      color: "#9B51E0",
                                    }}
                                  >
                                    {user?.full_name}
                                  </h1>

                                  <div
                                    style={{
                                      padding: "5px",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      style={{
                                        padding: "5px",
                                        width: "36px",
                                      }}
                                      src={require("../../img/linkedin.png")}
                                      alt=""
                                    />
                                    {user?.linkedin_url}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                margin: "80px 20px 20px 20px",
                              }}
                            >
                              <button
                                onClick={handleEditingOn}
                                id="edit-profile"
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profile-body">
                        <div className="row">
                          <div style={{ color: "#fff" }} className="col-lg-2">
                            .
                          </div>
                        </div>

                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">
                            Organization
                          </div>
                          <div className="col-lg-10">{user?.business_name}</div>
                        </div>
                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">
                            Work Email
                          </div>
                          <div className="col-lg-10">{user?.email}</div>
                        </div>
                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">Phone</div>
                          <div className="col-lg-10">(+91){user?.phone}</div>
                        </div>
                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">
                            Email Alert
                          </div>
                          <div className="col-lg-10">
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              style={{ fontSize: "22px" }}
                              checked={user?.email_alert}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvertiserProfile;
