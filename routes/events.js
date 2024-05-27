const routes = require("express").Router();
const eventsController = require("../controllers/events");

routes.get("/events", eventsController.getAllEvents);

routes.get("/events/:id", eventsController.getOneEvent);

routes.post("/events/create", eventsController.createEvent);

routes.put("/events/:id", eventsController.updateEvent);

routes.delete("/events/:id", eventsController.deleteEvent);

module.exports = routes;
