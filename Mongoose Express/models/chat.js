const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: "String",
    required: true,
  },
  to: {
    type: "String",
    required: true,
  },
  message: {
    type: "String",
    maxLength: [150, "Length is more than 150 characters..."],
  },
  createdAt: {
    type: "Date",
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
