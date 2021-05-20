import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { closeModal, showModal } = useGlobalContext();

  return (
    <div
      className={`modal-overlay ${showModal && "show-modal"}`}
      onClick={closeModal}
    >
      <div className="modal-container">
        <h3>MODAL CONTENT</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
