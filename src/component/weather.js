import React, { useEffect, useState } from "react";
import state from "../city.js";
import Codes from "../statecode.js";

const Weather = () => {
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const stateNames = Object.keys(state);
  const handleStateChange = (e) => {
    console.log(e.target.value);
    setCities(state[e.target.value]);
    setSelectedState(Codes[e.target.value]);
    console.log(selectedState);
  };

  const handleCityChange = (e) => {
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  };

  // useEffect((),[cities, state])

  return (
    <div className="Container">
      <label for="state">Choose a state:</label>
      <select name="states" onChange={handleStateChange}>
        {Object.keys(state).map((s) => {
          return (
            <option key={s} value={s}>
              {s.replace("_", " ")}
            </option>
          );
        })}
      </select>
      <label for="city">Choose a city:</label>
      <select name="city">
        {cities.map((c) => {
          return (
            <option key={c} value={c}>
              {c}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Weather;
