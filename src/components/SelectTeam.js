import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function SelectTeam(props) {
  return (
    <>
      <Autocomplete
        id={props.name}
        options={props.array}
        getOptionLabel={(option) => option.label}
        onChange={(event, newValue) => {
          if(newValue){
            props.handleName(newValue.label, newValue.id, newValue.srcLogo);
          }else{
            props.handleName(null);
          }
        }}
        style={{ width: 300 }}
        renderOption={(option) => (
          <React.Fragment>
            <img src={option.src} alt={option.label} width="25px" height="25px" style={{ marginRight : 10 }}/>
            {option.label}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            inputProps={{
              ...params.inputProps
            }}
          />
        )}
      />
    </>
  );
}
