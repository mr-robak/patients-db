import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div activeClassName="NavBar">
      <NavLink
        to="/"
        exact="true"
        activeStyle={{
          backgroundColor: "black",
          fontWeight: "bolder",
          color: "white",
        }}
        style={{
          color: "black",
          backgroundColor: "white",
          padding: 0.5 + "em",
          margin: 0.2 + "em",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/schedule"
        exact="true"
        activeStyle={{
          backgroundColor: "black",
          fontWeight: "bolder",
          color: "white",
        }}
        style={{
          color: "black",
          backgroundColor: "white",
          padding: 0.5 + "em",
          margin: 0.2 + "em",
        }}
      >
        Doctor schedule
      </NavLink>
      <NavLink
        to="/signup"
        exact="true"
        activeStyle={{
          backgroundColor: "black",
          fontWeight: "bolder",
          color: "white",
        }}
        style={{
          color: "black",
          backgroundColor: "white",
          padding: 0.5 + "em",
          margin: 0.2 + "em",
        }}
      >
        Patient Signup
      </NavLink>
      <NavLink
        to="/patients"
        exact="true"
        activeStyle={{
          backgroundColor: "black",
          fontWeight: "bolder",
          color: "white",
        }}
        style={{
          color: "black",
          backgroundColor: "white",
          padding: 0.5 + "em",
          margin: 0.2 + "em",
        }}
      >
        Patients Database
      </NavLink>
    </div>
  );
}
