import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { newState, onNextButtonClick, onPrevButtonClick } = useGlobalContext();
  return (
    <div className="btn-container">
      <button onClick={onPrevButtonClick} disabled={newState.loading}>
        Prev
      </button>
      <p>{newState.page + 1} of 50</p>
      <button onClick={onNextButtonClick} disabled={newState.loading}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
