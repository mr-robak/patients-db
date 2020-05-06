import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <ContactCard />
      <Link to="/schedule">
        <p>Who is on Duty</p>
      </Link>
      <Link to="/signup">
        <p>I am a new patient</p>
      </Link>
    </div>
  );
}
