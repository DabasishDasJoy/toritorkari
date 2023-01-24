import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";

// Get Item quantity
const useGetQuantity = (id) => {
  const { getQuantityOfItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const usnsubscribe = () => {
      const qntity = getQuantityOfItem(id);
      setQuantity(qntity);
    };
    return () => {
      usnsubscribe();
    };
  }, [getQuantityOfItem, quantity, id]);

  return [quantity];
};

export default useGetQuantity;
