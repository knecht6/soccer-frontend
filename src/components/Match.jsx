import React from "react";
import "../assets/css/dark.css";
import "../assets/css/match.css";
import Layout from "./Layout";
import { Link, useParams } from "react-router-dom";
import ArsenalLogo from "../assets/images/arsenal.svg";
import BarcelonaLogo from "../assets/images/barcelona.svg";
import DoughnutChart from "./DoughnutChart";
import Odometer from "./Odometer";

export default function Match() {
  const { localName, localSeason, visitName, visitSeason } = useParams();
  console.log(localName, localSeason, visitName, visitSeason);
  return (
    <Layout classBody="body-dark" classTitle="white" classIcons="social-icons">
      <div className="donut-container">
        <div className="percentage-left">
          <img src={ArsenalLogo} alt="Arsenal" />
          <Odometer value={27} />
          <span className="percentage">%</span>
        </div>
        <div>
          <DoughnutChart duration={73 * 30} />
        </div>
        <div className="percentage-right">
          <Odometer value={73} />
          <span className="percentage">%</span>
          <img src={BarcelonaLogo} alt="Barcelona" />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/select" className="btn-play-again">
          Play <span>Again?</span>
        </Link>
      </div>
    </Layout>
  );
}
