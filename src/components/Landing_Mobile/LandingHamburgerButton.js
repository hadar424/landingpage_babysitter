import React from "react";
import "./LandingHamburgerButton.css";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
const LandingHamburgerButton = (props) => {
  return (
    <div>
      <button className="landing_hamburger_btn" onClick={props.click}>
        <MenuOutlinedIcon
          className="landing_menu_icon"
          fontSize="large"
        ></MenuOutlinedIcon>
      </button>
    </div>
  );
};

export default LandingHamburgerButton;
