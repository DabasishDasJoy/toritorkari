import React from "react";
import AdvertiseOffer from "../AdvertiseOffer/AdvertiseOffer";
import AdvertiseProducts from "../AdvertiseProducts/AdvertiseProducts";

const Advertisements = () => {
  return (
    <section className="section grid grid-cols-5 gap-5 border">
      <AdvertiseProducts></AdvertiseProducts>
      <AdvertiseOffer></AdvertiseOffer>
    </section>
  );
};

export default Advertisements;
