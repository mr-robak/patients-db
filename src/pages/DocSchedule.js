import React, { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import "./DocSchedule.css";
import Axios from "axios";

export default function DocSchedule() {
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
  const apiUrl =
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors";
  useEffect(() => {
    const fetchDoctors = async () => {
      //fetch data
      const fetchedList = await Axios.get(apiUrl);
      console.log("fetch list of doctors in DocShedule: ", fetchedList.data);
      setDoctors(fetchedList.data);
    };

    fetchDoctors(); // call fetch()
  }, []);

  const renderTableRow = () => {
    return doctors.map((doc) => {
      const { doctor, onDuty } = doc;
      return (
        <tr>
          <td>{doctor}</td>
          <td>{onDuty ? "on duty" : "off duty"}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1>Who is on duty?</h1>
      <div>
        <h2>Placeholder for a schedule TABLE</h2>

        <table className="Table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>{renderTableRow()}</tbody>
        </table>
      </div>
      <ContactCard />
    </div>
  );
}
