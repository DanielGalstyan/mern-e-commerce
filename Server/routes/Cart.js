const router = require("express").Router();
const Cart = require("../models/Cart");
const { route } = require("./Auth");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./VerifyToken");

router.post("/add", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const saveCart = await newCart.save();
    res.status(200).json(saveCart);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//update cart data

router.put("/cartUpdate", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.body.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateCart);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//cart deleting

router.delete("/cartdeleting", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.body.id);
    res.status(200).json("Cart has been deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// find by user
router.post("/finduser", verifyTokenAndAdmin, async (req, res) => {
  try {
    const userCart = await Cart.findOne({
      userId: req.body.userId,
    });
    res.status(200).json(userCart);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get all carts

router.post("/getcarts", verifyTokenAndAdmin, async (req, res) => {
  try {
    const getCarts = await Cart.find();
    console.log(getCarts);
    res.status(200).json(getCarts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
