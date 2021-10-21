import data_array from "../obj.js";
import "./Rec.css";
import { useHistory } from "react-router-dom";
import FilterDisplay from "./Filter.js";

function Busywork() {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <FilterDisplay category="busywork" data_array={data_array} />
      <div className="App">
        <div id="bored-container">
          <h2>Category: Busywork</h2>
        </div>
      </div>
    </div>
  );
}

export default Busywork;
