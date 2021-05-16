import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [activeUser, setActiveUser] = useState(0);

  const onNextClick = () => {
    if (activeUser >= 0 && activeUser < data.length - 1) {
      setActiveUser((prevValue) => prevValue + 1);
    } else {
      setActiveUser(0);
    }
  };

  const onPrevClick = () => {
    if (activeUser > 0 && activeUser < data.length) {
      setActiveUser((prevValue) => prevValue - 1);
    } else {
      setActiveUser(data.length - 1);
    }
  };

  // useEffect(() => {
  //   const slider = setInterval(onNextClick, 4000);
  //   return () => clearImmediate(slider);
  // });

  const { id, image, name, title, quote } = data[activeUser];

  return (
    <React.Fragment>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className="section-center">
          {data.map((d, i) => {
            return (
              <article
                className={`${
                  activeUser === i
                    ? "activeSlide"
                    : activeUser === i + 1 ||
                      (activeUser === 0 && i === data.length - 1)
                    ? "lastSlide"
                    : "nextSlide"
                }  `}
                key={d.id}
              >
                <img src={d.image} alt={d.name} className="person-img" />
                <h4>{d.name}</h4>
                <p className="title">{d.title}</p>
                <p className="text">{d.quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}

          <button className="prev" onClick={onPrevClick}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={onNextClick}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
