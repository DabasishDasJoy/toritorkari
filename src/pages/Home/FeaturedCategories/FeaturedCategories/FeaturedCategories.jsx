import React from "react";
import CategoryCard from "../../../../components/CategoryCard/CategoryCard";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

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
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
      </div>
    </div>
  );
};

export default FeaturedCategories;
