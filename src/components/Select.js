import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

export default function Select(props) {
  if (props.leagues || props.seasons || props.teams) {
    if (props.leagues && !props.seasons && !props.teams) {
      return (
        <>
          <Autocomplete
            id={"league" + props.name}
            options={props.leagues}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => {
              if (newValue) {
                props.handleLeagueId(newValue.name);
              } else {
                props.handleLeagueId(null);
              }
            }}
            renderOption={(option) => (
              <React.Fragment>{option.name}</React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label={`select the league of ${props.name}`}
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        </>
      );
    }
    if (props.leagues && props.seasons && !props.teams) {
      return (
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Autocomplete
              id={"league" + props.name}
              options={props.leagues}
              getOptionLabel={(option) => option.name}
              onChange={(event, newValue) => {
                if (newValue) {
                  props.handleLeagueId(newValue.name);
                } else {
                  props.handleLeagueId(null);
                }
              }}
              renderOption={(option) => (
                <React.Fragment>{option.name}</React.Fragment>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`select the league of ${props.name}`}
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              id={"season" + props.name}
              options={props.seasons}
              getOptionLabel={(option) => option.name}
              onChange={(event, newValue) => {
                if (newValue) {
                  props.handleSeasonId(newValue.name);
                } else {
                  props.handleSeasonId(null);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`select the season of ${props.name}`}
                />
              )}
            />
          </Grid>
        </Grid>
      );
    }
    if (props.leagues && props.seasons && props.teams) {
      return (
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Autocomplete
              id={"league" + props.name}
              options={props.leagues}
              getOptionLabel={(option) => option.name}
              onChange={(event, newValue) => {
                if (newValue) {
                  props.handleLeagueId(newValue.name);
                } else {
                  props.handleLeagueId(null);
                }
              }}
              renderOption={(option) => (
                <React.Fragment>{option.name}</React.Fragment>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`select the league of ${props.name}`}
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              id={"season" + props.name}
              options={props.seasons}
              getOptionLabel={(option) => option.name}
              onChange={(event, newValue) => {
                if (newValue) {
                  props.handleSeasonId(newValue.name);
                } else {
                  props.handleSeasonId(null);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`select the season of ${props.name}`}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              id={"team" + props.name}
              options={props.teams}
              getOptionLabel={(option) => option.team_name}
              style={{ width: 270 }}
              onChange={(event, newValue) => {
                if (newValue) {
                  props.handleTeam({
                    id: newValue.id,
                    name: newValue.team_name,
                    src: newValue.img_team,
                  });
                } else {
                  props.handleTeam({
                    id: null,
                    name: null,
                    src: null,
                  });
                }
              }}
              renderOption={(option) => (
                <React.Fragment>
                  <img
                    src={option.img_team}
                    alt={option.team_name}
                    style={{ maxHeight: 25, width: "auto", marginRight : 10 }}
                  />{" "}
                  {option.team_name}
                </React.Fragment>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={`select the ${props.name} team`}
                />
              )}
            />
          </Grid>
        </Grid>
      );
    }
  } else {
    return (
      <CircularProgress
        color={props.color}
        size={80}
        style={{ marginTop: 125 }}
      />
    );
  }
}
