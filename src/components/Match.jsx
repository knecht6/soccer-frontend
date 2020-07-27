import React, { useState, useEffect } from "react";
import "../assets/css/dark.css";
import "../assets/css/match.css";
import Layout from "./Layout";
import { Link, useParams } from "react-router-dom";
import DoughnutChart from "./DoughnutChart";
import Odometer from "./Odometer";
import MatchTeams from "../utils/MatchTeams";
import LoadCircle from "./LoadCircle";
import Confetti from "react-confetti";

export default function Match({
  url,
  localTeam,
  visitTeam,
  handleUrl,
  words,
  title,
  powered,
}) {
  const { localName, localSeason, visitName, visitSeason } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [matchFor, setMatchFor] = useState(null);
  useEffect(() => {
    fetch(
      `http://localhost:3001/api/getData/${localName}/${localSeason}/${visitName}/${visitSeason}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.left && result.right) {
            setMatchFor(new MatchTeams(result.left, result.right));
          } else {
            setError(result);
          }
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
      .catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
  }, [localName, visitName, localSeason, visitSeason]);
  if (matchFor) {
    handleUrl(window.location.href, matchFor.localTeam, matchFor.visitTeam);
  }
  if (isLoaded) {
    if (error) {
      return (
        <Layout
          classBody="body-dark"
          classTitle="white"
          classIcons="social-icons"
          title={title}
          powered={powered}
        >
          <div style={{ textAlign: "center", paddingTop: 200 }}>
            <Error {...error} />
          </div>
        </Layout>
      );
    } else {
      return (
        <Layout
          classBody="body-dark"
          classTitle="white"
          classIcons="social-icons"
          url={url}
          localTeam={localTeam}
          visitTeam={visitTeam}
          handleUrl={handleUrl}
          title={title}
          powered={powered}
        >
          <h1 className="match-title">
            {`${matchFor.localTeam.team_name} ${matchFor.localTeam.season_name} vs ${matchFor.visitTeam.team_name} ${matchFor.visitTeam.season_name}`}
          </h1>
          <h2 className="match-subtitle">
            {matchFor.winner
              ? `${matchFor.winner.team_name} ${words.result.win}`
              : words.result.tie}
          </h2>
          <div className="donut-container">
            <div className="percentage-left">
              <img
                src={matchFor.localTeam.img_team}
                alt={matchFor.localTeam.team_name}
              />
              <Odometer value={matchFor.localTeam.percentage} />
              <span className="percentage">%</span>
            </div>
            <div>
              <DoughnutChart
                matchFor={matchFor}
                duration={
                  matchFor.localTeam.percentage > matchFor.visitTeam.percentage
                    ? matchFor.localTeam.percentage * 30
                    : matchFor.visitTeam.percentage * 30
                }
              />
            </div>
            <div className="percentage-right">
              <Odometer value={matchFor.visitTeam.percentage} />
              <span className="percentage">%</span>
              <img
                src={matchFor.visitTeam.img_team}
                alt={matchFor.visitTeam.team_name}
              />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link to="/select" className="btn-play-again">
              {words.playButton[0]} <span>{words.playButton[1]}</span>
            </Link>
          </div>
          <Confetti style={{ width: "auto", height: "auto" }} />
        </Layout>
      );
    }
  } else {
    return (
      <Layout
        classBody="body-dark"
        classTitle="white"
        classIcons="social-icons"
        title={title}
        powered={powered}
      >
        <div style={{ textAlign: "center", paddingTop: 200 }}>
          <LoadCircle />
        </div>
      </Layout>
    );
  }
}

function Error({ status, error }) {
  return (
    <div style={{ color: "white", fontSize: 125 }}>{`${status} ${error}`}</div>
  );
}
