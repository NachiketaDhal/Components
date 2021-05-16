import React, { useState } from "react";

const Tour = ({ tour, deleteTour }) => {
  const [visible, setVisible] = useState(false);

  return (
    <React.Fragment>
      <article className="single-tour">
        <img src={tour.image} alt={tour.name} />
        <footer>
          <div className="tour-info">
            <h4>{tour.name}</h4>
            <h4 className="tour-price">${tour.price}</h4>
          </div>
          {visible ? (
            <div>
              <p>{tour.info}</p>
              <button onClick={() => setVisible(!visible)}>Show Less</button>
            </div>
          ) : (
            <div>
              <p>{tour.info.slice(0, 200)}...</p>
              <button onClick={() => setVisible(!visible)}>Read More</button>
            </div>
          )}

          <button className="delete-btn" onClick={() => deleteTour(tour.id)}>
            Not interested
          </button>
        </footer>
      </article>
    </React.Fragment>
  );
};

export default Tour;
