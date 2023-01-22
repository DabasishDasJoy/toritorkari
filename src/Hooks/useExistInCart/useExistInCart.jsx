import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";
import { getStoredCart } from "../../utils/fakeDb";

const useExistInCart = (id) => {
  const [exist, setExist] = useState(false);
  const { existInCart } = useContext(CartContext);

  console.log("Existed hit", id);

  useEffect(() => {
    const cart = getStoredCart();
    if (cart) {
      if (existInCart) setExist(true);
    }
  }, [existInCart]);

  return [exist];
};

export default useExistInCart;
