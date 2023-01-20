import React, { useContext } from "react";
import { ProductContext } from "../../Contexts/ProductsProvider/ProductsProvider";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const ProductModal = () => {
  const { selectedProduct } = useContext(ProductContext);

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal bg-black/80">
        <div className="modal-box lg:w-9/12 max-w-5xl relative lg:p-7 p-2 rounded-sm">
          <label
            htmlFor="product-modal"
            className="absolute right-3 text-black hover:text-primary cursor-pointer font-semibold top-1"
          >
            ✕
          </label>
          <ProductDetailsCard
            selectedProduct={selectedProduct}
            display={"block"}
          ></ProductDetailsCard>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
