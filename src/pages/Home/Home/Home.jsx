import React from "react";
import Advertisements from "../Advertisement/Advertisement/Advertisements";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories/FeaturedCategories";
import PopularProducts from "../PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      <Advertisements></Advertisements>
      <FeaturedCategories></FeaturedCategories>
      <PopularProducts></PopularProducts>
    </div>
  );
};

export default Home;
