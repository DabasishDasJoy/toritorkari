import React from "react";

const Pagination = ({ pages, setPage, page }) => {
  return (
    <div className="component">
      <div className="flex justify-between items-center border rounded-sm p-2">
        <div className="flex gap-2">
          {[...Array(pages).keys()].map((idx) => (
            <button
              onClick={() => {
                setPage(idx);
              }}
              className={`${
                idx === page && "bg-primary text-white"
              }  border px-2 text-sm transition-all delay-75 hover:bg-primary rounded-sm text-black/80 hover:text-white`}
              key={Math.random()}
            >
              {idx + 1}
            </button>
          ))}
        </div>
        <div className="text-[17px] text-gray-400">
          <p>
            Showing page {page + 1} of {pages} pages
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
