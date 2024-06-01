const routes = require("express").Router();
const eventsController = require("../controllers/events");

// require the validation 
const validation = require("../middleware/validation");

routes.get("/events", eventsController.getAllEvents);

routes.get("/events/:id", eventsController.getOneEvent);

routes.post(
  "/events/create",
  validation.saveEvents,
  eventsController.createEvent
);

// Week 06 assignment
routes.put("/events/:id", validation.saveEvents, eventsController.updateEvent);

// Week 06 assignment
routes.delete("/events/:id", eventsController.deleteEvent);

module.exports = routes;
