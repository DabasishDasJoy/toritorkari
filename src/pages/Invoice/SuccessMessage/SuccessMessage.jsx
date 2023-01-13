import React from "react";

const SuccessMessage = () => {
  return (
    <div className="bg-primary/20 rounded-md px-5 py-3 text-black text-sm">
      <p>
        Thank you <span className="text-primary font-bold">Dabasish Das</span>,
        Your order have been recieved!
      </p>
    </div>
  );
};

export default SuccessMessage;
