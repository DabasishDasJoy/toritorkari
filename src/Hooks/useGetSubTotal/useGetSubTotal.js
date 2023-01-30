import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";
import { getStoredCart } from "../../utils/fakeDb";

const useGetSubTotal = () => {
  const { cartItems } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);
  const shoppingCart = getStoredCart();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const subTotal = cartItems?.reduce(
        (prev, curr) =>
          prev +
          parseFloat(
            (curr?.discount
              ? curr?.price - curr?.price * (curr?.discount / 100)
              : curr?.price) * shoppingCart[curr?._id]
          ),
        0
      );
      setSubTotal(subTotal);
    }

    return () => {
      isMounted = false;
    };
  }, [shoppingCart, cartItems]);

  return [subTotal, setSubTotal];
};

export default useGetSubTotal;
