import React from "react";
import AdvertiseDiscount from "../AdvertiseDiscount/AdvertiseDiscount";
import AdvertiseOffers from "../AdvertiseOffers/AdvertiseOffers";
import AdvertiseProducts from "../AdvertiseProducts/AdvertiseProducts";

const Advertisements = () => {
  return (
    <section className="section grid grid-cols-1 lg:grid-cols-5 lg:gap-5 gap-y-5">
      <AdvertiseProducts></AdvertiseProducts>
      <AdvertiseOffers></AdvertiseOffers>
      <AdvertiseDiscount></AdvertiseDiscount>
    </section>
  );
};

export default Advertisements;
