import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";

// Get Item quantity
const useGetQuantity = (id) => {
  const { getQuantityOfItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const qntity = getQuantityOfItem(id);
      setQuantity(qntity);
    }

    return () => {
      isMounted = false;
    };
  }, [getQuantityOfItem, id]);

  return [quantity];
};

export default useGetQuantity;
