const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// edit user data

router.put("/:id", async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      username: updatedUser.username,
      email: updatedUser.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//delete user data

router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// get user data

router.post("/find/:id", async (req, res) => {
  try {
    const findUser = await User.findById(req.params.id);
    res.status(200).json({
      username: findUser.username,
      email: findUser.email,
      isAdmin: findUser.isAdmin,
      createdAt: findUser.createdAt,
      updatedAt: findUser.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
// router.post("/findAll/:id", async (req, res) => {
//   try {
//     const findUser = await User.findById(req.params.id);
//     res.status(200).json(findUser);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// });

module.exports = router;
