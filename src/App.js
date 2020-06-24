import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  line : {
    backgroundColor : '#636e72',
    margin : 0,
    width : 'auto',
    height : 1
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Header />
        <div className={classes.line}/>
        <main>
          <Main />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
