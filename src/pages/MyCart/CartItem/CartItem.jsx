import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../../../Contexts/CartProvider/CartProvider";
import useGetQuantity from "../../../Hooks/useGetQuantity/useGetQuantity";

const CartItem = ({ cartItem }) => {
  const [quantity] = useGetQuantity(cartItem?._id);

  const { addToCart, reduceQuantityFromCart, removeFromCart, refetch } =
    useContext(CartContext);

  // reduce
  const handleReduceQuantity = (id, product) => {
    // Make this async function

    reduceQuantityFromCart(id);
    if (quantity === 1) {
      toast.success(`${product} Removed from cart`);
      refetch();
    }
  };

  // Add to cart
  const handleAddtoCart = (id) => {
    addToCart(id);
  };

  // Delete
  const handleDeleteItemsFromCart = (id, name) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
    refetch();
  };

  return (
    <div className="flex w-full gap-3 border-b text-[#374151] items-center justify-center px-3 py-2  hover:bg-slate-50 cursor-pointer">
      <div className="">
        <img src={cartItem?.image} alt="" className="w-14 rounded-lg" />
      </div>

      <div className="flex flex-col w-full">
        <h5 className="text-sm font-medium">{cartItem?.name}</h5>
        <p className="text-xs  text-gray-500">
          Item Price: $
          {cartItem?.discount
            ? (
                cartItem?.price -
                (cartItem?.discount / 100) * cartItem?.price
              ).toFixed(2)
            : cartItem?.price}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold text-sm">
            $
            {cartItem?.discount
              ? (
                  (cartItem?.price -
                    (cartItem?.discount / 100) * cartItem?.price) *
                  quantity
                ).toFixed(2)
              : (cartItem?.price * quantity).toFixed(2)}
          </span>

          <div className="border rounded-sm items-center flex">
            <button
              onClick={() =>
                quantity && handleReduceQuantity(cartItem?._id, cartItem?.name)
              }
              className="px-2 "
              // onClick={() => handleReduceQuantity(_id, name)}
            >
              {" "}
              -{" "}
            </button>
            <span className="text-sm mx-1">{quantity}</span>
            <button
              onClick={() => handleAddtoCart(cartItem?._id)}
              className="px-2 "
              // onClick={() => handleAddtoCart(_id, name)}
            >
              {" "}
              +{" "}
            </button>
          </div>

          {/* Delete */}

          <button
            onClick={() =>
              handleDeleteItemsFromCart(cartItem?._id, cartItem?.name)
            }
            className="bg-warning/5 hover:bg-warning/20 hover:shadow-md p-2 rounded-full"
          >
            <FaRegTrashAlt className="text-warning" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
