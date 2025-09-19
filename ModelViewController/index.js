const express = require("express");
const app = express();
const connDB = require("./connect");
const userRouter = require("./routes/chat");
const logging = require("./middlewares/chat");
const Path=require('path')

app.set('view engine','ejs')
app.set('views',Path.join(__dirname,"/views"))

const url = "mongodb://127.0.0.1:27017/whatsApp";
connDB(url);


app.use(logging("chatReqLog.txt"));

app.listen(4000, () => {
  console.log("http://localhost:4000/");
});

app.use("/chats", userRouter);

app.get("/", (req, res) => {
  res.send("Home | use /chats");
});

app.use(express.urlencoded({ extended: true }));
