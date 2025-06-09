import React from "react";
import { useContext } from "react";
import ShoppingContext from "../../context/shopping/shoppingContext";
import "./CheckOutProduct.css"


const CheckOutProduct = ({
  id,
  image,
  description,
  price,
  rating,
  hideButton,
}) => {
    const shoppingContext = useContext(ShoppingContext);
    const {removeFromBasket} = shoppingContext;
    
    const removeFromBasketHandler = ()=>{
        removeFromBasket(id)
    }

  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} alt="" />

      <div className="checkout-product-info">
        <p className="checkout-product-description">{description}</p>

        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              < p key={i}>⭐</p>
            ))}
        </div>
        <p className="checkout-product-price">
          <small>R</small>
          <strong>{price}</strong>
        </p>

        {!hideButton && (
        <button
          className="checkout-product-button"
          onClick={removeFromBasketHandler}
        >
          Remove Form Basket
        </button>
      )}
      </div>
   
    </div>
  );
};

export default CheckOutProduct;
