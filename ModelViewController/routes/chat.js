const express = require("express");
const router = express.Router();
const Chat = require("../models/chat");
const {
  handleGetChats,
  handlePostChats,
  handlePatchChats,
  handleDeleteChats,
} = require("../controller/chat");

router.route("/")
.get(handleGetChats)
.post(handlePostChats);

router.route("/:id")
.patch(handlePatchChats)
.delete(handleDeleteChats);
module.exports = router;
