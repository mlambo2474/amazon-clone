import React from "react";
import CurrencyFormat from "react-currency-format";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import ShoppingContext from "../../context/shopping/shoppingContext";
import "./Subtotal.css";

const SubTotal = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
  console.log(getBasketTotal(basket));
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This Order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />
      <button
        className="subtotal-button"
        onClick={(e) => history.push("/payment")}
      >
        Proceed To Pay
      </button>
    </div>
  );
};

export default SubTotal;
