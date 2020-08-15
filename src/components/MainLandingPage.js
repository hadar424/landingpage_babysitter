import React from "react";
import { isMobile } from "react-device-detect";
import { isBrowser } from "react-device-detect";
import LandingPageMobile from "./Landing_Mobile/LandingPage";
import LandingPageDesktop from "./Landing_Desktop/LandingPage_Desktop";

class MainLandingPage extends React.Component {
  renderContent = () => {
    if (isMobile) {
      return <LandingPageMobile />;
    }
    if (isBrowser) {
      return <LandingPageDesktop />;
    }
  };

  render() {
    return this.renderContent();
  }
}

export default MainLandingPage;
