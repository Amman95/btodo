import data_array from "../obj.js";
import "./Rec.css";
import { useHistory } from "react-router-dom";
import FilterDisplay from "./Filter.js";

function Relaxation() {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <div className="App">
        <div id="bored-container">
          <h2>Category: Relaxation</h2>
          <FilterDisplay category="relaxation" data_array={data_array} />
        </div>
      </div>
    </div>
  );
}

export default Relaxation;
