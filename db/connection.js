const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

const dbConnect = async () => {
  console.log(process.env.DB_HOST);
  return await mongoose.connect(process.env.DB_HOST);
};

module.exports = dbConnect;
