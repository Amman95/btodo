import "./App.css";
import data_array from "./obj.js";
import { useHistory } from "react-router-dom";
import Dropdown from "react-dropdown";


function Busywork() {

  const history = useHistory();
  //useState untuk filter function
  const [filter, setFilter] = React.useState("");
  

  var filtered = data_array.filter((data) => data.type === "busywork");
 

  const mappingFil = (
    <div className="category">
      {filtered.map((list) => {
        return (
          <div id="card" key={list.id}>
            <div class="act">
              <p>Activity: {list.activity}</p>
              <p>No. of participants: {list.participants}</p>
              <p>Type: {list.type}</p>
            </div>
          </div>
        );
      })}
    </div>


      //filter function
      function filter(filter){
         
        let filter = []
          for(let i =0; i< filter.length; i++){
             if(filter[i] % 2 === 0){
               newArr.push(anArray[i])
                 }
  }
  
    return (newArr)
}


//mapping for filter function








  );

  return (
    <div className="App">
      <div id="bored-container">
        {/* <h2>Recommended</h2>
        {mappingRecs} */}
        <h2>Category: Busywork</h2>
        <button
          onClick={() => {
            history.push("/home");
          }}
        >
          Back
        </button>
        {mappingFil}

        <label for="filter">Filter:</label>
          <option value="all">All</option>
          <option value="solo">Solo</option>
          <option value="group">Group</option>
          <option value="free">Free</option>
          <option value="price">Price</option>
        </select>
       
      </div>
    </div>
  );
}

export default Busywork;
