import React from "react";

const AdvertiseDiscount = () => {
  return (
    <div className="section bg-neutral col-span-full flex justify-between items-center rounded-md">
      <div>
        <h1 className="text-xl text-black">
          <span className="text-primary font-semibold">
            100% Natural Quality{" "}
          </span>{" "}
          Organic Product
        </h1>
        <p className="text-black/80">
          See Our latest discounted products from here and get a special{" "}
          <a
            href="#discount-Product"
            className="text-primary hover:text-primary/50"
          >
            discount product.
          </a>
        </p>
      </div>

      <button className="tori-btn-primary">Shop Now</button>
    </div>
  );
};

export default AdvertiseDiscount;
