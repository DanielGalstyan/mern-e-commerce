const router = require("express").Router();
const Cart = require("../models/Cart");

router.post("/add", async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const saveCart = await newCart.save();
    res.status(200).json(saveCart);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
