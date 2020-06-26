import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PlayerLeft from "../assets/images/soccer_player.png";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

export default function Confrontation() {
  const classes = useStyles();
  const [ error, setError ] = useState(null);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ localTeam, setLocalTeam ] = useState(null);
  const [ visitTeam, setVisitTeam ] = useState(null);
  let { nameLocal, seasonLocal, nameVisit, seasonVisit } = useParams();
  useEffect(()=>{
    fetch(`http://localhost:3001/api/getData/${nameLocal}/${seasonLocal}/${nameVisit}/${seasonVisit}`)
    .then((result)=>{
      
    },(error)=>{

    })
    .catch((err)=>{

    });
  }, []);
  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        Confrontation Page
      </Typography>
      <Grid item xs={12} align="center">
        <img
          src={PlayerLeft}
          alt="Player Left"
          style={{ maxWidth: 700, height: "auto" }}
        />
      </Grid>
    </div>
  );
}
