import React from "react";

const Pagination = ({ pages, setPage, page }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      {[...Array(pages).keys()].map((idx) => (
        <button
          onClick={() => {
            setPage(idx);
          }}
          className={`${
            idx === page && "bg-primary text-white"
          }  border px-2 text-sm transition-all delay-75 hover:bg-primary rounded-sm text-black/80 hover:text-white`}
          key={idx}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
