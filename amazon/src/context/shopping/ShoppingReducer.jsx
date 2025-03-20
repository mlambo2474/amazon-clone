export const ShoppingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1); // Removing the item at the found index
      } else {
        console.warn(
          `cannot remove product(id: ${action.payload}) as its not in the basket`
        );
      }
     return{
      ...state,
      basket: newBasket
     };
     
     case "EMPTY_BASKET":
      return {
        ...state,
        basket:[],
      };
    default:
      return state;
  }
};
