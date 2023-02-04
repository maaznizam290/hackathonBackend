const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  todo: {
    type: String,
  },
  create_at: {
    type: Date,
    default: Date.now(),
  },
});

const Todomdel = mongoose.model("todo", TodoSchema);
module.exports = TodoModel;
