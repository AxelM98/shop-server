import express from "express";
import stripe from "stripe";
const router = express.Router();

const stripeInstance = stripe(process.env.STRIPE_PRIVATE_KEY);

router.post("/payment", (req, res) => {
  stripeInstance.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router;
