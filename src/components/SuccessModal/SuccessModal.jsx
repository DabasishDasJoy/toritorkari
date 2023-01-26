import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import success from "../../assets/success (1).gif";
import { CartContext } from "../../Contexts/CartProvider/CartProvider";

const SuccessModal = ({ trasactionId, unique_id }) => {
  const { successModal } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="absolute">
      {/* The button to open modal */}
      {/* Put this part before </body> tag */}
      <input
        ref={successModal}
        type="checkbox"
        id="success-modal"
        className="modal-toggle"
      />
      <div className="modal bg-black/60">
        <div className="modal-box  max-w-md rounded-sm flex flex-col justify-center items-center">
          <img src={success} alt="" className="mx-auto w-20" />
          <h3 className="font-bold text-lg text-primary">
            Payment Successfull !
          </h3>
          <p className="text-sm">Transaction ID: {trasactionId}</p>
          <div className="modal-action">
            <label
              onClick={() => navigate(`/invoice/${unique_id}`)}
              htmlFor="success-modal"
              className="tori-btn-secondary"
            >
              Okay
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
