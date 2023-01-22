import React, { createContext, useState } from "react";
import { addToDb, getStoredCart, removeFromDb } from "../../utils/fakeDb";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [numberOfCartItems, setNumberOfCartItems] = useState(
    Object.keys(getStoredCart()).length
  );

  const addToCart = (id) => {
    setNumberOfCartItems(numberOfCartItems + 1);
    return addToDb(id);
  };

  const removeFromCart = (id) => {
    setNumberOfCartItems(numberOfCartItems - 1);
    return removeFromDb(id);
  };

  const existInCart = (id) => {
    return id in getStoredCart();
  };

  const cartInfo = {
    addToCart,
    removeFromCart,
    existInCart,
    numberOfCartItems,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
