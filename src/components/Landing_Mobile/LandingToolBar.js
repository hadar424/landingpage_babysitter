import React from "react";
import "./LandingToolBar.css";
import LandingHamburgerButton from "./LandingHamburgerButton";
import alehLogo from "../images/aleh-logo.png";
import babysitterLogo from "../images/babysitter-logo2.svg";

const LandingToolbar = (props) => {
  return (
    <div dir="rtl" className="landing_toolbar">
      <nav className="landing_toolbar_nav">
        <div className="landing_bottom_logo_style">
          <img src={babysitterLogo} className="landing_babysitter_logo_style" />
        </div>
        <div className="landing_spacer" />
        <div>
          <LandingHamburgerButton click={props.landingDrawerClickHandler} />
        </div>
        <div className="landing_toolbar_nav_items">
          <ul></ul>
        </div>
      </nav>
    </div>
  );
};

export default LandingToolbar;
