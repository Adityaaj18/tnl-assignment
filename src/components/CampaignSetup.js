import React, { useState, useContext, useEffect } from "react";
import { Stepper, StepLabel, Step } from "@mui/material";
import Header from "./home/Header";
import Sidebar from "./home/sidebar/Sidebar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { multiStepContext } from "../StepContext";
import { useNavigate } from "react-router-dom";

const CampaignSetup = () => {
  const navigate = useNavigate();
  const login = JSON.parse(window.localStorage.getItem("authData"));
  const activeAccount = JSON.parse(
    window.localStorage.getItem("activeAccount")
  );

  useEffect(() => {
    if (activeAccount === null || !login) {
      navigate("/ad/login");
    }
  }, []);

  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const { currentStep, finalStep } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <Step1 adAccount={activeAccount !== null && activeAccount} />;
      case 2:
        return <Step2 adAccount={activeAccount !== null && activeAccount} />;
      case 3:
        return <Step3 adAccount={activeAccount !== null && activeAccount} />;
    }
  }

  return (
    <div>
      <Header menuIconClick={menuIconClick} />
      <Sidebar menuCollapse={menuCollapse} />
      <div className="main-content">
        <div className="container">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "50px",
              color: "black",
            }}
          >
            Your Ad Campaign Setup
          </p>
          <Stepper activeStep={currentStep - 1} orientation="horizontal">
            <Step>
              <StepLabel>Campaign Details</StepLabel>
            </Step>
            <Step>
              <StepLabel>Upload Creative</StepLabel>
            </Step>
            <Step>
              <StepLabel>Preview Campaign</StepLabel>
            </Step>
          </Stepper>

          {showStep(currentStep)}
        </div>
      </div>
    </div>
  );
};

export default CampaignSetup;
