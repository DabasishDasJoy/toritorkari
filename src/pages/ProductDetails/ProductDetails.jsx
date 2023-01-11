import React from "react";
import Product from "../../components/Product/Product";
import StatusTag from "../../components/StatusTag/StatusTag";

const ProductDetails = () => {
  return (
    <div className="bg-[#F9FAFB] text-black sub-section">
      {/* Bread Cubs */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
      <div className="bg-white rounded-md">
        {/* Details */}
        <div className="rounded-sm grid grid-cols-3 px-5 py-7 gap-5">
          <div className=" flex items-start justify-center">
            <img
              src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbvrsZtMt%2FCalabaza-Squash-Package-each.jpg&w=256&q=75"
              alt=""
            />
          </div>

          <div className="text-black  flex flex-col gap-3">
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

            {/* Add to cart */}
            <div className="flex justify-between items-center gap-5">
              <div className="flex  py-1 border-2 rounded-sm text-[#374151] font-semibold items-center">
                <button className="px-5 hover:bg-white">-</button>
                <span className=" text-sm">1</span>
                <button className="px-5 hover:bg-white">+</button>
              </div>
              <button className="tori-btn-secondary w-full">Add to Cart</button>
            </div>

            {/* category */}
            <div className="flex justify-between">
              <p className="text-black/80 text-sm font-semibold">
                Category: Flour
              </p>
            </div>

            {/* Share on social */}

            <div>
              <h5 className="text-lg font-bold">Share on Your Social Media</h5>
              <div className="flex gap-3 items-center mt-2">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#1877F2"
                    d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                  />
                  <path
                    fill="#ffffff"
                    d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                  />
                </svg>
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="20" fill="#0077B5" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="20" fill="#1DA1F2" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* related products */}
      <div className="mt-10">
        <h3 className="text-lg font-bold">Related Products</h3>
        <div className="section grid lg:grid-cols-6 grid-cols-2 gap-3">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
