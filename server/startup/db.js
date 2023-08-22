const mongoose = require("mongoose");

require("dotenv").config();

module.exports = () => {
  const db = process.env.DB_URI;
  mongoose.connect(db).then(console.log("Connected to DB"));
};
