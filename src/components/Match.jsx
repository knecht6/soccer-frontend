import React, { useState, useEffect } from "react";
import "../assets/css/dark.css";
import "../assets/css/style.css";
import "../assets/css/grid.css";
import "../assets/css/match.css";
import "../assets/css/donutchart.css";
import { Link, useParams } from "react-router-dom";
import DoughnutChart from "./DoughnutChart";
import Odometer from "./Odometer";
import MatchTeams from "../utils/MatchTeams";
import LoadCircle from "./LoadCircle";
import Confetti from "react-confetti";

export default function Match({
  handleUrl,
  words,
  Lenguaje,
  changeMode,
  handleLenguajeReceived,
}) {
  const {
    lenguaje,
    localName,
    localSeason,
    visitName,
    visitSeason,
  } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [matchFor, setMatchFor] = useState(null);
  useEffect(() => {
    handleLenguajeReceived(lenguaje);
  }, [handleLenguajeReceived, lenguaje]);
  useEffect(() => {
    changeMode("dark");
  }, [changeMode]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/api/getData/${localName}/${localSeason}/${visitName}/${visitSeason}`
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
  useEffect(() => {
    if (matchFor) {
      handleUrl(window.location.href, matchFor.localTeam, matchFor.visitTeam);
    }
  }, [handleUrl, matchFor]);
  if (isLoaded) {
    if (error) {
      return (
        <div style={{ textAlign: "center", paddingTop: 200 }}>
          <Error {...error} />
        </div>
      );
    } else {
      document.body.className='body-dark';
      return (
        <main>
          <div className="container">
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
                <div className="percentage">%</div>
              </div>
              <div id="graph-container">

                <DoughnutChart
                  matchFor={matchFor}
                  duration={
                    matchFor.localTeam.percentage >
                    matchFor.visitTeam.percentage
                      ? matchFor.localTeam.percentage * 30
                      : matchFor.visitTeam.percentage * 30
                  }
                />
              </div>
              <div className="percentage-right">
                <Odometer value={matchFor.visitTeam.percentage} />
                <div className="percentage">%</div>
                <img
                  src={matchFor.visitTeam.img_team}
                  alt={matchFor.visitTeam.team_name}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col-4 center">
              <Link to={`/${Lenguaje}/select`} className="btn-play-again">
                {words.playButton[0]} <span>{words.playButton[1]}</span>
              </Link>
            </div>
          </div>
          <Confetti style={{ width: "auto", height: "auto" }} />
        </main>
      );
    }
  } else {
    return (
      <div style={{ textAlign: "center", paddingTop: 200 }}>
        <LoadCircle />
      </div>
    );
  }
}

function Error({ status, error }) {
  return (
    <div style={{ color: "white", fontSize: 125 }}>{`${status} ${error}`}</div>
  );
}
