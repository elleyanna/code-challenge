import React from "react";
import ResidentNameInput from "./components/ResidentNameInput";
import UnitInput from "./components/UnitInput.js";
import Typography from "@material-ui/core/Typography";
import { property_data } from "./data/PropertyData.js";
import "./App.css";

function App() {
  return (
    // Given more time I would create a prettier homepage display right now it's just barebones requirements
    <div className="App">
      <UnitInput
        data={property_data.people}
        options={[
          ...new Set(
            property_data.people.map((person) => {
              return person.unit;
            })
          ),
        ]}
      />
      <ResidentNameInput data={property_data} options={property_data.people} />
    </div>
  );
}

export default App;
