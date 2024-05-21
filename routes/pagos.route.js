"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
const stripe = require('stripe')('sk_test_51PGTA0P3QrwGa9Cf2VrDEZWbY9CjQMjro8qMB3PXHgvOpU65KSgxO34t1Cr7BfVT0yp8xfrGeswOkon6XQuX0eiF00yPbl2Oau');
const router = (0, _express.Router)();
router.post('/create-checkout-session', async (req, res) => {
  const {
    monto
  } = req.body;
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: 'mxn',
        product_data: {
          name: 'T-shirt'
        },
        unit_amount: Number(monto) * 100
      },
      quantity: 1
    }],
    mode: 'payment',
    ui_mode: 'embedded',
    return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
  });
  res.send({
    clientSecret: session.client_secret
  });
});
var _default = router;
exports.default = _default;