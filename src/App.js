import React from "react";
import "./App.css";
import LandingPage_Mobile from "./components/Landing_Mobile/LandingPage";
import LandingPage_Desktop from "./components/Landing_Desktop/LandingPage_Desktop";
import MainLandingPage from "./components/MainLandingPage";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainLandingPage} />
        <Route path="/landingpagemobile" component={LandingPage_Mobile} />
        <Route path="/LandingPagedesktop" component={LandingPage_Desktop} />
      </Switch>
    </Router>
  );
}

export default App;
