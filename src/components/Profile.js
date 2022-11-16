import React, { useState, useEffect } from "react";
import Header from "./home/Header";
import Sidebar from "./home/sidebar/Sidebar";
import axios from "axios";
import Loading from "./Loading";

const baseURL = process.env.REACT_APP_URL;

const Profile = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const token = JSON.parse(window.localStorage.getItem("token"));
  const config = {
    headers: { Authorization: `Token ${token}` },
  };

  useEffect(() => {
    async function fetchProfileData() {
      const { data } = await axios.get(baseURL + `/users/user-info/`, config);
      setUser(data);
      setIsLoading(false);
    }

    fetchProfileData();
  }, []);

  const [editUser, setEditUser] = useState();

  const handleEditingOn = () => {
    setEditUser({
      ...editUser,
      full_name: user.full_name,
      username: user.username,
      phone: user.phone,
      bio: user.bio,
      discord_url: user.discord_url,
    });
    setIsEdit(true);
  };

  const updateUserProfile = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        baseURL + `/users/${user.id}/`,
        editUser
      );
      setUser(data);
      setIsEdit(false);
    } catch (err) {
      console.log(err);
    }
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
                            src={require("../img/profile-bg.png")}
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
                                  src={require("../img/johndoe.png")}
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
                                    {user.full_name}
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
                                  onClick={updateUserProfile}
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
                          <div className="col-lg-2 profile-data">Full name</div>
                          <div className="col-lg-9">
                            <input
                              type="text"
                              style={{
                                border: "1px solid #d9c0f0",
                                padding: "10px",
                                width: "100%",
                                borderRadius: "6px",
                              }}
                              value={editUser.full_name}
                            />
                          </div>
                        </div>

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
                              <label
                                style={{
                                  fontSize: "14px",
                                  padding: "5px 29px",
                                  borderRight: "1px solid #f2f2f2",
                                  color: "#6F6F6F",
                                }}
                              >
                                streampala.com/
                              </label>
                              <input
                                type="text"
                                style={{
                                  border: "none",
                                  padding: "5px",
                                  width: "100%",
                                  borderRadius: "6px",
                                }}
                                value={editUser.username}
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
                                  src={require("../img/dc-logo.png")}
                                  alt=""
                                  style={{
                                    width: "30px",
                                    height: "22px",
                                    fontWeight: "700",
                                  }}
                                />
                              </div>
                              <input
                                type="text"
                                style={{
                                  border: "none",
                                  padding: "5px",
                                  width: "100%",
                                  borderRadius: "6px",
                                }}
                                value={editUser.discord_url}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">Bio</div>
                          <div className="col-lg-9">
                            <textarea
                              type="text"
                              style={{
                                width: "100%",
                                height: "150px",
                                padding: "10px",
                                borderRadius: "6px",
                                border: "1px solid #d9c0f0",
                              }}
                              value={editUser.bio}
                            />
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
                                style={{
                                  border: "none",
                                  padding: "5px",
                                  width: "100%",
                                  borderRadius: "6px",
                                }}
                                value={editUser.phone}
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
                            src={require("../img/profile-bg.png")}
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
                                  src={require("../img/johndoe.png")}
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
                                    {user.full_name}
                                  </h1>
                                  <ul
                                    style={{
                                      listStyle: "none",
                                      padding: "20px",
                                    }}
                                  >
                                    <li>
                                      <div>
                                        <img
                                          style={{
                                            padding: "5px",
                                            width: "36px",
                                          }}
                                          src={require("../img/yt-logo.png")}
                                          alt=""
                                        />
                                        {user?.yt_channel}
                                      </div>
                                    </li>
                                    <li>
                                      <div>
                                        <img
                                          style={{
                                            width: "36px",
                                            height: "30px",

                                            padding: "6px",
                                          }}
                                          src={require("../img/dc-logo.png")}
                                          alt=""
                                        />
                                        {user?.discord_url}
                                      </div>
                                    </li>
                                  </ul>
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
                          <div className="col-lg-2 profile-data">Username</div>
                          <div className="col-lg-10">{user?.username}</div>
                        </div>
                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">Your bio</div>
                          <div className="col-lg-10">{user?.bio}</div>
                        </div>
                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">Email</div>
                          <div className="col-lg-10">{user?.email}</div>
                        </div>
                        <div className="row data-row">
                          <div className="col-lg-2 profile-data">Phone</div>
                          <div className="col-lg-10">
                            {user?.phone ? "+91" + user.phone : ""}
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

export default Profile;
