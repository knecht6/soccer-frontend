import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "10rem",
    width: "100%",
    textAlign: "center",
  },
});

export default function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        404 Not Found
      </Typography>
    </div>
  );
}
