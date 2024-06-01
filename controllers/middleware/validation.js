const validator = require("../helpers/validate");

const saveEvents = async (req, res, next) => {
  const validationRule = {
    title: "required|string",
    description: "required|string",
    date: "string",
    location: "required|string",
    organizer: "required|string",
    created_at: "string",
    is_done: "boolean",
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(400).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveEvents,
};
