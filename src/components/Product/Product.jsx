import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagPlusFill, BsFillBagCheckFill } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";
import { ProductContext } from "../../Contexts/ProductsProvider/ProductsProvider";
import StatusTag from "../StatusTag/StatusTag";
import "./Product.css";
const Product = ({
  refetch,
  product,
  product: { name, image, price, status, subCategory, _id },
}) => {
  const { setSelectedProduct } = useContext(ProductContext);
  const { addToCart, removeFromCart, existInCart } = useContext(CartContext);

  // Check if the item is already in the cart if so then set yes
  const [addedToCart, setAddedToCart] = useState(existInCart(_id));

  // Add to cart
  const handleAddtoCart = (id, product) => {
    addToCart(id);
    toast.success(`${product} Add to cart`);
    setAddedToCart(true);
    refetch();
  };

  // remove from cart
  const handleRemoveFromCart = (id, product) => {
    removeFromCart(id);
    toast.success(`Removed ${product} from cart`);
    setAddedToCart(false);
    refetch();
  };

  return (
    <div className="text-black/90 flex flex-col  gap-2 overflow-hidden bg-white  rounded-sm p-2 product relative">
      {/* Offers */}
      {product?.discount && (
        <span
          className={`bg-accent rounded-sm rounded-r-full text-[13px] font-medium py-[2px] z-10 absolute text-white px-2 top-2 left-0`}
        >
          {product?.discount}% Off
        </span>
      )}

      {/* View Button */}
      <div className="action absolute bottom-[39%] right-0 left-0 z-10">
        <div className="flex max-w-fit mx-auto items-center justify-center p-[2px] gap-2 bg-gray-200 rounded-full">
          <label
            onClick={() => setSelectedProduct(product)}
            htmlFor="product-modal"
            data-tip="View"
            className=" transition-all cursor-pointer delay-[50ms] hover:bg-primary text-black/60 hover:text-white rounded-full p-1 tooltip tooltip-secondary"
          >
            <HiOutlineEye className="" />
          </label>
          <button
            data-tip="Add to Wishlist"
            className=" transition-all delay-[50ms] hover:bg-primary text-black/60 hover:text-white rounded-full p-1 tooltip tooltip-secondary"
          >
            <AiOutlineHeart className="" />
          </button>
        </div>
      </div>
      {/* end */}

      {/* Image */}
      <label
        onClick={() => setSelectedProduct(product)}
        htmlFor="product-modal"
        // to={`/product/${_id}`}
        className="cursor-pointer flex justify-center items-center border-b overflow-hidden"
      >
        <img src={image} alt="" className="w-28 h-full image z-0" />
      </label>

      {/* Text */}
      <div className="text-sm font-medium z-10 mt-1">
        <div className="flex justify-between items-center">
          <span className="text-xs text-black/60">{subCategory}</span>
          <StatusTag color={status === "In Stock" ? true : false}>
            {status}
          </StatusTag>
        </div>
        <p className="text-black/80">{name}</p>
      </div>

      {/* Price */}
      <div className="flex justify-between items-center flex-1">
        <span className="price">
          ${product?.discount ? (product.discount / 100) * price : price}{" "}
          {product?.discount && (
            <span className="text-sm  line-through text-black/50">
              ${price}
            </span>
          )}
        </span>

        {/* Add Cart Button */}
        {status === "In Stock" &&
          (addedToCart ? (
            <button
              onClick={() => handleRemoveFromCart(_id, name)}
              className="border border-primary flex justify-center items-center p-2 cursor-pointer transition-all delay-[30ms] bg-primary rounded-sm text-white"
            >
              <BsFillBagCheckFill />
            </button>
          ) : (
            <button
              onClick={() => handleAddtoCart(_id, name)}
              className="border border-primary flex justify-center items-center p-2 cursor-pointer transition-all delay-[30ms] hover:bg-primary hover:text-white rounded-sm text-primary"
            >
              <BsBagPlusFill className="w-4 h-4" />
            </button>
          ))}
      </div>
    </div>
  );
};

export default Product;
