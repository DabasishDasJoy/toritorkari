import React from "react";
import Product from "../../../components/Product/Product";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

const PopularProducts = () => {
  return (
    <div className="bg-[#F9FAFB] section">
      <SectionHeader
        subtitle={
          "See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping"
        }
      >
        Popular Products for Daily Shopping
      </SectionHeader>

      <div className="sub-section grid grid-cols-6 gap-3">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
};

export default PopularProducts;
