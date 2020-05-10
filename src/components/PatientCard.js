import React from "react";
import "./PatientCard.css";
import { Link } from "react-router-dom";

export default function PatientCard(props) {
  // console.log("props on PatientCard: ", props);

  const { id, firstName, lastName, dateOfBirth, checkBox } = props;

  const boxHandler = (event) => {
    console.log("event.target.checked in PatientCard", event.target.checked);
    checkBox(event.target.checked); //callback to parent
  };

  return (
    <div className="PatientCard">
      <input
        type="checkbox"
        unchecked
        onChange={boxHandler}
        // checked={checkAttr}
      />
      <p>
        name: {firstName} {lastName}{" "}
      </p>
      <p>id: {id}</p>
      <p>date of birth: {dateOfBirth}</p>
      <Link to={`/patients/${id}`} className="Link">
        <p className="buttons"> show details</p>
      </Link>
    </div>
  );
}
