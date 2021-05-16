import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, deleteTour }) => {
  return (
    <React.Fragment>
      <main>
        <section>
          <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
          </div>
          {tours.map((tour) => {
            return <Tour tour={tour} key={tour.id} deleteTour={deleteTour} />;
          })}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Tours;
