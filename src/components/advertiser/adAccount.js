import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import "../../App.css";
import axios from "axios";
import Sidebar from "../home/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_URL;

export default function CreateAdAccount() {
  const navigate = useNavigate();
  const login = JSON.parse(window.localStorage.getItem("authData"));

  useEffect(() => {
    if (!login) {
      navigate("/ad/login");
    }
  }, []);

  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [adAccount, setAdAccount] = useState({
    name: "",
    brandname: "",
    brandlogo: "",
  });

  useEffect(() => {
    async function fetchRandomName() {
      const { data } = await axios.get(baseURL + "name-generate");
      setAdAccount({ ...adAccount, name: data.name });
    }

    fetchRandomName();
  }, []);

  const handleUploadFile = (e) => {
    setAdAccount({ ...adAccount, brandlogo: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("brand_logo", adAccount.brandlogo);
    formData.set("name", adAccount.name);
    formData.set("brand_name", adAccount.brandname);
    formData.set("owner", 3);

    const { data } = await axios.post(baseURL + "ad-accounts/", formData);
    console.log(data); // take us to manage ad accounts page
  };

  return (
    <div>
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
        <form style={{ marginTop: "50px" }} onSubmit={submitHandler}>
          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label"
              style={{ fontWeight: "700" }}
            >
              Ad Account Name:
            </label>
            <div className="col-lg-7 col-sm-10">
              <input
                type="text"
                value={adAccount.name}
                className="form-control"
                onChange={(e) =>
                  setAdAccount({ ...adAccount, name: e.target.value })
                }
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label"
              style={{ fontWeight: "700" }}
            >
              Brand Name:
            </label>
            <div className="col-lg-7 col-sm-10">
              <input
                type="text"
                value={adAccount.brandname}
                className="form-control"
                onChange={(e) =>
                  setAdAccount({ ...adAccount, brandname: e.target.value })
                }
              />
            </div>
          </div>
          <br />

          <div className="form-group row">
            <label
              className="col-sm-3 col-form-label"
              style={{ fontWeight: "700" }}
            >
              Brand Logo:
            </label>
            <div className="col-lg-7 col-sm-10">
              <input
                type="file"
                className="form-control"
                onChange={handleUploadFile}
              />
            </div>
          </div>
          <br />

          <div className="d-flex flex-direction-row justify-content-center">
            <button className="view-more-outlined" type="submit">
              Cancel
            </button>
            <button className="view-more" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
