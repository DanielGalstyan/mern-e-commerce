const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

let PORT = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb://Daniel:qT0qLSLZFhI28ALf@cluster0.f1jea.mongodb.net/e-commerce"
  )
  .then(() => console.log("DB conection was succesful"))
  .catch((error) => console.log("DB: " + error));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/post", (req, res) => {
  res.send("this is post request");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
