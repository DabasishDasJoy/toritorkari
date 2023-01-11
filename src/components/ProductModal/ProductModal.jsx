import React from "react";
import { Link } from "react-router-dom";
import StatusTag from "../StatusTag/StatusTag";

const ProductModal = () => {
  return (
    <div>
      <label htmlFor="product-modal" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal bg-black/80">
        <div className="modal-box w-6/12 max-w-5xl relative rounded-sm grid grid-cols-5 px-5 py-7 gap-5">
          <label
            htmlFor="product-modal"
            className="absolute right-2 text-black hover:text-primary cursor-pointer font-semibold top-1"
          >
            ✕
          </label>

          <div className="col-span-2 flex items-center justify-center">
            <img
              src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbvrsZtMt%2FCalabaza-Squash-Package-each.jpg&w=256&q=75"
              alt=""
            />
          </div>

          <div className="text-black col-span-3 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">Iglotex Cauliflower</h1>
            <div>
              <StatusTag color={"primary"}>In Stock</StatusTag>
            </div>
            <p className="text-sm">
              Flour, finely ground cereal grains or other starchy portions of
              plants, used in various food products and as a basic ingredient of
              baked goods. Flour made from wheat grains is the most satisfactory
              type for baked products that require spongy structure. ... The
              outer layers and internal structures of a kernel of wheat.
            </p>
            <p className="price">$11</p>
            <div className="flex justify-between items-center gap-5">
              <div className="flex  py-1 border-2 rounded-sm text-[#374151] font-semibold items-center">
                <button className="px-5 hover:bg-white">-</button>
                <span className=" text-sm">1</span>
                <button className="px-5 hover:bg-white">+</button>
              </div>
              <button className="tori-btn-secondary w-full">Add to Cart</button>
            </div>
            <div className="flex justify-between">
              <p className="text-black/80 text-sm font-semibold">
                Category: Flour
              </p>
              <Link to={"/product"} className="text-sm text-accent link">
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
