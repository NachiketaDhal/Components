import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ d }) => {
  const [visible, setVisible] = useState(false);
  const { title, info } = d;

  return (
    <React.Fragment>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setVisible(!visible)}>
            {visible ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {visible && <p>{info}</p>}
      </article>
    </React.Fragment>
  );
};

export default Question;
