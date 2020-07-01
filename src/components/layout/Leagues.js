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
}));

export default function Leagues() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const teams = [
    'team 1', 'team 2', 'team 3', 'team 4',
    'team 5', 'team 6', 'team 7', 'team 8',
  ];
  return (
    <div className={classes.root+" leagues-container"}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="League 1" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="League 2" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="League 3" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="League 4" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="League 5" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="League 6" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="League 7" icon={<ThumbUp />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid justify="start" container>
          {teams.map(item => {
            return <Grid item lg={4}>
              <Avatar>{item[0]}</Avatar>
              <Typography>{item}</Typography>
            </Grid>
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        League one
      </TabPanel>
      <TabPanel value={value} index={2}>
      League two
      </TabPanel>
      <TabPanel value={value} index={3}>
      League three
      </TabPanel>
      <TabPanel value={value} index={4}>
      League four
      </TabPanel>
      <TabPanel value={value} index={5}>
      League five
      </TabPanel>
      <TabPanel value={value} index={6}>
      League six
      </TabPanel>
    </div>
  );
}