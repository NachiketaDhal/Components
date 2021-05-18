import React, { useState } from "react";
import data from "./data";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(inputValue, typeof inputValue);
    if (inputValue > 0 && inputValue < data.length) {
      // const newParagraphs = data.filter((d) => data.indexOf(d) < inputValue);
      const newParagraphs = data.slice(0, inputValue);
      setParagraphs(newParagraphs);
    } else {
      setParagraphs(["Please enter a value between 1 and 8"]);
    }
  };

  return (
    <React.Fragment>
      <section className="section-center">
        <h3>Tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={submitHandler}>
          <label htmlFor="paragraph">Paragraphs(Between 1-8):</label>
          <input
            type="number"
            id="paragraph"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn">Generate</button>
        </form>
        <article className="lorem-text">
          {paragraphs.map((paragrpah, i) => {
            return <p key={i}>{paragrpah}</p>;
          })}
        </article>
      </section>
    </React.Fragment>
  );
}

export default App;
