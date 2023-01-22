import React, { createContext } from "react";
import { addToDb } from "../../utils/fakeDb";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const addToCart = (id) => {
    return addToDb(id);
  };

  const cartInfo = {
    addToCart,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
