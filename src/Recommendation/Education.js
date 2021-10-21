import data_array from "../obj.js";
import "./Rec.css";
import { useHistory } from "react-router-dom";
import FilterDisplay from "./Filter.js";

function Education() {
  const history = useHistory();

  return (
    <div>
      <div className="top-bar">
        <button onClick={() => history.goBack()}>Back</button>
        <FilterDisplay category="education" data_array={data_array} />
      </div>
      <div className="App">
        <div id="bored-container">
          <h2>Category: Education</h2>
        </div>
      </div>
    </div>
  );
}

export default Education;
