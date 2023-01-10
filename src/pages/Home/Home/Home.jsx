import React from "react";
import Advertisements from "../Advertisement/Advertisement/Advertisements";
import AppAdvertise from "../AppAdvertise/AppAdvertise";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories/FeaturedCategories";
import LatestDiscounts from "../LatestDiscounts/LatestDiscounts";
import PopularProducts from "../PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      <Advertisements></Advertisements>
      <FeaturedCategories></FeaturedCategories>
      <PopularProducts></PopularProducts>
      <AppAdvertise></AppAdvertise>
      <LatestDiscounts></LatestDiscounts>
    </div>
  );
};

export default Home;
