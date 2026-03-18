import React from "react";
import "./curveButton.css";
import AppButton from "./AppButton";
function CurveButton() {
  return (
    <div className="curve-button">
      <div className="div2 bg-background"></div>
      <div className="container bg-background">
        <AppButton label="Let's Talk" isBlack={true} />
      </div>
      <div className="div4 bg-background"></div>
    </div>
  );
}

export default CurveButton;
