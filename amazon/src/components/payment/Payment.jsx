import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "../../axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import ShoppingContext from "../../context/shopping/shoppingContext";
import CheckOutProduct from "../checkout/CheckOutProduct";
import "./Payment.css";
import { db } from "../../firebase";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Generate Stripe secret to charge customer
    const getClientSecret = async () => {
      try {
        const response = await axios.post("/payments/create", {
          total: Math.ceil(getBasketTotal(basket) * 100), // Ensure it's an integer
        });
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        console.error("Error fetching client secret:", err);
      }
    };

    if (basket.length > 0) {
      getClientSecret();
    }
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) return;
    if (!user?.uid) {
      console.error("User not logged in! Cannot save order.");
      setProcessing(false);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (error) {
        console.error("Payment error:", error);
        setError(`Payment failed: ${error.message}`);
        setProcessing(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        // Save order to Firestore
        await db
          .collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            status: "paid",
          });

        console.log("Order saved successfully!");

        // Reset states and redirect
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        emptyBasket();
        history.replace("/orders");
      }
    } catch (err) {
      console.error("Error processing payment:", err);
      setError("Payment failed. Please try again.");
      setProcessing(false);
    }
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="Payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
      </div>

      {/* Delivery Address */}
      <div className="payment-section">
        <div className="payment-title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment-address">
          <p>{user?.email}</p>
          <p>13 Protea Road</p>
          <p>Hermanus, Western Cape, SA</p>
        </div>
      </div>

      {/* Review Items */}
      <div className="payment-section">
        <div className="payment-title">
          <h3>Review Items and Delivery</h3>
        </div>
        <div className="payment-items">
          {basket.map((item) => (
            <CheckOutProduct
              key={item.id}
              id={item.id}
              image={item.image}
              description={item.description}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="payment-section">
        <div className="payment-title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment-details">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment-price-container">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />

              <button disabled={processing || succeeded || disabled}>
                <span>{processing ? "Processing..." : "Pay Now"}</span>
              </button>
            </div>
            {error && <div className="payment-error">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;

