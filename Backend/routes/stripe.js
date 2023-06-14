const express = require("express");
const Stripe = require("stripe");

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY)
const router = express.Router()

router.post('/create-checkout-session',async(req,res)=>{
  const { _id, content, koszt} = req.body;


    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: content,
                  },
                  unit_amount: koszt*100,
                },
                quantity:1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/tasks/my_tasks',
        cancel_url: 'http://localhost:3000/tasks',
    })


  
    res.send({url:session.url});
});

module.exports = router
