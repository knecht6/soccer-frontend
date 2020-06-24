import React from "react";
import { makeStyles } from "@material-ui/core";
import DatabotLogo from "../assets/images/databot_logo.png";

const useStyles = makeStyles((theme) => ({
  footer:{
    textAlign : 'center'
  }
}));

export default function Footer () {
  const classes = useStyles();
  return <footer className={classes.footer}><a href="https://databot.io/" rel="noopener noreferrer" target="_blank"><img src={DatabotLogo} alt="databot-logo"/></a></footer>;
};