import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PatientsDB from "./pages/PatientsDB";
import DocSchedule from "./pages/DocSchedule";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/patients" component={PatientsDB} />
        <Route path="/schedule" component={DocSchedule} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
