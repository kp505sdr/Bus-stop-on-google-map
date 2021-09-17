import "./App.css";
import MapContainer from "./component/Map";
import React, { useState } from "react";
import { FormControl, MenuItem, Select, Box } from "@material-ui/core";

function App() {
  const [myroute, setmyroute] = useState("");
  const handleChange = (e) => {
    setmyroute(e.target.value);
  };
  return (
    <div className="App">
      <Box>
        <FormControl>
          <h3 className="select">Select Route</h3>
          <Select className="select-2" value={myroute} onChange={handleChange}>
            <MenuItem value="BOS2_3@AM">Route 1</MenuItem>
            <MenuItem value="BOS2_3@PM">Route 2</MenuItem>
            <MenuItem value="BOS2_5@AM">Route 3</MenuItem>
            <MenuItem value="BOS2_6@AM">Route 4</MenuItem>
            <MenuItem value="BOS3_1@AM">Route 5</MenuItem>
            <MenuItem value="BOS2_5@PM">Route 6</MenuItem>
            <MenuItem value="SEA1_2@AM">Route 7</MenuItem>
            <MenuItem value="SEA1_1@AM">Route 8</MenuItem>
            <MenuItem value="SEA1_2@PM">Route 9</MenuItem>
            <MenuItem value="SEA1_1@PM">Route 10</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className="div2">
        <MapContainer myroute={myroute} />
      </div>
    </div>
  );
}

export default App;
