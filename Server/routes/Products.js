const router = require("express").Router();
const Product = require("../models/Product");

router.post("/add", async (req, res) => {
  try {
    console.log("add product ", req.body);
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
