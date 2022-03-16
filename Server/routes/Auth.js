const router = require("express").Router();
const User = require("../models/User");

router.post("/login", (req, res) => {
  try {
    res.status(200).json({
      message: "login is working ",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: "First User",
      email: "FirsEmail@gmail.com",
      passward: "UsersPassward",
      isAdmin: false,
    });
    const saveUser = await newUser.save();

    res.status(200).json({
      username: saveUser.username,
      email: saveUser.email,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/logout", (req, res) => {
  try {
    res.status(200).json({
      message: "logout is working ",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
