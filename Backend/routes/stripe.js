const express = require("express");
const Stripe = require("stripe");
const Task = require('../models/taskModel')

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY)
const router = express.Router()

router.post('/create-checkout-session',async(req,res)=>{
    const { _id, content, koszt} = req.body;
    const customer = await stripe.customers.create({
        metadata:{
            userId: _id,
        }
    })

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
        customer:customer.id,
        mode: 'payment',
        success_url: 'http://localhost:3000/tasks/my_tasks',
        cancel_url: 'http://localhost:3000/tasks',
    })


    res.send({url:session.url});
});

const updateTask = async(id)=>{
    const updatedTask = await Task.findOneAndUpdate(
        { _id: id }, // Warunek wyszukiwania po polu _id
        { isPaid: true }, // Aktualizacja pola isPaid na true
        { new: true } // Opcjonalnie, aby zwrócić zaktualizowany dokument
    );
}

//jakiś syf z webhookiem

// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;
//endpointSecret = "whsec_0535cd6e3abf04b1224b31fe59c96e17994200c235e42a9eb75f7dc25f5d9479";

router.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
    const sig = request.headers['stripe-signature'];
    let data;
    let eventType;

    if(endpointSecret){
        let event;

        try {
            event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
            console.log("Webhook verified");
        } catch (err) {
            console.log("Motyla noga!!!!!");
            response.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }
        data = event.data.object;
        eventType=event.type;
    }
    else{
        data = request.body.data.object;
        eventType = request.body.type;
    }
    // Handle the event
    if(eventType ==="checkout.session.completed")
    {
        console.log("test");
        stripe.customers.retrieve(data.customer).then((customer)=>{
            updateTask(customer.metadata.userId);
        })
    }

    response.send().end();
});



module.exports = router
