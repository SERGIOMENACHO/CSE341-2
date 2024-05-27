const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

// Swagger set up
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");

mongoose
  .connect(process.env.MONGO_URI)
  .then((success) => console.log("Connected to database"))
  .catch((err) => console.log(err));

app
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    next();
  })
  .use("/", require("./routes"));

app.listen(port, () => {
  console.log("Listening on port " + port);
});
