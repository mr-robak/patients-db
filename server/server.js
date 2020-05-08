const express = require("express");
const cors = require("cors");
const fs = require("fs");
// console.log("Hello World!");

const app = express();
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000; // use $PORT if it is defined otherwise use 4000 defined

let db = require("./db.json");

const doctors = db.doctors;
const patients = db.patients;

app.listen(port, () => {
  console.log(`Listening at localhost:${port}`);
});

app.post("/new_user", (request, response) => {
  console.log("Request at /new_user", request.body);
  const newPatient = request.body;
  console.log("POST recieved at /new_user", newPatient);
  response.sendStatus(200);

  fs.readFile("./server/db.json", "utf8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      let obj = JSON.parse(data);
      console.log("New object from JSON", obj);
      obj.patients.push(newPatient);
      db = JSON.stringify(obj);
      const jsonContent = JSON.stringify(obj);
      fs.writeFile("./server/db.json", jsonContent, "utf8", function (err) {
        if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
        console.log("JSON file has been saved.");
      });
    }
  });
});

// db.patients.push({
//   id: "666",
//   firstName: "66",
//   lastName: "666",
//   gender: "Female",
//   dateOfBirth: "27/08/1959",
//   email: "fjohnston7@noaa.gov",
//   phoneNumber: "+505 127 699 7118",
//   prescriptions: [Array],
//   doctorId: 3,
// });

app.get("/", (request, response) => {
  response.send(landingPageHtml);
});
app.get("/doctors", (request, response) => {
  response.send(doctors);
});
app.get("/patients", (request, response) => {
  response.send(patients);
});
app.get("/patients/:id", (request, response) => {
  const urlId = request.params.id;
  console.log("Patient data requested from url:", urlId);
  const getPatient = patients.find((patient) => {
    // console.log("patient", patient.id, "-- ID", patient.id === urlId);
    return patient.id === urlId;
  });
  response.send(getPatient);
});

const landingPageHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patients Server</title>
</head>
<body>
    <h1>Server Running on port: ${port}</h1>
</body>
</html>`;
