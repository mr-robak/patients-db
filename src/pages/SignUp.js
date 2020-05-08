import React, { useState } from "react";
import "./SignUp.css";
import Axios from "axios";

export default function SignUp() {
  const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "male",
    dateOfBirth: "11-05-2000",
  };
  const [formData, setFormData] = useState(emptyForm);
  // console.log(formData);

  const [message, setMessage] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    // console.log("Form submitted!");
    setFormData(emptyForm);
    setMessage("Signup successful!");
    console.log(newPatient);
    sendUserToServer();
  };
  const sendUserToServer = () => {
    console.log(formData);

    Axios.post("http://localhost:4000/new_user", formData)
      .then(function (response) {
        console.log("response.data.staus", response.data);
        response.data === "OK"
          ? setMessage("Signup successful!")
          : setMessage("");
        // console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const formInputHandler = (event) => {
    // console.log(event.target.name); // the name of the form element
    // console.log(event.target.value); // the value of the form element
    const newKeyValue = { [event.target.name]: event.target.value };
    // console.log(" newKeyValue in the textInput handler: ", newKeyValue);
    // console.log("Complete form data", { ...formData, ...newKeyValue });

    setFormData({ ...formData, ...newKeyValue });
  };
  // console.log("formData", formData);
  const { firstName, lastName, email, phone, gender, dateOfBirth } = formData;
  const newPatient = `
  ###########################
  ###### New Patient ########
  ###########################
  firstName:   ${firstName} 
  lastName:    ${lastName}
  email:       ${email}
  phone:       ${phone}
  gender:      ${gender}
  dateOfBirth: ${dateOfBirth}
  ###########################
  ###########################
  ${message}
  `;
  return (
    <div className="SignUp">
      <h1>Patient signup</h1>
      <form onSubmit={submitForm}>
        {/* onSubmit={submitForm} needs to be here, not on the button for e.preventdefault() to work */}
        <label>
          first name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={formInputHandler}
            required
          />
        </label>
        <label>
          last name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={formInputHandler}
            required
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={formInputHandler}
            required
          />
        </label>
        <label>
          phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={formInputHandler}
            required
          />
        </label>
        <label>
          gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={formInputHandler}
            required
          >
            <option value="">--please choose an option--</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="non-binary">non-binary</option>
          </select>
        </label>
        <label>
          date of birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            min="01-01-1900"
            max="31-12-2020"
            required
            onChange={formInputHandler}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{message}</p>
    </div>
  );
}
