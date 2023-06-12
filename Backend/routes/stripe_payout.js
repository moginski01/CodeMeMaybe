// const express = require("express");
// const Stripe = require("stripe");

// require("dotenv").config();

// const stripe = Stripe(process.env.STRIPE_KEY)
// const router = express.Router()

// router.post('/create-payout', async (req, res) => {
//   const { userId, amount } = req.body;

//   try {
//     // Tworzenie wypłaty dla użytkownika
//     const payout = await stripe.payouts.create({
//       amount: amount * 100, // Przeliczamy kwotę na wartość w centach
//       currency: 'usd',
//       destination: userId, // ID konta docelowego użytkownika
//     });

//     res.send({ success: true, payout });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ success: false, error: 'Błąd podczas wypłacania środków.' });
//   }
// });

// module.exports = router;