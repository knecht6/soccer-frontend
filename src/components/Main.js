import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Select from "./Select";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CardLeagues from "./CardLeagues";
import TeamImage from "./TeamImage";
import Versus from "../assets/images/main-images/vs.png";

const useStyles = makeStyles({
  main: {
    textAlign: "center",
    height: "327px",
    width: "90%",
    margin: "auto"
  },
  button: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: 8,
  },
  versus: {
    margin: "auto",
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Main() {
  const classes = useStyles();
  const [leagues, setLeagues] = useState(null);
  const [seasons, setSeasons] = useState(null);
  const [localTeams, setLocalTeams] = useState(null);
  const [visitTeams, setVisitTeams] = useState(null);
  const [leagueIdLocal, setLeagueIdLocal] = useState(null);
  const [seasonsIdLocal, setSeasonsIdLocal] = useState(null);
  const [leagueIdVisit, setLeagueIdVisit] = useState(null);
  const [seasonsIdVisit, setSeasonsIdVisit] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState();
  const [state, setState] = useState({
    localTeam: {
      id: null,
      name: null,
      src: null,
    },
    visitTeam: {
      id: null,
      name: null,
      src: null,
    },
  });
  const [open, setOpen] = useState(false);
  const [modalError, setModalError] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTeamLocal = (team) => {
    state.localTeam = team;
    setState({ ...state });
  };
  const handleTeamVisit = (team) => {
    state.visitTeam = team;
    setState({ ...state });
  };
  const handleLeagueIdLocal = (id) => {
    setLeagueIdLocal(id);
  };
  const handleSeasonIdLocal = (id) => {
    if (id) {
      setSeasonsIdLocal(id);
    } else {
      state.localTeam.id = null;
      state.localTeam.name = null;
      state.localTeam.src = null;
      setState({ ...state });
      setLocalTeams(null);
      setSeasonsIdLocal(id);
    }
  };
  const handleLeagueIdVisit = (id) => {
    if (id) {
      setLeagueIdVisit(id);
    } else {
      state.visitTeam.id = null;
      state.visitTeam.name = null;
      state.visitTeam.src = null;
      setState({ ...state });
      setVisitTeams(null);
      setLeagueIdVisit(id);
    }
  };
  const handleSeasonIdVisit = (id) => {
    setSeasonsIdVisit(id);
  };
  const validate = (e) => {
    if (!state.localTeam.id || !state.visitTeam.id) {
      e.preventDefault();
      if (
        !state.localTeam.id &&
        !state.visitTeam.id &&
        !seasonsIdLocal &&
        !seasonsIdVisit
      ) {
        setModalError("Please select a match");
      } else {
        if (!state.localTeam.id) {
          setModalError("Please select a local team");
        } else {
          setModalError("Please select a visiting team");
        }
      }
      handleClickOpen();
    }
  };
  useEffect(() => {
    fetch("http://localhost:3001/api/list/leagues_seasons")
      .then((res) => res.json())
      .then(
        (result) => {
          setLeagues(result.leagues);
          setSeasons(result.seasons);
          setIsLoaded(true);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  useEffect(() => {
    if (leagueIdLocal && seasonsIdLocal) {
      fetch(
        `http://localhost:3001/api/list/statistic/${encodeURIComponent(
          seasonsIdLocal
        )}/${encodeURIComponent(leagueIdLocal)}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setLocalTeams(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [leagueIdLocal, seasonsIdLocal]);
  useEffect(() => {
    if (leagueIdVisit && seasonsIdVisit) {
      fetch(
        `http://localhost:3001/api/list/statistic/${encodeURIComponent(
          seasonsIdVisit
        )}/${encodeURIComponent(leagueIdVisit)}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setVisitTeams(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [leagueIdVisit, seasonsIdVisit]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return null;
  } else {
    return (
      <div style={{ marginTop: 70 }}>
        <CardLeagues />
        <Grid container className={classes.main}>
          <Grid item xs={5} align="center">
            <Select
              leagues={leagues}
              seasons={seasons}
              teams={localTeams}
              name="Local"
              handleLeagueId={handleLeagueIdLocal}
              handleSeasonId={handleSeasonIdLocal}
              handleTeam={handleTeamLocal}
              color="primary"
            />
            <TeamImage
              src={state.localTeam.src}
              name={state.localTeam.name}
              color="primary"
            />
          </Grid>
          <Grid item xs={2} className={classes.versus}>
            <img src={Versus} alt="versus" width="70rem" height="50rem" />
            <Link
              to={`/${encodeURIComponent(
                state.localTeam.name
              )}-${encodeURIComponent(seasonsIdLocal)}-vs-${encodeURIComponent(
                state.visitTeam.name
              )}-${encodeURIComponent(seasonsIdVisit)}`}
              style={{ textDecoration: "none" }}
              onClick={validate}
            >
              <Button
                className={classes.button}
                variant="contained"
                startIcon={<PlayArrowIcon />}
              >
                Let's Play
              </Button>
            </Link>
          </Grid>
          <Grid item xs={5} align="center">
            <Select
              leagues={leagues}
              seasons={seasons}
              teams={visitTeams}
              name="Visiting"
              handleLeagueId={handleLeagueIdVisit}
              handleSeasonId={handleSeasonIdVisit}
              handleTeam={handleTeamVisit}
              color="secondary"
            />
            <TeamImage
              src={state.visitTeam.src}
              name={state.visitTeam.name}
              color="secondary"
            />
          </Grid>
        </Grid>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Soccer databot.io"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {modalError}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
