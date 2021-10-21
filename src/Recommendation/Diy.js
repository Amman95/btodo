import data_array from "../obj.js";
import "./Rec.css";
import { useHistory } from "react-router-dom";
import FilterDisplay from "./Filter.js";

function Diy() {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <FilterDisplay category="diy" data_array={data_array} />
      <div className="App">
        <div id="bored-container">
          <h2>Category: Diy</h2>
        </div>
      </div>
    </div>
  );
}

export default Diy;
