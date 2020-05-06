import React from "react";
import ContactCard from "../components/ContactCard";
import "./DocSchedule.css";

export default function DocSchedule() {
  const doctors = [
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

  // useEffect(() => {

  //   //fetch data
  //   // call fetch()
  // }, []);

  const renderTableRow = () => {
    const newDoctors = [...doctors];
    return newDoctors.map((doc) => {
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

        <p>Table with thead, tfoot, and tbody</p>
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
