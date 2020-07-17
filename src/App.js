import React from "react";
import "./assets/css/reset.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Select from "./components/Select";
import Match from "./components/Match";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/match">
          <Match />
        </Route>
        <Route exact path="/select">
          <Select />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
