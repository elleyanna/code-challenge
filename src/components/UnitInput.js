import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";

function UnitInput({ data, options }) {
  const [results, setResults] = React.useState({});

  const getResidentNames = (peopleList, unit) => {
    const residents = peopleList.filter((person) => person.unit === unit);
    setResults(residents);
  };

  return (
    <div>
      <Autocomplete
        id="unit-input"
        options={options}
        onChange={(event, unitNumber) => {
          getResidentNames(data, unitNumber);
        }}
        getOptionLabel={(unit) => unit}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Resident Unit" variant="outlined" />
        )}
      />

      {results.length > 0 &&
        results.map((result, index) => {
          return (
            <Typography key={index}>
              {result.first_name} {result.last_name}
            </Typography>
          );
        })}
    </div>
  );
}

export default UnitInput;
