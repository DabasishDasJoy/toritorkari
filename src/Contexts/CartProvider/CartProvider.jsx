import { useQuery } from "@tanstack/react-query";
import React, { createContext, useRef, useState } from "react";
import axios from "../../AxiosInstance/AxiosInstance";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
  reduceQuantityFromDb,
  removeFromDb,
} from "../../utils/fakeDb";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartSize = Object.values(getStoredCart()).reduce((a, b) => a + b, 0);
  const [numberOfCartItems, setNumberOfCartItems] = useState(cartSize);
  const successModal = useRef();

  const {
    isLoading,
    error,
    refetch,
    data: { data: cartItems } = [],
  } = useQuery({
    queryKey: ["shopping-cart"],
    queryFn: () => {
      return axios.post("/shopping-cart", getStoredCart());
    },
  });

  const addToCart = (id) => {
    setNumberOfCartItems((numberOfCartItems) => numberOfCartItems + 1);
    return addToDb(id);
  };

  const removeFromCart = (id) => {
    setNumberOfCartItems(
      (numberOfCartItems) => numberOfCartItems - getStoredCart()[id]
    );

    return removeFromDb(id);
  };

  // const existInCart = (id) => {
  //   return id in getStoredCart();
  // };

  const reduceQuantityFromCart = (id) => {
    setNumberOfCartItems((numberOfCartItems) => numberOfCartItems - 1);
    return reduceQuantityFromDb(id);
  };

  const removeShoppingCart = () => {
    deleteShoppingCart();
    setNumberOfCartItems(0);
    refetch();
  };

  const getQuantityOfItem = (id) => {
    const shoppingCart = getStoredCart();
    if (id in shoppingCart) {
      return shoppingCart[id];
    }
    return 0;
  };

  const cartInfo = {
    addToCart,
    removeFromCart,
    numberOfCartItems,
    reduceQuantityFromCart,
    getQuantityOfItem,
    cartItems,
    refetch,
    isLoading,
    successModal,
    removeShoppingCart,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
