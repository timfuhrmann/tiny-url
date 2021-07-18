const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger");
const { origin } = require("../config");

const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors({ origin }));

app.use(require("../router"));

app.use("/api-docs/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
