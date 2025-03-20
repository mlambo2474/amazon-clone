import React, { useContext } from "react";
import "./Product.css";
import ShoppingContext from "../../context/shopping/shoppingContext";

const Product = ({  id, image, description, price, rating }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToBasketHandler = () => {
    const item = { id, image, description, price, rating } 
    addToBasket(item);
  };
  return (
    <div className="product" >
      <img src={image} alt="" />

      <div className="product-info">
        <p className="description">{description}</p>

        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <button className="product-button" onClick={addToBasketHandler}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
