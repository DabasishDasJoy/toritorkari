import React from "react";
import Product from "../../../components/Product/Product";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";

const LatestDiscounts = () => {
  return (
    <div className="bg-[#F9FAFB] section">
      <SectionHeader
        subtitle={
          "See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping."
        }
      >
        Latest Dicounted Products
      </SectionHeader>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-3 sub-section">
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

export default LatestDiscounts;
