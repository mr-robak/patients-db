import React, { useEffect, useState } from "react";
import Axios from "axios";
import patientCard from "../components/patientCard";

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
  const [doctors, setDoctors] = useState(initialDoctors);
  // const [fetchStatus, setFetchStatus] = useState("");
  const [selectedDoc, setSelectedDoc] = useState("test");

  const apiUrl =
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors";

  useEffect(() => {
    // setFetchStatus("Loading data...");
    const fetchDoctors = async () => {
      //fetch data
      const fetchedList = await Axios.get(apiUrl);
      // console.log("fetch list of doctors in DocShedule: ", fetchedList.data);
      setDoctors(fetchedList.data);
      // setFetchStatus("");
      // console.log(fetchedList.data[0].doctor);
      setSelectedDoc(fetchedList.data[0].doctor);
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
  // console.log(renderOptions());
  return (
    <div>
      <h1>Patients Database</h1>
      <label>
        doctor:
        <select name="doctors" value={selectedDoc} onChange={selectOption}>
          {renderOptions()}
        </select>
      </label>
      <patientCard />
    </div>
  );
}
