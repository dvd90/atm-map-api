const port = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");

const africa = require("./atms/africa.json");
const asia = require("./atms/asia.json");
const eur_middle_east = require("./atms/europe-middle-east.json");
const north_america = require("./atms/north-america.json");
const south_america = require("./atms/south-america.json");

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get("/africa", (req, res) => {
  res.json(africa);
});

app.get("/asia", (req, res) => {
  res.json(asia);
});

app.get("/europe", (req, res) => {
  res.json(eur_middle_east);
});

app.get("/north_america", (req, res) => {
  res.json(north_america);
});

app.get("/south_america", (req, res) => {
  res.json(south_america);
});

app.listen(port, () => console.log(`listening on port ${port}`));
