import React from "react";

const ConfirmationModal = ({ handleDelete, data, handleClose }) => {
  return (
    <div className="absolute">
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal bg-black/80">
        <div className="modal-box rounded-sm max-w-xs text-center text-gray-600">
          <h3 className="font-bold text-lg">Are you sure want to delete?</h3>

          <div className="modal-action justify-center">
            <label
              onClick={() => handleDelete(data)}
              htmlFor="confirmation-modal"
              className="tori-btn-secondary cursor-pointer"
            >
              Yes, Delete it
            </label>
            <label
              onClick={() => handleClose()}
              htmlFor="confirmation-modal"
              className="tori-btn-warning"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
