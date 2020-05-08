const express = require("express");
// console.log("Hello World!");

const port = process.env.PORT || 4000; // use $PORT if it is defined otherwise use 4000 defined
const app = express();

const doctors = require("./doctors.json");
const patients = require("./patients.json");
const db = require("./db.json");

app.listen(port, () => {
  console.log(`Listening at localhost:${port}`);
});

app.get("/", (request, response) => {
  response.send(landingPageHtml);
});

app.get("/doctors", (request, response) => {
  response.send(doctors);
});

app.get("/patients", (request, response) => {
  response.send(patients);
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

function pageNotFound() {
  console.log("404 Page not Found");
}
