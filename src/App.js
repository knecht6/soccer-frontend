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
import { createBrowserHistory } from "history";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const ln = window.navigator.language || navigator.browserLanguage;
  const [url, setUrl] = useState(null);
  const [localTeam, setLocalTeam] = useState(null);
  const [visitTeam, setVisitTeam] = useState(null);
  const [lenguaje, setLenguaje] = useState(ln.split("-")[0]);
  const [mode, setMode] = useState("dark");
  const classes = {
    dark: {
      body: "body-dark",
      title: "title-dark",
      icons: "social-icons-dark",
    },
    light: {
      body: "body-light",
      title: "title-light",
      icons: "social-icons-light",
    },
  };
  const changeMode = (mode) => {
    setMode(mode);
  };
  const handleLenguaje = (len) => {
    var newPath = window.location.pathname;
    if (len === "es") {
      newPath = newPath.replace("/en", "/es");
    } else {
      newPath = newPath.replace("/es", "/en");
    }
    createBrowserHistory().push(newPath);
    setLenguaje(len);
  };
  const handleUrl = (url, localTeam, visitTeam) => {
    setUrl(url);
    setLocalTeam(localTeam);
    setVisitTeam(visitTeam);
  };
  return (
    <Router>
      <div className={classes[mode].body}>
        <Header
          classTitle={classes[mode].title}
          classIcons={classes[mode].icons}
          url={url}
          localTeam={localTeam}
          visitTeam={visitTeam}
          title={Lenguajes[lenguaje].title}
          Lenguaje={lenguaje}
          handleLenguaje={handleLenguaje}
        />
        <Switch>
          <Route
            exact
            path="/es/:localName/:localSeason-vs-/:visitName/:visitSeason"
          >
            <Match
              handleUrl={handleUrl}
              words={Lenguajes[lenguaje].match}
              Lenguaje={lenguaje}
              changeMode={changeMode}
            />
          </Route>
          <Route
            exact
            path="/en/:localName/:localSeason-vs-/:visitName/:visitSeason"
          >
            <Match
              handleUrl={handleUrl}
              words={Lenguajes[lenguaje].match}
              Lenguaje={lenguaje}
              changeMode={changeMode}
            />
          </Route>
          <Route exact path="/es/select">
            <Select
              handleUrl={handleUrl}
              words={Lenguajes[lenguaje].select}
              Lenguaje={lenguaje}
              setMode={setMode}
            />
          </Route>
          <Route exact path="/en/select">
            <Select
              handleUrl={handleUrl}
              words={Lenguajes[lenguaje].select}
              Lenguaje={lenguaje}
              setMode={setMode}
            />
          </Route>
          <Route exact path="/es">
            <Home
              handleUrl={handleUrl}
              words={Lenguajes[lenguaje].home}
              title={Lenguajes[lenguaje].title}
              Lenguaje={lenguaje}
              changeMode={changeMode}
            />
          </Route>
          <Route exact path="/en">
            <Home
              handleUrl={handleUrl}
              words={Lenguajes[lenguaje].home}
              title={Lenguajes[lenguaje].title}
              Lenguaje={lenguaje}
              changeMode={changeMode}
            />
          </Route>
          <Route exact path="/">
            {lenguaje === "es" ? <Redirect to="/es" /> : <Redirect to="/en" />}
          </Route>
        </Switch>
        <Footer powered={Lenguajes[lenguaje].powered} />
      </div>
    </Router>
  );
}

export default App;
