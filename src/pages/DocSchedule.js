import React, { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import "./DocSchedule.css";
import Axios from "axios";

export default function DocSchedule() {
  const [doctors, setDoctors] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("");

  // const localServerUrl = "http://localhost:4000/doctors";
  const apiUrl =
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors";

  useEffect(() => {
    setFetchStatus("Loading data...");
    const fetchDoctors = async () => {
      const fetchedList = await Axios.get(apiUrl);
      console.log("fetch list of doctors in DocShedule: ", fetchedList.data);
      setDoctors(fetchedList.data);
      setFetchStatus("");
    };

    fetchDoctors();
  }, []);

  const renderTable = () => {
    return (
      <table className="Table">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => {
            const { id, doctor, onDuty } = doc;
            return (
              <tr key={id}>
                <td>{doctor}</td>
                <td>{onDuty ? "on duty" : "off duty"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="DocSchedule">
      <h1>Who is on duty?</h1>
      <div>{fetchStatus ? <h2>{fetchStatus} </h2> : renderTable()}</div>
      <ContactCard key="" />
    </div>
  );
}
