import React from "react";
import ResidentNameInput from "./components/ResidentNameInput";
import UnitInput from "./components/UnitInput.js";
import { property_data } from "./data/PropertyData.js";
import "./App.css";

function App() {
  return (
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
      <ResidentNameInput
        data={property_data}
        options={property_data.people}
        // devices={property_data.devices}
      />
    </div>
  );
}

export default App;
