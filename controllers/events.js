const Event = require("../modules/events");

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
  const event = new Event({
    title: "FSY",
    description: "For the strenght of the youth",
    date: "25/12/2023",
    location: "Utah",
    organizer: "Brigham Young",
    created_at: "02/01/2023",
    is_done: true,
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

  // find the contact to update
  Event.findOne({ _id: eventId })
    .then((event) => {
      event.title = "FSY";
      event.description = "For the strenght of the youth";
      event.date = "25/12/2023";
      event.location = "Utah";
      event.organizer = "Brigham Young";
      event.created_at = "02/01/2023";
      event.is_done = true;

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
