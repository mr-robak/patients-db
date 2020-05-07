import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="HomePage">
      <h1>Welcome to AMS GPs</h1>
      <ContactCard />
      <div>
        <Link to="/schedule" className="Link">
          <p className="buttons">Who is on Duty</p>
        </Link>
        <Link to="/signup" className="Link">
          <p className="buttons">I am a new patient</p>
        </Link>
      </div>
    </div>
  );
}
