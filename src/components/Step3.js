import React, { useContext, useState, useEffect } from "react";
import { multiStepContext } from "../StepContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const baseURL = process.env.REACT_APP_URL;

const Step3 = () => {
  const navigate = useNavigate();
  const { utilData, setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

  const [position, setPosition] = useState();
  const [currentRadioValue, setCurrentRadioValue] = useState("BL");
  const [modalShow, setModalShow] = useState(false);

  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.target.value);
    setUserData({ ...userData, adPosition: e.target.value });
  };

  const updateCampaign = async () => {
    if (utilData) {
      try {
        // await axios.put(baseURL + `/campaigns/${utilData}/`, userData);
        setModalShow(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Error : missing campaign id");
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="parent">
        <div className={`child-${currentRadioValue}`}></div>
      </div>
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col-lg-3">Choose ad placement:</div>
        <div className="col-lg-9">
          <div className="row gy-3">
            <div className="col-lg-6">
              <div>
                <input
                  id="TL"
                  name="TL"
                  type="radio"
                  value="TL"
                  onChange={handleRadioChange}
                  checked={currentRadioValue === "TL"}
                />
                <label htmlFor="TL" style={{ paddingLeft: "10px" }}>
                  High Left
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <input
                  id="TR"
                  name="TR"
                  type="radio"
                  value="TR"
                  onChange={handleRadioChange}
                  checked={currentRadioValue === "TR"}
                />
                <label htmlFor="TR" style={{ paddingLeft: "10px" }}>
                  High Right
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                {" "}
                <input
                  id="BL"
                  name="BL"
                  type="radio"
                  value="BL"
                  onChange={handleRadioChange}
                  checked={currentRadioValue === "BL"}
                />
                <label htmlFor="BL" style={{ paddingLeft: "10px" }}>
                  Low Left (Recommended.See Why)
                </label>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                {" "}
                <input
                  id="BR"
                  name="BR"
                  type="radio"
                  value="BR"
                  onChange={handleRadioChange}
                  checked={currentRadioValue === "BR"}
                />
                <label htmlFor="BR" style={{ paddingLeft: "10px" }}>
                  Low Right
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <div style={{ display: "flex" }}>
          <button
            className="cancel"
            style={{ marginRight: "13px" }}
            onClick={() => setStep(2)}
          >
            Back
          </button>
          <button className="view-more" onClick={updateCampaign}>
            Finish
          </button>
        </div>
      </div>

      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="post-campaign-modal">
          <div className="modal-close-icon" onClick={() => setModalShow(false)}>
            <AiFillCloseCircle />
          </div>
          <div className="modal-like-icon">
            <BiLike />
          </div>
          <div className="modal-details">
            <h5>Your campaign is ready to begin on {userData.start_date}!</h5>
            <Button className="preview-btn">Preview in Marketplace</Button>
          </div>
          <Row className="mt-3">
            <Col className="modal-data-value">
              <h2>₹{userData.budget}</h2>
              <p>Campaign Budget</p>
            </Col>
            <Col className="modal-data-value">
              <h2>
                {(new Date(userData.end_date).getTime() -
                  new Date(userData.start_date).getTime()) /
                  86400000}{" "}
                Days
              </h2>
              <p>Campaign Duration</p>
            </Col>
            <Col className="modal-data-value">
              <h2>{userData.budget * 2}</h2>
              <p>Estimated Impressions</p>
            </Col>
          </Row>
          <div className="modal-footer-info">
            Note: Campaign details can always be accessed through Your Campaigns
            on the <Link to="/main2">Home Dashboard</Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Step3;
