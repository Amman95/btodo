import data_array from "../obj.js";

function Relaxation() {
  var filtered = data_array.filter((data) => data.type === "relaxation");

  const mappingFil = (
    <div className="category">
      {filtered.map((list) => {
        return (
          <div id="card" key={list.id}>
            <div className="card">
              <p>Activity: {list.activity}</p>
              <p>No. of participants: {list.participants}</p>
              <p>Type: {list.type}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div id="bored-container">
      <h2>Category: Relaxation</h2>
      {mappingFil}
    </div>
  );
}

export default Relaxation;
