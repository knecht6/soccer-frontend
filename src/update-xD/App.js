import React from "react";

import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Main from "./components/Main";
import Match from "./components/Match";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Wrapper} from './components/layout/Layout';
import './App.css';
const useStyles = makeStyles((theme) => ({
  line: {
    backgroundColor: "#636e72",
    margin: 0,
    padding : 0,
    width: "auto",
    height: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>

        <Router>
          <Header />
          <div className={classes.line} />
          <main>
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/:nameLocal-:seasonLocal-vs-:nameVisit-:seasonVisit">
                <Match />
              </Route>
              <Route exact path='/layout'>
                <Wrapper />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>
          <Footer />
        </Router>

    </>
  );
}

export default App;
