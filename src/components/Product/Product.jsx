import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagPlusFill } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";
import { ProductContext } from "../../Contexts/ProductsProvider/ProductsProvider";
import useGetQuantity from "../../Hooks/useGetQuantity/useGetQuantity";
import RatingsStars from "../RatingsStars/RatingsStars";
import StatusTag from "../StatusTag/StatusTag";
import "./Product.css";
const Product = ({
  product,
  product: { name, image, price, status, subCategory, net, _id },
}) => {
  const { setSelectedProduct } = useContext(ProductContext);
  const { addToCart, reduceQuantityFromCart } = useContext(CartContext);

  // const [quantity, setQuantity] = useState(getQuantityOfItem(_id) || 0);
  const [quantity] = useGetQuantity(_id);

  /**
   * Check quantity of the cart if so then addedToCart must be true
   * If reduce then reduce the state variable along with the storage by calling reduceFromDb
   * If reduce state get false along with storage it will render the updated state
   *  */

  const handleReduceQuantity = (id, product) => {
    reduceQuantityFromCart(id);
    if (quantity === 1) {
      toast.success(`${product} Removed from cart`);
    }
  };

  // Add to cart
  const handleAddtoCart = (id, product) => {
    addToCart(id);
    if (quantity === 0) {
      toast.success(`${product} Added to cart`);
    }
  };

  return (
    <div className="text-black/90 flex flex-col justify-between gap-1 overflow-hidden bg-white  rounded-sm p-2 product relative">
      {/* Offers */}
      {product?.discount && (
        <span
          className={`bg-accent rounded-sm rounded-r-full text-[13px] font-medium py-[2px] z-10 absolute text-white px-2 top-2 left-0`}
        >
          {product?.discount}% Off
        </span>
      )}

      {/* Image */}
      <label
        onClick={() => setSelectedProduct(product)}
        htmlFor="product-modal"
        // to={`/product/${_id}`}
        className="cursor-pointer flex justify-center items-center border-b relative overflow-hidden"
      >
        <img src={image} alt="" className="w-28 h-28 image z-0" />

        {/* View Button */}
        <div className="action absolute bottom-1 right-0 left-0 z-10">
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
      </label>

      {/* Text */}
      <div className="text-sm font-medium z-10 mt-1">
        <div className="flex justify-between items-center">
          <span className="text-xs text-black/60">{net}</span>
          <StatusTag
            color={status?.toLowerCase() === "in stock" ? true : false}
          >
            {status}
          </StatusTag>
        </div>
        <p className="text-black/80">{name}</p>
      </div>

      {product?.ratings > 0 ? (
        <RatingsStars ratings={product?.ratings}></RatingsStars>
      ) : (
        <span className="text-gray-400 text-xs leading-none">
          Not Reviewed Yet!
        </span>
      )}

      {/* Price */}
      <div className="flex justify-between items-end mt-[2px]">
        <span className="price my-auto">
          $
          {product?.discount
            ? (product?.price - (product.discount / 100) * price)?.toFixed(2)
            : price}{" "}
          {product?.discount && (
            <span className="text-sm line-through text-black/50">${price}</span>
          )}
        </span>

        {/* Add Cart Button */}
        {status?.toLowerCase() === "in stock" &&
          (quantity ? (
            <div className="text-white border border-primary hover:bg-white hover:text-primary rounded-sm items-center bg-primary flex">
              <button
                className="px-2 py-1"
                onClick={() => handleReduceQuantity(_id, name)}
              >
                {" "}
                -{" "}
              </button>
              <span>{quantity}</span>
              <button
                className="px-2 py-1"
                onClick={() => handleAddtoCart(_id, name)}
              >
                {" "}
                +{" "}
              </button>
            </div>
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
