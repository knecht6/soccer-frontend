import React, { useState, useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import useWindowSize from "react-use/lib/useWindowSize";
import * as Vibrant from "node-vibrant";
import "../assets/css/dark.css";
import "../assets/css/style.css";
import "../assets/css/grid.css";
import "../assets/css/match.css";
import "../assets/css/donutchart.css";
import { Link, useParams } from "react-router-dom";
import DoughnutChart from "./DoughnutChart";
import Odometer from "./Odometer";
import MatchTeams from "../utils/MatchTeams";
import Confetti from "react-confetti";
import ProgressCircle from "./ProgressCircle";
import WantToKnowMore from "./WantToKnowMore";
import Donations from "./Donations";
import useInterval from './Custom/useInterval';

export default function Match({
  handleUrl,
  words,
  Lenguaje,
  changeMode,
  handleLenguajeReceived,
}) {
  const { width, height } = useWindowSize();
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
  const [time, setTime] = useState(100);
  const [progress, setProgress] = useState(0);
  const [stripePromise, setStripePromise] = useState(null);
  const [legend, setLegend] = useState(words.progresscircle.retriving);
  const [localColor, setLocalColor] = useState({
    Vibrant: {
      hex: "#77C747",
      r: 119,
      g: 199,
      b: 71,
    },
  });
  const [visitColor, setVisitColor] = useState({
    Vibrant: {
      hex: "#F6E61F",
      r: 246,
      g: 230,
      b: 31,
    },
  });
  useEffect(() => {
    setLegend(words.progresscircle.retriving);
  }, [words.progresscircle.retriving]);
  useEffect(() => {
    if (lenguaje !== Lenguaje) {
      handleLenguajeReceived(lenguaje);
    }
  }, [Lenguaje, handleLenguajeReceived, lenguaje]);
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
            result.left.img_team =
              process.env.REACT_APP_IMAGES_PATH + "/" + result.left.img_team;
            result.right.img_team =
              process.env.REACT_APP_IMAGES_PATH + "/" + result.right.img_team;
            Vibrant.from(result.left.img_team)
              .getPalette()
              .then((palette) => setLocalColor(palette));
            Vibrant.from(result.right.img_team)
              .getPalette()
              .then((palette) => setVisitColor(palette));
            setMatchFor(new MatchTeams(result.left, result.right));
            setIsLoaded(true);
          } else {
            setError(result);
            setIsLoaded(true);
          }
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
  }, [localName, localSeason, visitName, visitSeason]);
  useEffect(() => {
    if (matchFor) {
      handleUrl(window.location.href, matchFor.localTeam, matchFor.visitTeam);
    }
  }, [handleUrl, matchFor]);

  useInterval(() => {
    if (isLoaded && !error) {
      setLegend('Calculating');
      if (progress >= 120) {
        setTime(null)
        console.log('progress ends');
      } else {
        setTime(50);
        setProgress(progress + 5);
      }
    } else {
      setProgress(progress + 5);
    }
  }, time);

  //load stripe
  useEffect(() => {
    fetch(process.env.REACT_APP_STRIPE_API_URL + "/stripe-key")
      .then((res) => res.json())
      .then((res) => {
        let publishableKey = res.publishableKey;
        // Make sure to call `loadStripe` outside of a component’s render to avoid
        // recreating the `Stripe` object on every render.
        const stripePromise = loadStripe(publishableKey);
        setStripePromise(stripePromise);
      });
  }, []);
  document.body.className = "body-dark";
  if (progress === 120 && matchFor) {
    if (error) {
      return (
        <div style={{ textAlign: "center", paddingTop: 200 }}>
          <Error {...error} />
        </div>
      );
    } else {
      console.log('colors: ', visitColor.Vibrant.hex, localColor.Vibrant.hex);
      document.body.className = "body-dark";
      document.title = `${matchFor.localTeam.team_name} ${matchFor.localTeam.season_name} vs ${matchFor.visitTeam.team_name} ${matchFor.visitTeam.season_name}`;
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
                  localColor={
                    localColor.Vibrant
                      ? localColor.Vibrant.hex
                      : localColor.Vibrant.hex
                  }
                  visitColor={
                    visitColor.Vibrant
                      ? visitColor.Vibrant.hex
                      : visitColor.Vibrant.hex
                  }
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
          <Confetti
            width={width - width * 0.02}
            height={height}
            colors={[visitColor.Vibrant.hex, localColor.Vibrant.hex]}
            recycle={false}
            numberOfPieces={2000}
            tweenDuration={190000}
          />
          <div className="container">
            <div className="btn-group">
              <a className="btn btn-lightteal" href="#want-to-know-more">
                {words.wantToKnowMore.title}
              </a>
              <a className="btn btn-lightteal" href="#donations">
                {words.donation.title}
              </a>
            </div>
          </div>
          <WantToKnowMore style={{ zIndex: 4 }} words={words.wantToKnowMore} />
          <Donations
            stripePromise={stripePromise}
            style={{ zIndex: 4 }}
            words={words.donation}
          />
        </main>
      );
    }
  } else {
    return (
      <div style={{ textAlign: "center", paddingTop: 150 }}>
        <ProgressCircle
          radius={125}
          stroke={4}
          progress={progress >= 100 ? 100 : progress}
          legend={legend}
        />
      </div>
    );
  }
}

function Error({ status, error }) {
  return (
    <div style={{ color: "white", fontSize: 125 }}>{`${status} ${error}`}</div>
  );
}
