import React, { useEffect, useState } from "react";
import Axios from "axios";
import PatientCard from "../components/PatientCard";

export default function PatientsDB() {
  const [doctors, setDoctors] = useState([]);

  const [selectedDoc, setSelectedDoc] = useState("all");
  const [patients, setPatients] = useState([]);

  const apiUrlDocs =
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors";
  const apiUrlPatients =
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients";

  useEffect(() => {
    const fetchDoctors = async () => {
      let fetchedList = await Axios.get(apiUrlDocs);
      // console.log("fetched list of doctors in PatientDB: ", fetchedList.data);
      // console.log({ id: -1, doctor: "all" }, ...fetchedList.data);
      setDoctors(fetchedList.data);
      fetchedList = await Axios.get(apiUrlPatients);

      const sortByName = fetchedList.data.sort((a, b) => {
        //sorted by lastName order
        return a.lastName.localeCompare(b.lastName);
      });
      // console.log("sortByName: ", sortByName);
      setPatients(sortByName);
      // console.log("fetched list of patients in PatientDB: ", fetchedList.data);
    };

    fetchDoctors();
  }, []);

  const selectOption = (event) => {
    // console.log("currently selected: ", selectedDoc);
    // console.log("event.target.value", event.target.value);
    setSelectedDoc(event.target.value);
    // console.log("selectedDoc", selectedDoc);
  };

  const filteredPatients = patients.filter((patient) => {
    // console.log("id patient", patient.doctorId, "selected doc", selectedDoc);
    return selectedDoc === "all"
      ? patient
      : patient.doctorId === parseInt(selectedDoc);
  });

  const renderOptions = doctors.map((doc) => {
    const { id, doctor } = doc;
    return (
      <option key={id} value={id}>
        {doctor}
      </option>
    );
  });

  const renderPatients = filteredPatients.map((patient) => {
    const { id, firstName, lastName, dateOfBirth } = patient;
    return (
      <PatientCard
        key={id}
        id={id}
        firstName={firstName}
        lastName={lastName}
        dateOfBirth={dateOfBirth}
      />
    );
  });

  return (
    <div>
      <h1>Patients Database</h1>
      <label>
        doctor:
        <select name="doctors" value={selectedDoc} onChange={selectOption}>
          <option key="-1" id="-1" value="all">
            showing all patients
          </option>
          {renderOptions}
        </select>
      </label>
      <br />
      {patients[0] ? renderPatients : <h2>Loading data...</h2>}
    </div>
  );
}
