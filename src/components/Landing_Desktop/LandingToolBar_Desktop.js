import React from "react";
import "./LandingToolBar_Desktop.css";
import alehLogo from "../images/aleh-logo.png";
import babysitterLogo from "../images/babysitter-logo.svg";

const LandingToolbarD = (props) => {
  return (
    <div dir="rtl" className="landing_toolbarD">
      <div className="landing_toolbar_navD">
        <div className="landing_spacer1D" />
        <div className="landing_bottom_logo_styleD">
          <img
            src={babysitterLogo}
            className="landing_babysitter_logo_styleD"
          />
        </div>
        <div className="landing_spacer1D" />
        <ul className="tool_bar_listD">
          <li className="list_itemD" onClick={props.Scroll_function1}>
            אודות הפרוייקט
          </li>
          <li className="list_itemD" onClick={props.Scroll_function2}>
            עלה בשבילכם
          </li>
          <li className="list_itemD" onClick={props.Scroll_function3}>
            צרו קשר
          </li>
        </ul>
        <div className="landing_spacer1D" />
        <a
          href="https://babysitterkoda-1a3df.firebaseapp.com/"
          className="register_buttonD"
        >
          להתחברות / הרשמה
        </a>

        <div className="landing_spacerD" />
        <div className="landing_top_logo_styleD">
          <img src={alehLogo} className="landing_aleh_logo_styleD" />
        </div>
        <div className="landing_spacer1D" />
      </div>
    </div>
  );
};

export default LandingToolbarD;
