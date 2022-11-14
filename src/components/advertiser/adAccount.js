import React, { useState, useEffect } from "react";
import Header from "../home/Header";
import "../../App.css";
import axios from "axios";
import Sidebar from "../home/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_URL;
const mediaURL = process.env.REACT_APP_MEDIA;

export default function CreateAdAccount() {
  const navigate = useNavigate();
  const login = JSON.parse(window.localStorage.getItem("authData"));
  const accounts = JSON.parse(window.localStorage.getItem("adAccounts"));

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const src = params.get("q");
  const accId = params.get("id");

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
  const [accountIndex, setAccountIndex] = useState(-1);

  useEffect(() => {
    let temp;
    if (accounts) {
      temp = accounts.length + 1;
    } else {
      temp = 1;
    }
    setAdAccount({ ...adAccount, name: `Ad Account ${temp}` });
  }, []);

  useEffect(() => {
    if (src === "edit") {
      if (accId < 0 || accId > accounts.length) {
        navigate("/adAccount-management");
      } else {
        accounts.some((e, idx) => {
          if (e.id == accId) {
            setAccountIndex(idx);
            setAdAccount({
              ...adAccount,
              name: e.name,
              brandname: e.brand_name,
            });

            return true;
          }
        });
      }
    }
  }, [src]);

  const handleUploadFile = (e) => {
    setAdAccount({ ...adAccount, brandlogo: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", adAccount.name);
    formData.set("brand_name", adAccount.brandname);

    if (src === "edit") {
      if (adAccount.brandlogo) {
        formData.append("brand_logo", adAccount.brandlogo);
      }

      const { data } = await axios.patch(
        baseURL + `/ad-accounts/${accId}/`,
        formData
      );

      let obj = {};
      if (accountIndex !== -1) {
        for (const key in data) {
          obj[key] = data[key];
        }
      }

      accounts[accountIndex] = obj;
      localStorage.setItem("adAccounts", JSON.stringify(accounts));

      navigate("/adAccount-management");
    } else {
      formData.append("brand_logo", adAccount.brandlogo);
      formData.set("owner", login.user_id);

      await axios.post(baseURL + "/ad-accounts/", formData);
      navigate("/adAccount-management");
    }
  };

  return (
    <div>
      <Header user="none" />
      <div className="main-content">
        <div className="welcome">
          <div>
            <h1>Hey Testing</h1>
            <p>
              Setup your first ad account to start advertising on StreamPala.
              You can always modify your ad account later, as well as create
              more ad accounts of you need.
            </p>
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
              <br />
              <p style={{ color: "black", textAlign: "left" }}>
                Current file :{" "}
                <a
                  href={mediaURL + accounts[accountIndex]?.brand_logo}
                  style={{ color: "black" }}
                  target="_blank"
                >
                  {accounts[accountIndex]?.brand_logo.split("/").pop()}
                </a>
              </p>
            </div>
          </div>
          <br />

          <div className="d-flex flex-direction-row justify-content-center">
            <button className="view-more-outlined" type="submit">
              Cancel
            </button>
            <button className="view-more" type="submit">
              {src === "edit" ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
