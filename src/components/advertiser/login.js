import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Header from "../home/Header";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import eyeOpen from "../../img/eye-open.svg";
import eyeClose from "../../img/eye-close.svg";
import "../../styles/custom.css";
import { TokenContext } from "../../context/TokenContext";
import backArrow from "../../img/back-arrow.svg";


const initialState = {
  email: "",
  password: "",
};

const baseURL = process.env.REACT_APP_URL;

export default function AdvertiserLogin({ history }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState(false);
  const [showPasswordIconPress, setShowPasswordIconPress] = useState(false);
  const { setToken } = useContext(TokenContext);


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
      // let res = await axios.post(baseURL + "/auth/google/", {
      //   access_token: accesstoken,
      // });
      // console.log(res.data);
      // setToken(res.data.key);
      window.localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/home");

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
        // navigate("/create-ad-account");
        navigate("/home");
      } else {
        navigate("/main2");
      }
    } catch (error) {
      setError(true);

    }
  };
  const showPassword = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      setShowPasswordIconPress(true);
    } else {
      x.type = "password";
      setShowPasswordIconPress(false);
    }
  };
  return (
    <>
      {/* <Header user="none" /> */}
      <div className="home_btn">
        <Link to="/"><svg fill="#962E40" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" /></svg> </Link>
      </div>
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

            {error && <Alert variant="danger">Invalid credentials please check your email and password.</Alert>}
            <div className="form-group row" style={{ fontWeight: "700" }}>
              <label className="col-sm-3 col-form-label">Email:</label>
              <div className="col-lg-8 col-sm-10">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <br />

            <div className="form-group row" style={{ fontWeight: "700" }}>
              <label className="col-sm-3 col-form-label">Password:</label>
              <div className="col-lg-8 col-sm-10 eye_icon_container">
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <img className="eye_icon" src={(showPasswordIconPress) ? eyeClose : eyeOpen} alt="eye_image" onClick={showPassword} />

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
