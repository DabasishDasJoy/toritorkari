import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SuccessMessage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-primary/20 rounded-md px-5 py-3 text-black text-sm">
      <p>
        Thank you{" "}
        <span className="text-primary font-bold">{user?.displayName}</span>,
        Your order have been recieved!
      </p>
    </div>
  );
};

export default SuccessMessage;
