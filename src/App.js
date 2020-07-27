import React, { useState } from "react";
import "./assets/css/reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Select from "./components/Select";
import Match from "./components/Match";
import { en, es } from "./utils/Languages";

function App() {
  const [url, setUrl] = useState(null);
  const [localTeam, setLocalTeam] = useState(null);
  const [visitTeam, setVisitTeam] = useState(null);
  let ln = window.navigator.language || navigator.browserLanguage;
  const handleUrl = (url, localTeam, visitTeam) => {
    setUrl(url);
    setLocalTeam(localTeam);
    setVisitTeam(visitTeam);
  };
  let Languaje = null;
  if (ln.includes("es-")) {
    Languaje = es;
  } else {
    Languaje = en;
  }
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/:localName/:localSeason-vs-/:visitName/:visitSeason"
        >
          <Match
            url={url}
            localTeam={localTeam}
            visitTeam={visitTeam}
            handleUrl={handleUrl}
            title={Languaje.title}
            words={Languaje.match}
            powered={Languaje.powered}
          />
        </Route>
        <Route exact path="/select">
          <Select
            url={url}
            handleUrl={handleUrl}
            title={Languaje.title}
            words={Languaje.select}
            powered={Languaje.powered}
          />
        </Route>
        <Route exact path="/">
          <Home
            url={url}
            handleUrl={handleUrl}
            title={Languaje.title}
            words={Languaje.home}
            powered={Languaje.powered}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
