import React from "react";
import { Link } from "react-router-dom";

const AppDownload = () => {
  return (
    <div className="bg-[#EEF2FF]">
      <div className="grid lg:grid-cols-3 py-1">
        <div className="lg:flex items-center hidden">
          <img
            src="https://kachabazar-store.vercel.app/_next/image?url=%2Fapp-download-img-left.png&w=640&q=75"
            alt=""
            className="w-4/5 mx-auto"
          />
        </div>
        <div className="text-black lg:text-center flex flex-col justify-center gap-3 lg:p-0 p-2">
          <h1 className="lg:text-2xl text-xl font-bold">
            Get Your Daily Needs From Our ToriTorkari Store
          </h1>
          <p className="text-sm">
            There are many products you will find our shop, Choose your daily
            necessary product from our KachaBazar shop and get some special
            offer.
          </p>
          <div className="flex items-center justify-center gap-5 mt-2">
            <Link>
              <img
                src="https://kachabazar-store.vercel.app/app/app-store.svg"
                alt=""
                className="w-32"
              />
            </Link>
            <Link>
              <img
                src="https://kachabazar-store.vercel.app/app/play-store.svg"
                alt=""
                className="w-32"
              />
            </Link>
          </div>
        </div>
        <div className="lg:flex items-center  hidden">
          <img
            src="https://kachabazar-store.vercel.app/_next/image?url=%2Fapp-download-img.png&w=640&q=75"
            alt=""
            className="w-4/5 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
