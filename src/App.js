import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PatientsDB from "./pages/PatientsDB";
import DocSchedule from "./pages/DocSchedule";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import PatientDetails from "./pages/PatientDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/patients/:patientId" component={PatientDetails} />
        <Route exact path="/patients" component={PatientsDB} />
        <Route path="/schedule" component={DocSchedule} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
