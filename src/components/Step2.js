import axios from "axios";
import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";

const baseURL = process.env.REACT_APP_URL;

const Step2 = () => {
  const { utilData, setStep, userData, setUserData } =
    useContext(multiStepContext);
  const [currentRadioValue, setCurrentRadioValue] = useState("false");

  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.target.value);
    setUserData({ ...userData, is_custom_tnc: e.target.value });
  };

  const updateCampaign = async (e) => {
    e.preventDefault();

    if (utilData) {
      try {
        const formData = new FormData();

        for (const key in userData) {
          if (key === "media_file" || key === "custom_tnc") {
            formData.append(key, userData[key]);
          } else {
            formData.set(key, userData[key]);
          }
        }

        const { data } = await axios.put(
          baseURL + `/campaigns/${utilData}/`,
          formData
        );
        setStep(3);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Error : campaign id missing");
    }
  };

  return (
    <div>
      <div className="step2">
        <form>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Upload media file</label>
            <div className="col-lg-7 col-sm-10">
              <input
                type="file"
                className="form-control"
                onChange={(e) =>
                  setUserData({ ...userData, media_file: e.target.files[0] })
                }
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Lading page URL</label>
            <div className="col-lg-7 col-sm-10">
              <input
                className="form-control"
                value={userData["redirect_url"]}
                onChange={(e) =>
                  setUserData({ ...userData, redirect_url: e.target.value })
                }
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Message copy</label>
            <div className="col-lg-7 col-sm-10">
              <textarea
                className="form-control"
                value={userData["livechat_message"]}
                onChange={(e) =>
                  setUserData({ ...userData, livechat_message: e.target.value })
                }
                rows="4"
              ></textarea>
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">
              Ad Terms & Conditions
            </label>
            <div className="col-lg-7 col-sm-10">
              <div className="" style={{ paddingTop: "5px" }}>
                <div className="col-lg-6">
                  <div>
                    <input
                      id="radio-item-1"
                      name="false"
                      type="radio"
                      value="false"
                      onChange={handleRadioChange}
                      checked={currentRadioValue === "false"}
                    />
                    <label htmlFor="false" style={{ paddingLeft: "10px" }}>
                      StreamPala Standard T&C
                    </label>
                  </div>
                </div>
                <p></p>
                <div className="col-lg-6">
                  <div>
                    <input
                      id="radio-item-2"
                      name="true"
                      type="radio"
                      value="true"
                      onChange={handleRadioChange}
                      checked={currentRadioValue === "true"}
                    />
                    <label htmlFor="true" style={{ paddingLeft: "10px" }}>
                      I want to add my own T&C
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          {userData.is_custom_tnc === "true" && (
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Upload your T&C</label>
              <div className="col-lg-7 col-sm-10">
                <input
                  type="file"
                  accept="application/pdf"
                  className="form-control"
                  onChange={(e) =>
                    setUserData({ ...userData, custom_tnc: e.target.files[0] })
                  }
                />
                <p
                  style={{
                    color: "grey",
                    textAlign: "left",
                    marginTop: "10px",
                  }}
                >
                  only pdf file
                </p>
              </div>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "right" }}>
            <div style={{ display: "flex" }}></div>

            <button
              className="cancel"
              style={{ marginRight: "13px" }}
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button className="view-more" style={{}} onClick={updateCampaign}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
