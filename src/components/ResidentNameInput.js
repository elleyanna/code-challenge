import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Paper from "@material-ui/core/Paper";

function ResidentNameInput({ data, options }) {
  const initialResultsState = {
    firstName: null,
    lastName: null,
    roles: [],
    unit: null,
  };

  const [results, setResults] = React.useState(initialResultsState);
  const [associatedDevices, setAssociatedDevices] = React.useState([]);

  const getResidentInfo = (data, residentInfo) => {
    if (residentInfo !== null) {
      setResults(residentInfo);
      const devices = Object.entries(data.devices);

      // Given more time I would refactor the devices do not contain any duplicates

      devices.forEach((element) => {
        const key = element[0];
        const values = element[1];

        values.forEach((value) => {
          if (
            `${value.unit}` === residentInfo.unit ||
            (residentInfo.roles.includes("Admin") &&
              value.admin_accessible === true)
          ) {
            let newDeviceObject = { key: key, model: value.model };

            setAssociatedDevices((associatedDevices) => [
              ...associatedDevices,
              newDeviceObject,
            ]);
          }
        });
      });
    } else {
      setResults(initialResultsState);
      setAssociatedDevices([]);
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
      {/* Given more time I would refactor the data display to look nicer */}
      <Paper elevation={3}>
        <Typography>{results.unit && `Unit: ${results.unit}`}</Typography>
        {results.roles.map((role, index) => {
          return <Typography key={index}>{role}</Typography>;
        })}
        {associatedDevices.length > 0 &&
          associatedDevices.map((device, index) => {
            return (
              <Typography key={index}>
                {device.key} : {device.model}
              </Typography>
            );
          })}
      </Paper>
    </div>
  );
}

export default ResidentNameInput;
