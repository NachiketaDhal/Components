import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#888326").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let colors;
    try {
      colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
    // console.log(colors);
  };

  return (
    <React.Fragment>
      <main>
        <section className="container">
          <h3>Color Generator</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="#888326"
              className={`${error && "error"}`}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <button className="btn">Submit</button>
          </form>
        </section>
        <section className="colors">
          {list.map((color, i) => {
            return <SingleColor color={color} key={i} index={i} />;
          })}
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
