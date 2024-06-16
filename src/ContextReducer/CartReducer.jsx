import { createContext, useContext, useReducer } from "react";

export const INTITAL_STATE = {
  cart: [],
};

export const AddToCart = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

//reducer with context

const CartContext = createContext(null);
const CartReducerContext = createContext(() => {});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AddToCart, INTITAL_STATE);

  return (
    <CartContext.Provider value={state}>
      <CartReducerContext.Provider value={dispatch}>
        {children}
      </CartReducerContext.Provider>
    </CartContext.Provider>
  );
};

//hooks context

export const useCart = () => {
  return useContext(CartContext);
};

export const useCartReducer = () => {
  return useContext(CartReducerContext);
};
