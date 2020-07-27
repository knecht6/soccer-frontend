import React from "react";
import MediaQuery from "react-responsive";
import DatabotLogo from "../assets/images/databot_logo-bk.png";
const Footer = ({ powered }) => (
  <footer className="footer">
    <MediaQuery minWidth={772}>
      <a
        href="https://databot.io/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <span>{powered}</span>
        <img alt="databot" src={DatabotLogo} />
      </a>
    </MediaQuery>
    <MediaQuery maxWidth={771}>
      <a href="https://databot.io/" style={{ textDecoration: "none" }}>
        <span>{powered}</span>
        <img alt="databot" src={DatabotLogo} />
      </a>
    </MediaQuery>
  </footer>
);
export default Footer;
