import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";

// Get Item quantity
const useGetQuantity = (id) => {
  const { getQuantityOfItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const qntity = getQuantityOfItem(id);
    setQuantity(qntity);
  }, [getQuantityOfItem, quantity, id]);

  return [quantity];
};

export default useGetQuantity;
