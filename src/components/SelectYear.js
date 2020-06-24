import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

const ArrayExample = [
  { year: "2020" },
  { year: "2019" },
  { year: "2018" },
  { year: "2017" },
  { year: "2016" },
  { year: "2015" },
];

export default function SelectTeam(props) {
  const color = props.color ? props.color : "primary";
  return (
    <>
      {props.nameTeam ? (
        <Autocomplete
          id={props.name}
          options={ArrayExample}
          defaultValue={ArrayExample[0]}
          getOptionLabel={(option) => option.year}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label={props.label} />
          )}
        />
      ) : (
        <CircularProgress color={color} />
      )}
    </>
  );
}
