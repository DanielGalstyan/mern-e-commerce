const router = require("express").Router();
const Product = require("../models/Product");
const { route } = require("./Auth");

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

// update product data

router.put("/productUpdate", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.query.productId,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product has been deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//get product by id

router.post("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//find all

router.post("/findAll", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
