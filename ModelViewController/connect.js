const mongoose = require("mongoose");

async function connDB (url){
  await mongoose
    .connect(url)
    .then((data) => {
      console.log("DB- whatsApp connected");
    })
    .catch((err) => {
      console.log("Error | connection");
    });

}

module.exports = connDB

