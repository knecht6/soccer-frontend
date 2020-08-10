import React from "react";
import MediaQuery from "react-responsive";
import DatabotLogo from "../assets/images/databot_logo-bk.png";
const Footer = ({ powered, footerClass }) => (
  <footer className={"footer "+footerClass}>
    <MediaQuery minWidth={772}>
    <h1>{powered}</h1>
      <a
        href="https://databot.io/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <img alt="databot" src={DatabotLogo} />
      </a>
    </MediaQuery>
    <MediaQuery maxWidth={771}>
    <h1>{powered}</h1>
      <a href="https://databot.io/" style={{ textDecoration: "none" }}>
        <img alt="databot" src={DatabotLogo} />
      </a>
    </MediaQuery>
  </footer>
);
export default Footer;
