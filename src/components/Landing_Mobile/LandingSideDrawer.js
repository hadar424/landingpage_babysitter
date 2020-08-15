import "./LandingSideDrawer.css";
import React, { Component } from "react";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import alehLogo from "../images/aleh-logo.png";
import babysitterLogo from "../images/babysitter-logo.svg";

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      drawerClasses: "landing-side-drawer",
    };
  }

  render() {
    return (
      <nav className={this.state.drawerClasses}>
        <div dir="rtl" className="landing_toolbar">
          <nav className="landing_toolbar_nav">
            <div className="landing_bottom_logo_style">
              <img
                src={babysitterLogo}
                className="landing_babysitter_logo_style"
              />
            </div>
            <div className="landing_spacer" />
            <button
              className="landing-close_icon_button"
              onClick={this.props.closeLandingMenu}
            >
              <ClearOutlinedIcon
                className="landing-close_icon"
                fontSize="medium"
              ></ClearOutlinedIcon>
            </button>
          </nav>
        </div>
        <ul>
          <li className="list_item" onClick={this.props.Scroll_function1}>
            אודות הפרוייקט
          </li>
          <li className="list_item" onClick={this.props.Scroll_function2}>
            עלה בשבילכם
          </li>
          <li className="list_item" onClick={this.props.Scroll_function3}>
            צרו קשר
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
