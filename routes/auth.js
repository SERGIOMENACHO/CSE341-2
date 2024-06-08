const routes = require("express").Router();
const passport = require("passport");
const controller = require("../controllers/auth");

routes.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/events",
    failureRedirect: "/auth/login",
    successFlash: true,
  })
);

routes.post("/register", controller.register);

module.exports = routes;