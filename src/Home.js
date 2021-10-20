import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRoute as Router, Route, Switch, Link } from "react-router-dom";
import Education from "./Education";

function Home() {
  const [ActivityDet, setADetails] = useState("");
  const [Activity, setActivity] = useState("");
  const [Type, setType] = useState("");
  const [Participant, setParticipant] = useState("");

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity/")
      .then((response) => response.json())
      .then((data) => setADetails(data));
  }, []);

  return (
    <>
      <div id="card-container">
        <div id="card">
          <p>Activity: {ActivityDet.activity}</p>
          <p>No. of participants: {ActivityDet.participants}</p>
          <p>Type: {ActivityDet.type}</p>
        </div>
      </div>

      <div id="categories">
        <Router>
          <ul>
            <li>
              <Link to="/Education">Education</Link>
            </li>
            <li>
              <Link to="/recreational">Recreational</Link>
            </li>
            <li>
              <Link to="/social">Social</Link>
            </li>
            <li>
              <Link to="/diy">DIY</Link>
            </li>
            <li>
              <Link to="/charity">Charity</Link>
            </li>
            <li>
              <Link to="/cooking">Cooking</Link>
            </li>
            <li>
              <Link to="/relaxation">Relaxation</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/busywork">Busywork</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Education">
              <Education />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default Home;
