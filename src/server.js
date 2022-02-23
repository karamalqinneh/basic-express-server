"use strict";

const express = require("express");
const app = express();
const personsHandler = require("./controllers/persons");
const errorHandler = require("./error-handlers/500");
const notFound = require("./error-handlers/404");
const morgan = require("morgan");
const validator = require("./middleware/validator");
const logger = require("./middleware/logger");
const cors = require("cors");

const start = (port) => {
  app.listen(port, () => {
    console.log(`server running on port:${port}`);
  });
};

// app.use(morgan(":method :url"));
app.use(cors());
app.use(logger);

app.get("/", (req, res) => {
  res.send("go to person route and write a query to avoid faing errors");
});

app.get("/person", validator, personsHandler);

app.use(errorHandler);
app.use("*", notFound);

module.exports = {
  app,
  start,
};
