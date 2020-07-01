import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Leagues from './Leagues';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function Wrapper() {
    const classes = useStyles();
    return (
        <div  className={classes.root + ' wrapper'}>
            <Grid justify="center" container>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        Select your team left
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        Select your team left
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <TextField
                            id="standard-full-width"
                            label="type your team name"
                            fullWidth
                            
                        />
                        <Leagues></Leagues>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}

function LeagueContainer() {

}
function League() {

}
function TeamContainer() {

}
function SeasonContainer() {

}
function Season() {

}
export { Wrapper };