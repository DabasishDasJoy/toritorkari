import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState({});

  const productInfo = {
    selectedProduct,
    setSelectedProduct,
  };

  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
