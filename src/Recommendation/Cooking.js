import data_array from "../obj.js";

function Cooking() {
  var filtered = data_array.filter((data) => data.type === "cooking");

  const mappingFil = (
    <div className="category">
      {filtered.map((list) => {
        return (
          <div id="card" key={list.id}>
            <div className="card">
              <h2>{list.activity}</h2>
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
      <h3>Category: Cooking</h3>
      {mappingFil}
    </div>
  );
}
export default Cooking;
