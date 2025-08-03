const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

module.exports = main;
