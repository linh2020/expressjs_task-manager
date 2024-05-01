const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    name: { type: String },
    completed: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tasks", TaskSchema);
