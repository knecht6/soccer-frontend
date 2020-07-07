import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import Main from "./components/Main";
import Match from "./components/Match";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Wrapper } from "./components/layout/Layout";
function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route
              exact
              path="/:nameLocal-:seasonLocal-vs-:nameVisit-:seasonVisit"
            >
              <Match />
            </Route>
            <Route exact path="/layout">
              <Wrapper />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
