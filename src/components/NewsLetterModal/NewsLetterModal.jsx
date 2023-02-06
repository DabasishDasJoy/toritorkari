import React from "react";

const NewsLetterModal = () => {
  return (
    <div className="absolute">
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="newsletter-modal"
        className="modal-toggle"
        defaultChecked
      />
      <div className="modal bg-black/60">
        <div className="modal-box rounded-sm max-w-xl text-center flex flex-col text-gray-700">
          <label
            htmlFor="newsletter-modal"
            className="absolute right-0 text-xs bg-gray-800 text-white px-2 py-[2px] hover:bg-primary cursor-pointer top-0"
          >
            Close
          </label>

          <h3 className="uppercase text-xl font-semibold text-gray-900">
            {" "}
            NewsLetter
          </h3>
          <p className="text-xs mt-1">
            Subscribe to our newsletters now and stay up-to-date with new
            collections, the latest lookbooks and exclusive offers.
          </p>

          <form className="mt-6">
            <div className="w-[50%] mx-auto">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email"
                className="tori-input"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-secondary rounded-md hover:bg-primary hover:text-white mt-2 py-1 px-2 text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterModal;
