import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import NotFound from "./NotFound";
import DoughnutChart from "./DoughnutChart";
import Left from "../assets/images/main-images/img-left.png";
import Right from "../assets/images/main-images/img-right.png";

const fullHeight = window.screen.height - 70;

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    marginTop: 70,
  },
  principal: {
    height: fullHeight - 145,
  },
  ourData: {

  },
  donations: {

  },
  disqus: {

  },
});
//clash of
class MatchTeams {
  constructor(teamLeft, teamRight) {
    this.teamLeft = teamLeft;
    this.teamRight = teamRight;
    this.winner = null;
    this.losser = null;
    this.calculate();
  }

  //return the winner
  calculate() {
    let ratingLocal = this.teamLeft.rating,
      ratingVisit = this.teamRight.rating,
      posLocal = this.teamLeft.position_team,
      posVisit = this.teamRight.position_team;
    let ratingSum = ratingLocal + ratingVisit;
    this.teamLeft.percentage = (ratingLocal * 95) / ratingSum;
    this.teamRight.percentage = (ratingVisit * 95) / ratingSum;
    if (posLocal < posVisit) {
      this.teamLeft.percentage += 5;
    } else if (posVisit < posLocal) {
      this.teamRight.percentage += 5;
    } else {
      this.teamLeft.percentage += 2.5;
      this.teamRight.percentage += 2.5;
    }

    //look for winner and losser
    if (this.teamLeft.percentage > this.teamRight.percentage) {
      this.winner = this.teamLeft;
      this.losser = this.teamRight;
    } else if (this.teamRight.percentage > this.teamLeft.percentage) {
      this.winner = this.teamRight;
      this.losser = this.teamLeft;
    }
  }
}
export default function Match() {
  const { nameLocal, seasonLocal, nameVisit, seasonVisit } = useParams();
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [matchFor, setMatchFor] = useState(null);
  useEffect(() => {
    fetch(
      `http://localhost:3001/api/getData/${nameLocal}/${seasonLocal}/${nameVisit}/${seasonVisit}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.left && result.right) {
            setMatchFor(new MatchTeams(result.left, result.right));
          } else {
            setError("Not Found");
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
  }, [nameLocal, nameVisit, seasonLocal, seasonVisit]);
  if (isLoaded) {
    if (error) {
      return <NotFound />;
    } else {
      return (
        <div className={classes.root}>
          <Typography variant="h3" style={{ color: "white" }} gutterBottom>
            {matchFor.winner ? `${matchFor.winner.team_name} Winner` : "Tie"}
          </Typography>
          <Grid container className={classes.principal}>
            <Grid item md={4} style={{ margin: "auto" }}>
              <img
                src={Left}
                alt="player-left"
                style={{ filter: "#FF6384" }}
                width="100%"
                height="auto"
              />
            </Grid>
            <Grid item md={4} style={{ margin: "auto" }}>
              <DoughnutChart
                winner={matchFor.winner}
                losser={matchFor.losser}
              />
            </Grid>
            <Grid item md={4} style={{ margin: "auto" }}>
              <img
                src={Right}
                alt="player-right"
                style={{ filter: "#36A2EB" }}
                width="100%"
                height="auto"
              />
            </Grid>
          </Grid>
          <Container className="our-data">
            <Grid container >
              <Grid item md={6}/>
              <Grid item md={6} spacing={3}>
                <h1>Our Data</h1>
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Why do
                  we use it? It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web
                </p>
                <p>
                page editors now use Lorem Ipsum as their default model text,
                  and a search for 'lorem ipsum' will uncover many web sites
                  still in their infancy. Various versions have evolved over the
                  years, sometimes by accident, sometimes on purpose (injected
                  humour and the like). Where does it come from? Contrary to
                  popular belief, Lorem Ipsum is not simply random text. It has
                  roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur, from a Lorem
                </p>
                <p>
                Ipsum passage, and going through the cites of the word in
                  classical literature, discovered the undoubtable source. Lorem
                  Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                  Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                  written in 45 BC. This book is a treatise on the theory of
                  ethics, very popular during the Renaissance. The first line of
                  Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                  in section 1.10.32. The standard chunk of Lorem Ipsum used
                  since the 1500s is reproduced below for those interested.
                  Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                  Malorum" by Cicero are also reproduced in their exact original
                  form, accompanied by English versions from the 1914
                  translation by H. Rackham.
                </p>
              </Grid>
            </Grid>
          </Container>
          <Container className="donation">
          <Grid container>
              <Grid item md={6}>
                <h1>Donations</h1>
                
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Why do
                  we use it? It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web
                </p>
                <p>
                page editors now use Lorem Ipsum as their default model text,
                  and a search for 'lorem ipsum' will uncover many web sites
                  still in their infancy. Various versions have evolved over the
                  years, sometimes by accident, sometimes on purpose (injected
                  humour and the like). Where does it come from? Contrary to
                  popular belief, Lorem Ipsum is not simply random text. It has
                  roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur, from a Lorem
                </p>
                <p>
                Ipsum passage, and going through the cites of the word in
                  classical literature, discovered the undoubtable source. Lorem
                  Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                  Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                  written in 45 BC. This book is a treatise on the theory of
                  ethics, very popular during the Renaissance. The first line of
                  Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                  in section 1.10.32. The standard chunk of Lorem Ipsum used
                  since the 1500s is reproduced below for those interested.
                  Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                  Malorum" by Cicero are also reproduced in their exact original
                  form, accompanied by English versions from the 1914
                  translation by H. Rackham.
                </p>
              </Grid>
              <Grid item md={6} />
            </Grid>
          </Container>
          <Container  className="disqus">
          <Grid container>
              <Grid item md={6} />
              <Grid item md={6}>
                <h1>Discussion</h1>
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Why do
                  we use it? It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web
                </p>
                <p>
                page editors now use Lorem Ipsum as their default model text,
                  and a search for 'lorem ipsum' will uncover many web sites
                  still in their infancy. Various versions have evolved over the
                  years, sometimes by accident, sometimes on purpose (injected
                  humour and the like). Where does it come from? Contrary to
                  popular belief, Lorem Ipsum is not simply random text. It has
                  roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur, from a Lorem
                </p>
                <p>
                Ipsum passage, and going through the cites of the word in
                  classical literature, discovered the undoubtable source. Lorem
                  Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                  Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                  written in 45 BC. This book is a treatise on the theory of
                  ethics, very popular during the Renaissance. The first line of
                  Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                  in section 1.10.32. The standard chunk of Lorem Ipsum used
                  since the 1500s is reproduced below for those interested.
                  Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                  Malorum" by Cicero are also reproduced in their exact original
                  form, accompanied by English versions from the 1914
                  translation by H. Rackham.
                </p>
              </Grid>
            </Grid>

          </Container>
        </div>
      );
    }
  } else {
    return (
      <div style={{ textAlign: "center", margin: 200 }}>
        <CircularProgress size={100} />
      </div>
    );
  }
}
