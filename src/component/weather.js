import React from "react";
import state from "../city.js";

const Weather = () => {
  //   console.log(state);
  return (
    <div className="Container">
      <label for="state">Choose a state:</label>
      <select name="states">
        <option value="state">state</option>
      </select>
    </div>
  );
};

export default Weather;
