import React from "react";
import "./Order.css";
import CheckOutProduct from "../checkout/CheckOutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>

      {/* Display Order Date */}
      <p>
        {order?.data?.created
          ? new Date(order.data.created).toLocaleString()
          : "Date unavailable"}
      </p>

      {/* Order ID */}
      <p className="order-id">
        <small>Order ID: {order?.id ?? "Unavailable"}</small>
      </p>

      {/* Display Ordered Items */}
      {order?.data?.basket?.map((item) => (
        <CheckOutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}

      {/* Order Total */}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order-total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={(order?.data?.amount ?? 0) / 100} // Convert cents to dollars
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
