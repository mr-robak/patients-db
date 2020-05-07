import React, { useEffect, useState } from "react";
import Axios from "axios";
import PatientCard from "../components/PatientCard";

export default function PatientsDB() {
  const initialDoctors = [
    {
      id: 1,
      doctor: "Dr. Coventry",
      email: "ecoventry@amspractice.nl",
      onDuty: true,
    },
    {
      id: 2,
      doctor: "Dr. Adenet",
      email: "radenet@amspractice.nl",
      onDuty: true,
    },
    {
      id: 3,
      doctor: "Dr. Tollady",
      email: "atollady@amspractice.nl",
      onDuty: false,
    },
  ];
  const [doctors, setDoctors] = useState([]);
  // const [fetchStatus, setFetchStatus] = useState("");
  const [selectedDoc, setSelectedDoc] = useState("please select a doctor");
  const [patients, setPatients] = useState([]);

  const apiUrlDocs =
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors";
  const apiUrlPatients =
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients";

  useEffect(() => {
    // setFetchStatus("Loading data...");
    const fetchDoctors = async () => {
      //fetch data
      let fetchedList = await Axios.get(apiUrlDocs);
      // console.log("fetched list of doctors in PatientDB: ", fetchedList.data);
      setDoctors(fetchedList.data);
      fetchedList = await Axios.get(apiUrlPatients);
      setPatients(fetchedList.data);
      console.log("fetched list of patients in PatientDB: ", fetchedList.data);

      // setFetchStatus("");
    };

    fetchDoctors(); // call fetch()
  }, []);

  const selectOption = (event) => {
    // console.log("currently selected: ", selectedDoc);
    // console.log("event.target.value", event.target.value);
    setSelectedDoc(event.target.value);
  };

  const renderOptions = () => {
    return doctors.map((doc) => {
      const { id, doctor } = doc;
      return (
        <option key={id} value={doctor}>
          {doctor}
        </option>
      );
    });
  };

  const renderPatients = () => {
    patients.map((patient) => {
      const { id, firstName, lastName, dateOfBirth } = patient;
      return (
        <PatientCard
          key={id}
          firstName={firstName}
          lastName={lastName}
          dateOfBirth={dateOfBirth}
        />
      );
    });
  };

  return (
    <div>
      <h1>Patients Database</h1>
      <label>
        doctor:
        <select name="doctors" value={selectedDoc} onChange={selectOption}>
          <option key="-1" value="showing all patients">
            showing all patients
          </option>
          {renderOptions()}
        </select>
      </label>
      {renderPatients()}
    </div>
  );
}
