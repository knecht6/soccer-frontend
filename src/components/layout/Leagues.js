import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
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
  team: {
    '&:hover':{
      backgroundColor: '#2196F3',
      cursor: 'pointer', 
      borderRadius: '20px 20px 20px 20px',
      transition:'.02s'
    }
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
  React.useEffect(()=> {
    console.log('fetching first time');
    fetch(`http://localhost:3001/api/list/statistic/${encodeURIComponent(listLeagues[0].name)}`)
      .then(res => res.json())
      .then(res => {
        setTeams(res);
      });
  }, []);
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
  const hasSelectedTeam = (teamSelected) => {
    
  }
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
            <Tab label={item.name} key={item.name} icon={<img width={40} height='auto' alt={item.name} src={item.img} />} {...a11yProps(4)} />
          ))}
        </Tabs>
      </AppBar>
      {listLeagues.map((league, index)=> (
      <TabPanel value={value} index={index}>
      <Grid container>
        <TeamContainer hasSelectedTeam={hasSelectedTeam} teams={teams} />
      </Grid>
    </TabPanel>
      ))}
    </div>
  );
}
function TeamContainer(props) {
  const teams = props.teams;
  return (
    teams.map(item => (
      <Team team={item} hasSelectedTeam={props.hasSelectedTeam}/>
    ))
  );
}
function Team(props) {
  const classes = useStyles();
  const team = props.team;
  return (
    <Grid item container onClick={e=> {props.hasSelectedTeam(team);}} className={classes.team} alignItems='center' md={3}>
      <Grid item md={4}>
        <Avatar>
          <img width={40} height='auto' alt={team.team_namee} src={team.img_team} />
        </Avatar>
      </Grid>
      <Grid item align='left' md={8}>{team.team_name}</Grid>
    </Grid>
  );
}