const router = require("express").Router();
const stripe = require("stripe")(proces.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      curency: "usd",
    },
    (sripeError, sripeResponce) => {
      if (sripeError) {
        res.status(500).json(sripeError);
      } else {
        res.status(200).json(sripeResponce);
      }
    }
  );
});

module.exports = router;
