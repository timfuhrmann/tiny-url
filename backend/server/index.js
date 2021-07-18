const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(require("../router"));

app.use("/api-docs/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
