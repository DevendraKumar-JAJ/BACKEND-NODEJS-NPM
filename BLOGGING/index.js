const main = require("./connect-db.js");
const dotenv = require("dotenv");
const { router } = require("./routes/blog.route.js");
const { checkParams } = require("./middleware/blog.middleware.js");
const express = require("express");
const path = require("path");
const cookie_parser = require("cookie-parser");
const messageRoute = require("./routes/message.route.js");
dotenv.config();
main().then(() => console.log("DB Connected"));
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookie_parser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(checkParams);

app.use(express.static('public'))




app.set("view engine", "ejs");
// app.set("views",path.join(__dirname,'/views'))
app.set("views", path.resolve("./views"));
app.use("/user", router);
app.use('/blog',messageRoute)
app.get('/',(req,res)=>res.redirect('/user'))
app.use((req, res) => {
  res.status(404).json({ type: 0, message: "Page not found" });
});


app.listen(PORT, () => {
  console.log(PORT);
});
