import "./App.css";
import data_array from "./obj.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Education from "./Education";
import Recreational from "./Recreational";
import Social from "./Social";
import Diy from "./Diy";
import Charity from "./Charity";
import Cooking from "./Cooking";
import Relaxation from "./Relaxation";
import Music from "./Music";
import Busywork from "./Busywork";

function App() {
  var filtered = data_array.filter((data) => data.type === "education");
  const mappingFil = (
    <div className="category">
      {filtered.map((list) => {
        return (
          <div id="card" key={list.id}>
            <p>Activity: {list.activity}</p>
            <p>No. of participants: {list.participants}</p>
            <p>Type: {list.type}</p>
          </div>
        );
      })}
    </div>
  );


  return (
    <>
      <Router>
        <div className="App">
          <h1>Bored?</h1>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/education" component={Education} />
            <Route path="/recreational" component={Recreational} />
            <Route path="/social" component={Social} />
            <Route path="/diy" component={Diy} />
            <Route path="/charity" component={Charity} />
            <Route path="/cooking" component={Cooking} />
            <Route path="/relaxation" component={Relaxation} />
            <Route path="/music" component={Music} />
            <Route path="/busywork" component={Busywork} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
    

const Home = () => (
  <div>
    <p>Categories:</p>
    <Link to="/education">
      <button>Education</button>
    </Link>
    <Link to="/recreational">
      <button>Recreational</button>
    </Link>
    <Link to="/social">
      <button>Social</button>
    </Link>
    <Link to="/diy">
      <button>DIY</button>
    </Link>
    <Link to="/charity">
      <button>Charity</button>
    </Link>
    <Link to="/cooking">
      <button>Cooking</button>
    </Link>
    <Link to="/relaxation">
      <button>Relaxation</button>
    </Link>
    <Link to="/music">
      <button>Music</button>
    </Link>
    <Link to="/busywork">
      <button>Busywork</button>
    </Link>
  </div>
);

export default App;
