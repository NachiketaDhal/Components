import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, isCorrect, questions, closeModal } = useGlobalContext();

  return (
    <div className={`modal-container ${isModalOpen && "isOpen"}`}>
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>
          You answeres {Math.round((isCorrect * 100) / questions.length)}%
          answers correctly
        </p>
        <button className="close-btn" onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
