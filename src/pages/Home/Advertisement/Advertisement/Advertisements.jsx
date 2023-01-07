import React from "react";
import AdvertiseOffer from "../AdvertiseOffer/AdvertiseOffer";
import AdvertiseProduct from "../AdvertiseProduct/AdvertiseProduct";

const Advertisements = () => {
  return (
    <section className="section grid grid-cols-5 gap-5 border">
      <AdvertiseProduct></AdvertiseProduct>
      <AdvertiseOffer></AdvertiseOffer>
    </section>
  );
};

export default Advertisements;
