const mongoose = require("mongoose");

const TransSchema = new mongoose.Schema({
  /*
  type: {
    type: String,
    required: true,
    enum: ["withdrawal", "deposit", "transfer"],
  },
  */

  initialBalance: {
    type: Number,
    required: true,
  },

  deposit: {
    type: Number,
    required: true,
  },

  newTotal: {
    type: Number,
    required: true,
  }
  /*
  timestamp: {
    type: Date,
    default: Date.now,
  },
  */
});

const TransModel = mongoose.model("trans", TransSchema);
module.exports = TransModel;
