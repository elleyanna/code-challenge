import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";

function ResidentNameInput({ data, options }) {
  const initialResultsState = {
    firstName: null,
    lastName: null,
    roles: [],
    unit: null,
  };

  const [results, setResults] = React.useState(initialResultsState);
  // const [devices, setDevices] = React.useState({});

  // const devices = Object.entries(data.devices);

  // devices.map((device) => {
  //   let key = device[0];
  //   let value = device[1];
  //   // console.log(key, value);
  //   value.map((thing) => {
  //     let collection = [];
  //     if (thing.unit === residentInfo.unit) {
  //       collection.push(key);
  //       console.log(collection);
  //     }
  //     // console.log("thing", thing);
  //   });
  // });

  const getResidentInfo = (data, residentInfo) => {
    if (residentInfo !== null) {
      setResults(residentInfo);
    } else {
      setResults(initialResultsState);
    }
  };

  return (
    <div>
      <Autocomplete
        id="resident-name-input"
        options={options}
        onChange={(event, residentInfo) => {
          getResidentInfo(data, residentInfo);
        }}
        getOptionLabel={(person) => `${person.first_name} ${person.last_name}`}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Resident Name" variant="outlined" />
        )}
      />
      <Typography>{results.unit && `Unit: ${results.unit}`}</Typography>
      {results.roles.map((role, index) => {
        return <Typography key={index}>{role}</Typography>;
      })}
    </div>
  );
}

export default ResidentNameInput;
