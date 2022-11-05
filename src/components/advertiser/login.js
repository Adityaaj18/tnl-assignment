import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const baseURL = process.env.REACT_APP_URL;

export default function AdvertiserLogin({ history }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = JSON.parse(window.localStorage.getItem("authData"));

  useEffect(() => {
    if (login) {
      navigate("/create-ad-account");
    }
  }, [login]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const obj = {
        username: user.email,
        password: user.password,
      };

      const { data } = await axios.post(baseURL + "/auth-token/", obj);

      window.localStorage.setItem("authData", JSON.stringify(data));

      const config = {
        headers: { Authorization: `Token ${data.token}` },
      };

      const allAccounts = await axios.get(
        baseURL + "/ad-accounts/get/",
        config
      );

      window.localStorage.setItem(
        "adAccounts",
        JSON.stringify(allAccounts.data)
      );

      const temp = allAccounts?.data.filter((e) => {
        if (e.is_default) {
          return e;
        }
      });

      window.localStorage.setItem("activeAccount", JSON.stringify(temp));

      if (allAccounts.data?.length === 0) {
        navigate("/create-ad-account");
      } else {
        navigate("/main2");
      }
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <Header user="none" />
      <div className="main-content">
        <div className="welcome">
          <div>
            <h1>Welcome to StreamPala </h1>
            <p>Please share these details to set up your advertiser account:</p>
          </div>
          <img
            src={require("../../img/welcome-img.png")}
            alt=""
            style={{ width: "60px", height: "60px" }}
          />
        </div>
        <form
          className="signup-form"
          style={{ display: "flex", justifyContent: "center" }}
          onSubmit={submitHandler}
        >
          <div className="col-lg-8" style={{ marginTop: "50px" }}>
            {error && <Alert variant="danger">Invalid credential.</Alert>}
            <div className="form-group row" style={{ fontWeight: "700" }}>
              <label className="col-sm-3 col-form-label">Email:</label>
              <div className="col-lg-8 col-sm-10">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />

            <div className="form-group row" style={{ fontWeight: "700" }}>
              <label className="col-sm-3 col-form-label">Password:</label>
              <div className="col-lg-8 col-sm-10">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <div className="d-flex justify-content-center">
                <button className="view-more" type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
