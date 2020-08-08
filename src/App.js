import React, { useState } from "react";
import "./assets/css/reset.css";
import "./assets/css/app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Select from "./components/Select";
import Match from "./components/Match";
import { Lenguajes } from "./utils/Languages";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const ln = window.navigator.language || navigator.browserLanguage;
  const lenguajeNavigator = ln.split("-")[0];
  const [url, setUrl] = useState(null);
  const [localTeam, setLocalTeam] = useState(null);
  const [visitTeam, setVisitTeam] = useState(null);
  const [lenguajeReceived, setLenguajeReceived] = useState(null);
  let lenguajeForUi = "en";
  let currentPath = "";
  const [mode, setMode] = useState("dark");
  const classes = {
    dark: {
      body: "body-dark",
      title: "title-dark",
      icons: "social-icons social-icons-dark",
      dropdown: 'btn-dropdown-blue'
    },
    light: {
      body: "body-light",
      title: "title-light",
      icons: "social-icons social-icons-light",
      dropdown: 'btn-dropdown-green'
    },
  };
  const handleLenguajeReceived = (lenguaje) => {
    setLenguajeReceived(lenguaje);
  };
  const changeMode = (mode) => {
    setMode(mode);
  };
  const handleUrl = (url, localTeam, visitTeam) => {
    setUrl(url);
    setLocalTeam(localTeam);
    setVisitTeam(visitTeam);
  };
  if (lenguajeReceived) {
    if (Lenguajes[lenguajeReceived]) {
      lenguajeForUi = lenguajeReceived;
    } else {
      lenguajeForUi = "en";
    }
  } else {
    if (lenguajeNavigator) {
      if (Lenguajes[lenguajeNavigator]) {
        lenguajeForUi = lenguajeNavigator;
      } else {
        lenguajeForUi = "en";
      }
    } else {
      lenguajeForUi = "en";
    }
  }
  if (lenguajeForUi === "es") {
    let path = window.location.pathname;
    currentPath = path.replace("/es", "/en");
  } else {
    let path = window.location.pathname;
    currentPath = path.replace("/en", "/es");
  }
  return (
    <Router>
      <div className={classes[mode].body}>
        <Header
          classTitle={classes[mode].title}
          classIcons={classes[mode].icons}
          classDropdown={classes[mode].dropdown}
          url={url}
          localTeam={localTeam}
          visitTeam={visitTeam}
          title={Lenguajes[lenguajeForUi].title}
          Lenguaje={lenguajeForUi}
          currentPath={currentPath}
        />
        <Switch>
          <Route
            exact
            path="/:lenguaje/:localName/:localSeason-vs-/:visitName/:visitSeason"
          >
            <Match
              handleUrl={handleUrl}
              words={Lenguajes[lenguajeForUi].match}
              Lenguaje={lenguajeForUi}
              changeMode={changeMode}
              handleLenguajeReceived={handleLenguajeReceived}
            />
          </Route>
          <Route exact path="/:lenguaje/select">
            <Select
              handleUrl={handleUrl}
              words={Lenguajes[lenguajeForUi].select}
              Lenguaje={lenguajeForUi}
              setMode={setMode}
              handleLenguajeReceived={handleLenguajeReceived}
            />
          </Route>
          <Route exact path="/:lenguaje">
            <Home
              handleUrl={handleUrl}
              words={Lenguajes[lenguajeForUi].home}
              title={Lenguajes[lenguajeForUi].title}
              Lenguaje={lenguajeForUi}
              changeMode={changeMode}
              handleLenguajeReceived={handleLenguajeReceived}
            />
          </Route>
          <Route exact path="/">
            {lenguajeForUi === "es" ? (
              <Redirect to="/es" />
            ) : (
              <Redirect to="/en" />
            )}
          </Route>
        </Switch>
        <Footer powered={Lenguajes[lenguajeForUi].powered} />
      </div>
    </Router>
  );
}

export default App;
