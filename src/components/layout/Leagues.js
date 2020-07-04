import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import LaLiga from "../../assets/images/leagues/LaLiga.png";
import Premiere from "../../assets/images/leagues/Premier_League.png";
import Ligue1 from "../../assets/images/leagues/Ligue1.png";
import Bundesliga from "../../assets/images/leagues/Bundesliga.png";
import SerieA from "../../assets/images/leagues/Serie_A.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  colored: {
     backgroundColor: "#666"
  }, 
  // colored2: {
  //   backgroundColor: "#fa00af"
  // }
  centrado: {
    justifyContent: 'center'
  }
}));

export default function Leagues() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [teams, setTeams] = React.useState([]);
  const listLeagues = [
    { name: 'Premier League', img: Premiere },
    { name: 'Serie A', img: SerieA },
    { name: 'LaLiga', img: LaLiga },
    { name: 'Bundesliga', img: Bundesliga },
    { name: 'Ligue 1', img: Ligue1 }
  ];
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    var league = listLeagues[newValue];
    fetch(`http://localhost:3001/api/list/statistic/${encodeURIComponent(league.name)}`)
      .then(res => res.json())
      .then(res => {
        setTeams(res);
      })
      ;
  };

  return (
    <div className={classes.root + " leagues-container"}>
      <AppBar position="static" color="default" className={classes.colored}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {listLeagues.map(item => (
            <Tab  label={item.name} key={item.name} icon={<img width={40} height='auto' alt={item.name} src={item.img} />} {...a11yProps(4)} />
          ))}
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Grid container>
          <TeamContainer teams={teams} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <TeamContainer teams={teams} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container>
          <TeamContainer teams={teams} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container>
          <TeamContainer teams={teams} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid container>
          <TeamContainer teams={teams} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid container>
          <TeamContainer teams={teams} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Grid container>
          <TeamContainer teams={teams} />
        </Grid>
      </TabPanel>
    </div>
  );
}
function TeamContainer(props) {
  const teams = props.teams;
  return (
    teams.map(item => (
      <Team team={item} />
    ))
  );
}
function Team(props) {
  const team = props.team;
  return (
          <Grid item container alignItems='center' md={3}>
      <Grid item md={4}>
        <Avatar>
          <img width={40} height='auto' alt={team.team_namee} src={team.img_team} />
        </Avatar>
      </Grid>
      <Grid item align='left' md={8}>{team.team_name}</Grid>
    </Grid>
  );
}