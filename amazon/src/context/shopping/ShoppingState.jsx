import { useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import { ShoppingReducer } from "./ShoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };
  const [state, dispatch] = useReducer(ShoppingReducer, initialState);

  //selector(the thing that we want to manipulate the state)
  //getting the total amount of the basket
  const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  ;
  //add to basket action
  const addToBasket =  (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
    
  };
  const setUser = (user)=>{
    dispatch({
      type: "SET_USER",
      payload: user
    })
  }
  const removeFromBasket = (item) => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        payload: item,
      })
    
  }
  const emptyBasket = ()=>{
    dispatch({
      type: "EMPTY_BASKET",
     
    })
  
}

  return (
    <ShoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser,
        removeFromBasket,
        emptyBasket,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};
