import React from "react";
import Color from "color";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LaLiga from "../assets/images/leagues/LaLiga.png";
import Premiere from "../assets/images/leagues/Premier_League.png";
import Ligue1 from "../assets/images/leagues/Ligue1.png";
import Bundesliga from "../assets/images/leagues/Bundesliga.png";
import SerieA from "../assets/images/leagues/Serie_A.png";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
    marginTop: 15,
    marginBottom: 25,
    marginLeft: 0,
    marginRight: 0, 
    width: "100%"
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    width: 200,
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "1rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title }) => {
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <img src={image} alt={title} style={{maxHeight: 100, width: "auto"}}/>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const CardLeagues = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const PremierStyles = useStyles({ color: "#6CADDF" });
  const LaLigaStyles = useStyles({ color: "#F2911F" });
  const BundesligaStyles = useStyles({ color: "#000000" });
  const LigueOneStyles = useStyles({ color: "#303D56" });
  const SerieAStyles = useStyles({ color: "#008C45" });
  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={"nowrap"} align="center">
        <Grid item>
          <CustomCard classes={PremierStyles} title={"Premier League"} image={Premiere} />
        </Grid>
        <Grid item>
          <CustomCard classes={LaLigaStyles} title={"LaLiga"} image={LaLiga} />
        </Grid>
        <Grid item>
          <CustomCard classes={BundesligaStyles} title={"Bundesliga"} image={Bundesliga} />
        </Grid>
        <Grid item>
          <CustomCard classes={LigueOneStyles} title={"Ligue 1"} image={Ligue1} />
        </Grid>
        <Grid item>
          <CustomCard classes={SerieAStyles} title={"Serie A"} image={SerieA} />
        </Grid>
      </Grid>
    </>
  );
});
export default CardLeagues;
