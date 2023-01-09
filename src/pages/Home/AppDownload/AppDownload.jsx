import React from "react";
import { Link } from "react-router-dom";

const AppDownload = () => {
  return (
    <div className="bg-[#EEF2FF]">
      <div className="grid lg:grid-cols-3">
        <div className="lg:block hidden">
          <img
            src="https://kachabazar-store.vercel.app/_next/image?url=%2Fapp-download-img-left.png&w=640&q=75"
            alt=""
          />
        </div>
        <div className="text-black lg:text-center flex flex-col justify-center gap-3 lg:p-0 p-2">
          <h1 className="lg:text-2xl text-xl font-bold">
            Get Your Daily Needs From Our KachaBazar Store
          </h1>
          <p>
            There are many products you will find our shop, Choose your daily
            necessary product from our KachaBazar shop and get some special
            offer.
          </p>
          <div className="flex items-center justify-center gap-5 mt-2">
            <Link>
              <img
                src="https://kachabazar-store.vercel.app/app/app-store.svg"
                alt=""
              />
            </Link>
            <Link>
              <img
                src="https://kachabazar-store.vercel.app/app/play-store.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="lg:block hidden">
          <img
            src="https://kachabazar-store.vercel.app/_next/image?url=%2Fapp-download-img.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
