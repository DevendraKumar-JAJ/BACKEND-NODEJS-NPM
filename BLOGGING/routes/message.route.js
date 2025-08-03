const express = require("express");
const upload = require("../utils/blogImg.js");
const messageRoute = express.Router();
const bloogMiddleWare=require('../middleware/bloogMiddleWare.js')
const Message = require("../model/message.model.js");
const jwtValidate = require("../utils/jwtValidate.js");
messageRoute.use(bloogMiddleWare)

messageRoute
  .route("/")
  .get((req, res) => {
    if (req.cookies.token) {
      res.render("addBlog.ejs");
    } else {
      res.redirect("/user/signin");
    }
  })
  .post(upload.single("coverimage"), async (req, res) => {
    const data = await jwtValidate(req.cookies);
    const { title, body, filename } = req.body;
    const uploadedMess = await Message.create({
      title,
      createdBy: data._id,
      body,
      coverImageURL: filename,
    });
    console.log(uploadedMess);
    if (req.body.upload) {
      res.redirect("/blog");
    } else {
      res.redirect("/user");
    }
  });

messageRoute.route("/all").get(async (req, res) => {
  const data = await jwtValidate(req.cookies);
  let blogs = "";
  if (data.role === "ADMIN") {
    blogs = await Message.find({ });
    res.render('blogs.ejs',{blogs})
  } else {
    blogs = await Message.find({ createdBy: data._id });
  }
});

module.exports = messageRoute;
