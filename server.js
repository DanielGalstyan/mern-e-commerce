const { response } = require("express");
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/post", (req, res) => {
  res.send("this is post request");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
