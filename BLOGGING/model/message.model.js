const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    body: {
      type: String,
      required: true,
    },
    coverImageURL: {
      type: String,
      default:"/images/img.png"
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
