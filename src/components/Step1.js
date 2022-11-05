import axios from "axios";
import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";

const baseURL = process.env.REACT_APP_URL;

const Step1 = (props) => {
  const { utilData, setUtilData, setStep, userData, setUserData } =
    useContext(multiStepContext);

  const handleNext = (e) => {
    e.preventDefault();
    if (utilData) {
      updateCampaign();
    } else {
      postCampaign();
    }
  };

  const postCampaign = async () => {
    let formToPost = {
      ...userData,
      ad_account: props?.adAccount[0]?.id,
    };

    try {
      const { data } = await axios.post(baseURL + "/campaigns/", formToPost);
      setUtilData(data.id);
      setStep(2);
    } catch (err) {
      console.log(err);
    }
  };

  const updateCampaign = async () => {
    let formToPost = {
      ...userData,
      ad_account: props?.adAccount[0]?.id,
    };

    try {
      const { data } = await axios.put(
        baseURL + `campaigns/${utilData}/`,
        formToPost
      );
      // setUtilData(data.id);
      setStep(2);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form style={{ marginTop: "50px" }}>
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
              value={props?.adAccount[0]?.brand_name}
              className="form-control"
              readOnly
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label
            className="col-sm-3 col-form-label"
            style={{ fontWeight: "700" }}
          >
            Campaign Name:
          </label>
          <div className="col-lg-7 col-sm-10">
            <input
              type="text"
              value={userData["name"]}
              className="form-control"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  name: e.target.value,
                })
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
            Description:
          </label>
          <div className="col-lg-7 col-sm-10">
            <textarea
              type="text"
              rows={3}
              value={userData["description"]}
              className="form-control"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  description: e.target.value,
                })
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
            Campaign start date:
          </label>
          <div className="col-lg-7 col-sm-10">
            <input
              className="form-control"
              type="date"
              value={userData["start_date"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  start_date: e.target.value,
                })
              }
            />
          </div>
        </div>
        <br />
        <div className="form-group row" style={{ fontWeight: "700" }}>
          <label className="col-sm-3 col-form-label">Campaign end date:</label>
          <div className="col-lg-7 col-sm-10">
            <input
              className="form-control"
              type="date"
              value={userData["end_date"]}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  end_date: e.target.value,
                })
              }
            />
          </div>
        </div>
        <br />
        <div className="form-group row" style={{ fontWeight: "700" }}>
          <label className="col-sm-3 col-form-label">
            Setup campaign budget:
          </label>
          <div className="col-lg-3 col-sm-10" style={{ display: "flex" }}>
            <div>
              <input
                className="form-control"
                value={userData["budget"]}
                onChange={(e) =>
                  setUserData({ ...userData, budget: e.target.value })
                }
              />
            </div>
            <span style={{ margin: "10px 0px 0px 5px", color: "#9B51E0" }}>
              INR
            </span>
          </div>
        </div>
        <br />
        <div className="form-group row" style={{ fontWeight: "700" }}>
          <label
            className="col-sm-3 col-form-label"
            style={{ fontWeight: "700" }}
          >
            Estimated Result:
          </label>

          <div className="col-lg-3 col-sm-10" style={{ display: "flex" }}>
            <div>
              <input
                className="form-control"
                value={Number(userData.budget ? userData.budget * 2 : 0)}
                readOnly
              />
            </div>
            <span style={{ margin: "10px 0px 0px 5px", color: "#9B51E0" }}>
              Views
            </span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <button
            onClick={handleNext}
            className="view-more"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
