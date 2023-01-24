import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";
import { getStoredCart } from "../../utils/fakeDb";

const useGetSubTotal = () => {
  const { cartItems } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);
  const shoppingCart = getStoredCart();
  console.log("Hook Call");
  useEffect(() => {
    console.log("Hook Effect");
    const subTotal = cartItems?.reduce(
      (prev, curr) =>
        prev +
        parseFloat(
          (
            (curr?.discount
              ? curr?.price * (curr?.discount / 100)
              : curr?.price) * shoppingCart[curr?._id]
          ).toFixed(2)
        ),
      0
    );
    setSubTotal(subTotal);
  }, [shoppingCart]);

  return [subTotal, setSubTotal];
};

export default useGetSubTotal;
