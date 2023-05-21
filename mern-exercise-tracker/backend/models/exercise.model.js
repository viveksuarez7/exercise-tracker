const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema(
  {
    username: { type: String, requied: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

const exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = exercise;
