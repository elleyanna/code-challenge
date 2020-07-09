import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Paper from "@material-ui/core/Paper";

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
      {/* Given more time I would refactor the data display to look nicer */}
      <Paper elevation={3}>
        {results.length > 0 &&
          results.map((result, index) => {
            return (
              <Typography key={index}>
                {result.first_name} {result.last_name}
              </Typography>
            );
          })}
      </Paper>
    </div>
  );
}

export default UnitInput;
