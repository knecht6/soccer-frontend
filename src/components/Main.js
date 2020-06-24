import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import SelectYear from "./SelectYear";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CardLeagues from "./CardLeagues";
import SelectTeam from "./SelectTeam";
import TeamImage from "./TeamImage";
import Liverpool from "../assets/images/teams/icons/Liverpool.png";
import Atletico from "../assets/images/teams/icons/atletico_madrid.png";
import Bayern from "../assets/images/teams/icons/Bayern_Munchen.png";
import Paris from "../assets/images/teams/icons/psg.png";
import Juventus from "../assets/images/teams/icons/juventus.png";
import Versus from "../assets/images/vs.png";
import LiverpoolLogo from "../assets/images/teams/Liverpool.svg";
import AtleticoLogo from "../assets/images/teams/atletico_madrid.png";
import BayernLogo from "../assets/images/teams/Bayern_Munchen.svg";
import ParisLogo from "../assets/images/teams/psg.png";
import JuventusLogo from "../assets/images/teams/juventus.png";
const ArrayExample = [
  {
    id: "liverpool",
    label: "Liverpool",
    src: Liverpool,
    srcLogo: LiverpoolLogo,
  },
  {
    id: "atletico_de_madrid",
    label: "Atletico de Madrid",
    src: Atletico,
    srcLogo: AtleticoLogo,
  },
  {
    id: "bayern_munich",
    label: "Bayern Munich",
    src: Bayern,
    srcLogo: BayernLogo,
  },
  {
    id: "paris_saint_germain",
    label: "París Saint-Germain",
    src: Paris,
    srcLogo: ParisLogo,
  },
  { id: "juventus", label: "Juventus", src: Juventus, srcLogo: JuventusLogo },
];

const useStyles = makeStyles({
  main: {
    textAlign: "center",
    marginBottom: 90,
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

export default function Main() {
  const classes = useStyles();
  const [state, setState] = useState({
    localTeam: {
      id: null,
      name: null,
      year: null,
      src: null,
    },
    visitTeam: {
      id: null,
      name: null,
      year: null,
      src: null,
    },
  });
  const handleNameLocal = (name, id, src) => {
    state.localTeam.name = name;
    state.localTeam.id = id;
    state.localTeam.src = src;
    setState({ ...state });
  };
  const handleNameVisit = (name, id, src) => {
    state.visitTeam.name = name;
    state.visitTeam.id = id;
    state.visitTeam.src = src;
    setState({ ...state });
  };
  const handleYearLocal = (year) => {
    state.localTeam.year = year;
    setState({ ...state });
  };
  const handleYearVisit = (year) => {
    state.visitTeam.year = year;
    setState({ ...state });
  };
  return (
    <Grid container className={classes.main}>
      <CardLeagues />
      <Grid item xs={5} align="center">
        <SelectTeam
          name="Local"
          label="Select the local team"
          handleName={handleNameLocal}
          array={ArrayExample}
        />
        <SelectYear
          name="localYear"
          label="Select the local year"
          nameTeam={state.localTeam.name}
          handleYear={handleYearLocal}
        />
        <TeamImage src={state.localTeam.src} name={state.localTeam.name} />
      </Grid>
      <Grid item xs={2} className={classes.versus}>
        <img src={Versus} alt="versus" width="65rem" height="50rem" />
      </Grid>
      <Grid item xs={5} align="center">
        <SelectTeam
          name="Visit"
          label="Select the visiting team"
          handleName={handleNameVisit}
          array={ArrayExample}
        />
        <SelectYear
          name="visitYear"
          label="Select the visit year"
          nameTeam={state.visitTeam.name}
          handleYear={handleYearVisit}
          color="secondary"
        />
        <TeamImage src={state.visitTeam.src} name={state.visitTeam.name} />
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          className={classes.button}
          variant="contained"
          startIcon={<PlayArrowIcon />}
        >
          Let's Play
        </Button>
      </Grid>
    </Grid>
  );
}
