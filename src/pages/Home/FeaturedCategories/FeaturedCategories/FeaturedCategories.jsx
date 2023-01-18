import React, { useContext } from "react";
import CategoryCard from "../../../../components/CategoryCard/CategoryCard";
import Loader from "../../../../components/Loader/Loader";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import { CategoriesContext } from "../../../../Contexts/AuthProvider/CategoriesProvider/CategoriesProvider";
const FeaturedCategories = () => {
  const { categories, isLoading } = useContext(CategoriesContext);

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
        {/* All the categroies display here */}

        {isLoading ? (
          <Loader></Loader>
        ) : (
          categories?.map((category) => (
            <CategoryCard category={category} key={category._id}></CategoryCard>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedCategories;
