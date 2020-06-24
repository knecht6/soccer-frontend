import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header : {
    fontSize : 30,
    marginTop : 5,
    marginBottom : 5,
    color : '#EE2A39'
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Typography className={classes.header}>
      Soccer Predictions
    </Typography>
  );
}
