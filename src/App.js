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
import { en, es } from "./utils/Languages";
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
  let lenguajeUi = null;
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
  if (lenguaje === "es") {
    lenguajeUi = es;
  } else {
    lenguajeUi = en;
  }
  return (
    <Router >
      <div className={classes[mode].body} >
        <Header
          classTitle={classes[mode].title}
          classIcons={classes[mode].icons}
          url={url}
          localTeam={localTeam}
          visitTeam={visitTeam}
          title={lenguajeUi.title}
          Lenguaje={lenguaje}
          handleLenguaje={handleLenguaje}
        />
        <Switch>
          <Route
            exact
            path="/es/:localName/:localSeason-vs-/:visitName/:visitSeason"
          >
            <Match
              url={url}
              localTeam={localTeam}
              visitTeam={visitTeam}
              handleUrl={handleUrl}
              title={lenguajeUi.title}
              words={lenguajeUi.match}
              powered={lenguajeUi.powered}
              Lenguaje={lenguaje}
              handleLenguaje={handleLenguaje}
              changeMode={changeMode}
            />
          </Route>
          <Route
            exact
            path="/en/:localName/:localSeason-vs-/:visitName/:visitSeason"
          >
            <Match
              handleUrl={handleUrl}
              title={lenguajeUi.title}
              words={lenguajeUi.match}
              powered={lenguajeUi.powered}
              Lenguaje={lenguaje}
              handleLenguaje={handleLenguaje}
              changeMode={changeMode}
            />
          </Route>
          <Route exact path="/es/select">
            <Select
              url={url}
              handleUrl={handleUrl}
              title={lenguajeUi.title}
              words={lenguajeUi.select}
              powered={lenguajeUi.powered}
              Lenguaje={lenguaje}
              handleLenguaje={handleLenguaje}
              setMode={setMode}
            />
          </Route>
          <Route exact path="/en/select">
            <Select
              url={url}
              handleUrl={handleUrl}
              title={lenguajeUi.title}
              words={lenguajeUi.select}
              powered={lenguajeUi.powered}
              Lenguaje={lenguaje}
              handleLenguaje={handleLenguaje}
              setMode={setMode}
            />
          </Route>
          <Route exact path="/es">
            <Home
              url={url}
              handleUrl={handleUrl}
              title={lenguajeUi.title}
              words={lenguajeUi.home}
              powered={lenguajeUi.powered}
              Lenguaje={lenguaje}
              handleLenguaje={handleLenguaje}
              changeMode={changeMode}
            />
          </Route>
          <Route exact path="/en">
            <Home
              url={url}
              handleUrl={handleUrl}
              title={lenguajeUi.title}
              words={lenguajeUi.home}
              powered={lenguajeUi.powered}
              Lenguaje={lenguaje}
              handleLenguaje={handleLenguaje}
              changeMode={changeMode}
            />
          </Route>
          <Route exact path="/">
            {lenguaje === "es" ? <Redirect to="/es" /> : <Redirect to="/en" />}
          </Route>
        </Switch>
        <Footer powered={lenguajeUi.powered} />
      </div>
    </Router>
  );
}

export default App;
