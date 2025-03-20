import React, { useContext } from "react";
import "./Checkout.css";
import ShoppingContext from "../../context/shopping/shoppingContext";
import CheckOutProduct from "../checkout/CheckOutProduct";
import Subtotal from "../subtotal/Subtotal";

const Checkout = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user? user.email : "Guest"}</h3>
          <h2 className="checkout-title">Your Shopping Basket</h2>
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
      <div className="checkout_right ">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
