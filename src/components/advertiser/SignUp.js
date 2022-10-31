import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import { Alert, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  organization: "",
  organizationType: "",
  password: "",
  newsletter: false,
};

const baseURL = process.env.REACT_APP_URL;

export default function SignUp() {
  const navigate = useNavigate();
  const [orgType, setOrgType] = useState([]);
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchOrganizations() {
      const { data } = await axios.get(baseURL + "org-types/");
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
      org_type: user.organizationType,
      password: user.password,
      newsletter: user.newsletter,
    };

    try {
      await axios.post(baseURL + "advertisers/", bodyObj);
      navigate("/ad/login");
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
            {error && (
              <Alert variant="danger">Phone number already exists.</Alert>
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
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />
            <div className="form-group row" style={{ fontWeight: "700" }}>
              <label className="col-sm-3 col-form-label">Phone No:</label>
              <div className="col-lg-8 col-sm-10">
                <input
                  className="form-control"
                  type="tel"
                  name="phoneNumber"
                  onChange={handleChange}
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
                <Form.Select name="organizationType" onChange={handleChange}>
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
                <div className="d-flex justify-content-center">
                  <button className="view-more" type="submit">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
