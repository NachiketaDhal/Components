import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <React.Fragment>
      <main>
        <div className="container">
          <h3>Questions And Answers About Login</h3>
          <section className="info">
            {data.map((d) => (
              <SingleQuestion d={d} key={d.id} />
            ))}
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
