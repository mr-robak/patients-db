import React from "react";
import "./ContactCard.css";

export default function ContactCard() {
  const timeNow = new Date().getHours();

  // 08:00 and 16:59

  // console.log("Date", date);
  console.log("time", timeNow);

  return (
    <div className="ContactCard">
      <p>
        We are
        {timeNow >= 8 && timeNow < 17 ? (
          <span className="open"> OPEN </span>
        ) : (
          <span className="closed"> CLOSED </span>
        )}{" "}
        at the moment.
      </p>
      <p>To make an appointment call:</p>
      <p>020 555 55555</p>
    </div>
  );
}
