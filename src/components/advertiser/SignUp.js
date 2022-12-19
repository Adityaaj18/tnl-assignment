import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import { Alert, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../../src/styles/custom.css";
import eyeOpen from "../../img/eye-open.svg";
import eyeClose from "../../img/eye-close.svg";


const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  organization: "",
  advertiserType: 1,
  password: "",
  newsletter: false,
};

const baseURL = process.env.REACT_APP_URL;

export default function SignUp() {
  const navigate = useNavigate();
  const login = JSON.parse(window.localStorage.getItem("authData"));
  useEffect(() => {
    if (login) {
      navigate("/main2");
    }
  }, []);

  const [orgType, setOrgType] = useState([]);
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState(false);
  const [regexError, setRegexError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [acceptTNC, setAcceptTNC] = useState(false);
  const [showPasswordIconPress, setShowPasswordIconPress] = useState(false);

  useEffect(() => {
    async function fetchOrganizations() {
      const { data } = await axios.get(baseURL + "/org-types/");
      setOrgType(data);
    }

    fetchOrganizations();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const bodyObj = {
      full_name: user.name,
      email: user.email,
      phone: user.phoneNumber,
      business_name: user.organization,
      advertiser_type: user.advertiserType,
      password: user.password,
      newsletter: user.newsletter,
    };

    try {
      // if (acceptTNC) {
      if (true) {
        await axios.post(baseURL + "/advertisers/", bodyObj);
        navigate("/ad/login");
      } else {
        console.log("please accept tnc");
      }
    } catch (error) {
      setError(true);
    }
  };

  const RegexValidation = () => {
    var phNo = document.getElementById("ph-no").value;
    var password = document.getElementById("password").value;
    var phNoRegex = /[6-9]\d{9}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$/;
    if (!phNoRegex.test(phNo)) {
      setRegexError(1);
      setErrMessage("Phone number should contain 10 numbers and valid and not contain country code")
    } else if (!passwordRegex.test(password)) {
      setRegexError(1);
      setErrMessage("Password should contain atleast one capital,one number and minimum length should be 8")

    }

    else {
      setRegexError(false);
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
            {error && (
              <Alert variant="danger">Phone number already exists.</Alert>
            )}
            {regexError && (
              <Alert variant="danger">{errMessage}</Alert>
            )}
            <div className="form-group row">
              <label
                className="col-sm-3 col-form-label"
                style={{ fontWeight: "700" }}
              >
                Name:
              </label>
              <div className="col-lg-8 col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div className="form-group row" style={{ fontWeight: "700" }}>
              <label className="col-sm-3 col-form-label">Work Email:</label>
              <div className="col-lg-8 col-sm-10">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z]+.com+$"
                />
              </div>
            </div>
            <br />
            <div className="form-group row" style={{ fontWeight: "700" }}>
              <label className="col-sm-3 col-form-label">Phone No:</label>
              <div className="col-lg-8 col-sm-10">
                <input
                  className="form-control"
                  id="ph-no"
                  type="tel"
                  name="phoneNumber"
                  required
                  onChange={handleChange}
                  pattern="^[6-9]\d{9}$"
                />
              </div>
            </div>
            <br />
            <div className="form-group row" style={{ fontWeight: "700" }}>
              <label className="col-sm-3 col-form-label">Organization:</label>
              <div className="col-lg-8 col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  name="organization"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div className="form-group row" style={{ fontWeight: "700" }}>
              <label className="col-sm-3 col-form-label">
                Organization Type:
              </label>
              <div className="col-lg-8 col-sm-10">
                <Form.Select
                  name="advertiserType"
                  onChange={handleChange}
                  value={user.advertiserType}
                  required
                >
                  {orgType?.map((e, idx) => (
                    <option key={idx} value={e.value}>
                      {e.name}
                    </option>
                  ))}
                </Form.Select>
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
                  required
                  onChange={handleChange}
                  pattern="^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{8,15})$"
                />
                <img className="eye_icon" src={(showPasswordIconPress) ? eyeClose : eyeOpen} alt="eye_image" onClick={showPassword} />
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <div>
                <div className="d-flex">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setUser({ ...user, newsletter: e.target.checked })
                    }
                  />
                  <p
                    style={{
                      color: "#9B51E0",
                      marginBottom: "0px",
                      paddingLeft: "5px",
                    }}
                  >
                    {" "}
                    Sign me up for the Live! Live Revolution Newsletter
                  </p>
                </div>
                <div className="d-flex">
                  <input
                    type="checkbox"
                    onChange={(e) => setAcceptTNC(e.target.checked)}
                    required
                  />
                  <p
                    style={{
                      color: "#9B51E0",
                      marginBottom: "0px",
                      paddingLeft: "5px",
                    }}
                  >
                    {" "}
                    Accept Terms and Conditions
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="view-more" type="submit" onClick={RegexValidation}>
                    Sign Up
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  already have an account?{" "}
                  <Link to="/ad/login" style={{ color: "#9B51E0" }}>
                    {" "}
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
