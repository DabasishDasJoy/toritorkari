import React, { createContext, useState } from "react";
import {
  addToDb,
  getStoredCart,
  reduceQuantityFromDb,
  removeFromDb,
} from "../../utils/fakeDb";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartSize = Object.keys(getStoredCart()).length || 0;
  const [numberOfCartItems, setNumberOfCartItems] = useState(cartSize);

  const addToCart = (id) => {
    setNumberOfCartItems(numberOfCartItems + 1);
    return addToDb(id);
  };

  const removeFromCart = (id) => {
    return removeFromDb(id);
  };

  const existInCart = (id) => {
    return id in getStoredCart();
  };

  const reduceQuantityFromCart = (id) => {
    setNumberOfCartItems(numberOfCartItems - 1);
    return reduceQuantityFromDb(id);
  };

  const getQuantityOfItem = (id) => {
    const shoppingCart = getStoredCart();
    if (id in shoppingCart) {
      return shoppingCart[id];
    }
    return false;
  };

  const cartInfo = {
    addToCart,
    removeFromCart,
    existInCart,
    numberOfCartItems,
    reduceQuantityFromCart,
    getQuantityOfItem,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
