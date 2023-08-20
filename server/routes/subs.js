

const express = require('express')
const User = require("../mongodb")
const stripe = require('stripe')('sk_test_51Nh97CSB0mVc1TwC7S53j19xeQ95rf0uAjL250b0yTEhYi76zUQyfTAQ02vyviuYV41jMnrkOf8O4sHCM6922Eq200eFIBl58B')


const router = express.Router();

router.get("/prices", async (req, res) => {

  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.json(prices);
    
});

router.post("/session", async (req, res) => {
  const user = await User.findOne({ email: req.user });

  const session = await stripe.checkout.sessions.create(
    {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/articles",
      cancel_url: "http://localhost:3000/article-plans",
      customer: user.stripeCustomerId,
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  return res.json(session);
});

module.exports = router