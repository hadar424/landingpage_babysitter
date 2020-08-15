import React from "react";
import "./LandigBackDrop.css";

const BackDrop = (props) => (
  <div className="landing_backdrop" onClick={props.click} />
);

export default BackDrop;
