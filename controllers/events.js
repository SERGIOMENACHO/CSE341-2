const Event = require("../modules/events");
const ObjectId = require("mongodb").ObjectId;

// GET All
const getAllEvents = async (req, res, next) => {
  Event.find()
    .then((allEvents) => {
      res.status(200).json(allEvents);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// GET by ID
const getOneEvent = async (req, res, next) => {
  const eventId = req.params.id;
  Event.find({ _id: eventId })
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// POST
const createEvent = async (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("You must use a valid event id to update.");
  }
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    location: req.body.location,
    organizer: req.body.organizer,
    created_at: req.body.created_at,
    is_done: req.body.is_done,
  });

  event
    .save()
    .then((createdEvent) => {
      res.status(201).json(createdEvent);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

// PUT
const updateEvent = async (req, res, next) => {
  const eventId = req.params.id;

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("You must use a valid event id to update.");
  }

  // find the contact to update
  Event.findOne({ _id: eventId })
    .then((event) => {
      event.title = req.body.title;
      event.description = req.body.description;
      event.date = req.body.date;
      event.location = req.body.location;
      event.organizer = req.body.organizer;
      event.created_at = req.body.created_at;
      event.is_done = req.body.is_done;

      Event.updateOne({ _id: eventId }, event)
        .then((response) => {
          res.status(204).json({ message: "Event Updated successfully" });
        })
        .catch((error) => {
          res.status(500).json({ error: error });
        });
    })

    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

// DELETE
const deleteEvent = async (req, res, next) => {
  const eventId = req.params.id;

  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("You must use a valid event id to delete.");
  }
  Event.findOne({ _id: eventId })
    .then((event) => {
      event
        .deleteOne({ _id: eventId })
        .then((response) => {
          res.status(200).json({ message: "Contact Deleted successfully" });
        })
        .catch((error) => {
          res.status(500).json({ error: error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

module.exports = {
  getAllEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
