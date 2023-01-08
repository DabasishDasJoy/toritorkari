import React from "react";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import Category from "../../Category/Category";

const FeaturedCategories = () => {
  return (
    <div className="bg-secondary section">
      <SectionHeader
        subtitle={
          "Choose your necessary products from this feature categories."
        }
      >
        Featured Categories
      </SectionHeader>

      <div className="sub-section grid lg:grid-cols-6 grid-cols-2 gap-[2px]">
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
      </div>
    </div>
  );
};

export default FeaturedCategories;
