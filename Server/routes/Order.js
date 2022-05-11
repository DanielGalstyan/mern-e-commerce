const Order = require("../models/Order");
const router = require("express").Router();

//Create Order

router.post("/add", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const saveOrder = await newOrder.save();
    res.status(200).json("order was sent successfull");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//get all orders
router.post("/allorders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.body.id);
    res.status(200).json("Order has been deleted");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.put("/update", async (req, res) => {
  console.log("test" + req.body.id);
  // console.log(req.body);
  try {
    const updateOrder = await Order.findByIdAndUpdate(
      req.body.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateOrder);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//get user order data by userId

router.post("/order", async (req, res) => {
  try {
    let order;
    if (req.body.findAll == true) {
      order = await Order.find({
        userId: req.body.userId,
      });
      console.log("test true  ");
    } else {
      order = await Order.findOne({
        userId: req.body.userId,
      });
      console.log("test false  ");
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
