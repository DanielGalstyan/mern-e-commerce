const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const cors = require("cors");
const morgan = require("morgan");

const userRoute = require("./routes/users");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bodyParser = require("body-parser");

let PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB conection was succesful"))
  .catch((error) => console.log("DB: " + error));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/post", (req, res) => {
  res.send("this is post request");
});

app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
