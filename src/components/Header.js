import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: "auto",
    display: "flex",
    width : "100%"
  },
  title: {
    fontSize: 30,
    color: "#EE2A39",
  },
  socialNetwork: {
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "2em",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Typography>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className={classes.title}
        >
          Soccer Predictions
        </Link>
      </Typography>
      <div className={classes.socialNetwork}>
        <FacebookShareButton url="#">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url="#">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url="#">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </header>
  );
}
