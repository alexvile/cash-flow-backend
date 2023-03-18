const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();
app.use(logger("short"));
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  return res.status(200).json({ message: "hello" });
});

module.exports = app;
