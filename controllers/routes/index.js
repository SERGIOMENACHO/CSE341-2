const routes = require("express").Router();

routes.use("/", require("./events"));

module.exports = routes;
