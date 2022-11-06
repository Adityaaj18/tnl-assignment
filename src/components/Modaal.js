import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Modaal = ({ show, handleClose, handleShow, data }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>
            <div className="modal-head card-banner2">
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "20px",
                }}
              >
                <AiFillCloseCircle
                  style={{
                    fontSize: "25px",
                  }}
                  onClick={handleClose}
                />
              </div>
              <div
                style={{
                  marginTop: "8%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img src={require("../img/yipee.png")} />
                <p>lorem ipsum dolor sit amet, consectetur</p>
                <Link to="/mycampaigns" className="my-camp">
                  My Campaigns
                </Link>
                <h1
                  style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    paddingTop: "20px",
                    color: "white",
                  }}
                >
                  {data?.name}
                </h1>
                <span style={{ fontSize: "48px", fontWeight: "700" }}>
                  ₹{data?.budget}
                </span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modaal;
