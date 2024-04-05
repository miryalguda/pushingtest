const mongoose = require("mongoose");

const WithdrawSchema = new mongoose.Schema({
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
  
  withdraw: {
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

const Withdraw= mongoose.model("Withdraw", WithdrawSchema);
module.exports = Withdraw;