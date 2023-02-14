import { useContext, useMemo, useRef } from "react";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";
import { getStoredCart } from "../../utils/fakeDb";

const useGetSubTotal = () => {
  const { cartItems } = useContext(CartContext);
  // const [subTotal, setSubTotal] = useState(0);
  const shoppingCart = getStoredCart();
  const subtotalRef = useRef(0);

  const subtotal = useMemo(() => {
    subtotalRef.current = cartItems?.reduce(
      (prev, curr) =>
        prev +
        parseFloat(
          (curr?.discount
            ? curr?.price - curr?.price * (curr?.discount / 100)
            : curr?.price) * shoppingCart[curr?._id]
        ),
      0
    );
    return subtotalRef.current;
  }, [shoppingCart, cartItems]);

  useMemo(() => {
    return () => {
      subtotalRef.current = 0;
    };
  }, []);

  return [subtotal];

  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     const subTotal = cartItems?.reduce(
  //       (prev, curr) =>
  //         prev +
  //         parseFloat(
  //           (curr?.discount
  //             ? curr?.price - curr?.price * (curr?.discount / 100)
  //             : curr?.price) * shoppingCart[curr?._id]
  //         ),
  //       0
  //     );
  //     setSubTotal(subTotal);
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [shoppingCart, cartItems]);

  // return [subTotal, setSubTotal];
};

export default useGetSubTotal;
