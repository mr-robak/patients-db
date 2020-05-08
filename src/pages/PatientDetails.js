import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./PatientDetails.css";

export default function PatientDetails() {
  const { patientId } = useParams();

  const [details, setDetails] = useState({});

  // console.log("params on details page: ", patientId);
  useEffect(() => {
    // const localServerById = `http://localhost:4000/patients/${encodeURIComponent(patientId)}`;

    const apiUrlPatientId = `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${encodeURIComponent(
      patientId
    )}`;
    // console.log(apiUrlPatientId);
    const fetchDetails = async () => {
      const response = await Axios.get(apiUrlPatientId);
      //   console.log(response.data);
      setDetails(response.data);
    };
    fetchDetails();
  }, [patientId]);

  //   console.log("render detail", details);

  const renderDetails = () => {
    // console.log("details", details);
    const {
      id,
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      phoneNumber,
      prescriptions,
    } = details;

    // console.log("prescriptions ", prescriptions);

    return (
      <div className="H1">
        <h1>
          {firstName} {lastName}
        </h1>
        <div className="wrapper">
          <p>id: {id}</p>
          <p>date of birth: {dateOfBirth}</p>
          <p>gender: {gender}</p>
          <br />
          <p>contact details:</p>
          <ul>
            <li>email: {email}</li>
            <li>phone number: {phoneNumber}</li>
          </ul>
          <br />
          <p>
            perscriptions:
            <ul>
              {prescriptions.map((med) => {
                return <li>{med}</li>;
              })}
            </ul>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="PatientDetails">
      {details.id ? renderDetails() : <h2>Loading patient data...</h2>}
    </div>
  );
}
