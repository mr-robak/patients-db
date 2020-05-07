import React from "react";
import "./PatientCard.css";

export default function PatientCard(props) {
  // console.log("props on PatientCard: ", props);
  const { id, firstName, lastName, dateOfBirth } = props;

  return (
    <div className="PatientCard">
      <p>
        name: {firstName} {lastName}{" "}
      </p>
      <p>id: {id}</p>
      <p>date of birth: {dateOfBirth}</p>
      <p>show details</p>
    </div>
  );
}
