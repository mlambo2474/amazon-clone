const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51R3BOvLmYwos7MVPU8i4RMdcFBNcQ0P4qcTIOug3jZcRb7G5Ge70AV1sr5FBvTWHOzqE0GUkCAZcxymhA4A4Dt9F0068uthjiN"
);

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// -API

//-APP Config
const app = express();
//- Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//- API Route

app.get("/", (req, res) => res.status(200).send("Hello world, My name is  Tonderai Mlambo"));
//-Listen Command  Payment Intent Route
app.post("/payments/create", async (req, res) => {
  try {
    const total = req.body.total;
    console.log("Payment request received for total:", total);

    // Validating the total amount
    if (!total ||  typeof total !== "number" || total <= 0) {
      return res.status(400).json({ error: "Invalid total amount" });
    }
    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      payment_method_types: ["card"], // Explicitly specify payment method types
    });

    // Send the client secret to the frontend
    res.status(201).send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({ error: error.message });
  }
});
// Exporting the API
exports.api = functions.https.onRequest(app);



