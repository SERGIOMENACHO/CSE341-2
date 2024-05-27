const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  description: { type: String },
  date: { type: String },
  location: { type: String },
  organizer: { type: String },
  created_at: { type: String },
  is_done: { type: Boolean },
});

module.exports = mongoose.model("event", eventSchema);
