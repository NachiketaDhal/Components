import React, { useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [count, setCount] = useState(0);
  const { id, image, job, name, text } = data[count];

  const onNextClick = () => {
    if (count >= 0 && count < data.length - 1)
      setCount((prevValue) => prevValue + 1);
    else setCount(0);
  };

  const onPreviousClick = () => {
    if (count > 0 && count < data.length)
      setCount((prevValue) => prevValue - 1);
    else setCount(data.length - 1);
  };

  const onSurpriseClick = () => {
    let surpriseNumber = Math.floor(Math.random() * data.length);
    if (surpriseNumber === count && surpriseNumber < data.length - 1) {
      surpriseNumber += 1;
    } else if (surpriseNumber >= data.length - 1) {
      surpriseNumber = 0;
    }
    setCount(surpriseNumber);
    console.log(surpriseNumber);
  };

  return (
    <React.Fragment>
      <article key={id} className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn">
            <FaChevronLeft onClick={onPreviousClick} />
          </button>
          <button className="next-btn">
            <FaChevronRight onClick={onNextClick} />
          </button>
        </div>
        <button className="random-btn" onClick={onSurpriseClick}>
          Surprise Me
        </button>
      </article>
    </React.Fragment>
  );
};

export default Review;
