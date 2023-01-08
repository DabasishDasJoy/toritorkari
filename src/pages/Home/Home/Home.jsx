import React from "react";
import Advertisements from "../Advertisement/Advertisement/Advertisements";
import AppAdvertise from "../AppAdvertise/AppAdvertise";
import AppDownload from "../AppDownload/AppDownload";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories/FeaturedCategories";
import LatestDiscounts from "../LatestDiscounts/LatestDiscounts";
import PopularProducts from "../PopularProducts/PopularProducts";
import Supports from "../Supports/Supports";

const Home = () => {
  return (
    <div>
      <Advertisements></Advertisements>
      <FeaturedCategories></FeaturedCategories>
      <PopularProducts></PopularProducts>
      <AppAdvertise></AppAdvertise>
      <LatestDiscounts></LatestDiscounts>
      <AppDownload></AppDownload>
      <Supports></Supports>
    </div>
  );
};

export default Home;
