import React from "react";
import "./App.css";
import LandingPage from "./components/Landing/LandingPage";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/landingpage" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
