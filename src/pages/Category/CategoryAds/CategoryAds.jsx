import React from "react";
import CategoryAd from "../CategoryAd/CategoryAd";

const CategoryAds = () => {
  const ads = [
    {
      title: "Fresh & Natural",
      image:
        "https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fcta-bg-1.jpg&w=1920&q=75",
    },
    {
      title: "Fish & Meat",
      image:
        "https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fcta-bg-2.jpg&w=1920&q=75",
    },
    {
      title: "Bread & Bakery",
      image:
        "https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fcta-bg-3.jpg&w=1920&q=75",
    },
  ];
  return (
    <div className="component flex gap-5 lg:flex-nowrap flex-wrap">
      {ads.map((ad, idx) => (
        <CategoryAd key={Math.random()} ad={ad}></CategoryAd>
      ))}
    </div>
  );
};

export default CategoryAds;
