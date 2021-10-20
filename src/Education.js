import "./App.css";
import data_array from "./obj.js";
import { useHistory} from "react-router-dom";


function Education() {

  const history =useHistory();
  
  //history.push('/home');

  var filtered = data_array.filter((data) => data.type === "education");
  var recommends = data_array.filter(
    (data) =>
      data.price === 0.0 && data.accessibility === "Few to no challenges"
  );
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
  );

  // const mappingRecs = (
  //   <div className="recommended">
  //     {recommends.slice(0, 5).map((list) => {
  //       return (
  //         <div id="card" key={list.id}>
  //           <p>Activity: {list.activity}</p>
  //           <p>No. of participants: {list.participants}</p>
  //           <p>Type: {list.type}</p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (

    <div className="App">
      <div id="bored-container">
        {/* <h2>Recommended</h2>
        {mappingRecs} */}
        <h2>Category: Education</h2>
        <button 
          onClick = {() => {
            history.push('/home');}}
            >Back 
        </button>
        
        
        {mappingFil}
      </div>
    </div>
  );
}

export default Education;
