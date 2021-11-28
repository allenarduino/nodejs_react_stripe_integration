const express = require('express')
const app = express()
var cors = require('cors')
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const STRIPE_SECRET_KEY=process.env.STRIPE_SECRET_KEY;

const stripe = require('stripe')(
 STRIPE_SECRET_KEY
)

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

// Create a Payment Intent (returns the client with a temporary secret)
app.post('/create-payment-intent', async (req, res) => {
  const { price } = req.body

  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: 'usd'
  })

  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
})
