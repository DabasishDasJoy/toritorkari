import React from "react";
import Advertisements from "../Advertisement/Advertisement/Advertisements";
import AppAdvertise from "../AppAdvertise/AppAdvertise";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories/FeaturedCategories";
import LatestDiscounts from "../LatestDiscounts/LatestDiscounts";
import PopularProducts from "../PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      {/* <Helmet>
        <title>ToriTorkari Bazar</title>
        <meta name="description" content="A online grocery shop" />
        <meta
          name="keywords"
          content="Ecommerce, grocery, online shop, vegetables"
        />
      </Helmet> */}
      <Advertisements></Advertisements>

      <FeaturedCategories></FeaturedCategories>
      <PopularProducts></PopularProducts>
      <AppAdvertise></AppAdvertise>
      <LatestDiscounts></LatestDiscounts>
    </div>
  );
};

export default Home;