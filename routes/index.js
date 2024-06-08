const routes = require("express").Router();

routes.use("/events", require("./events"));
routes.use("/", require("./auth"));

module.exports = routes;
