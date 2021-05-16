import React from "react";
import "./index.css";

const List = ({ people }) => {
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <div className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default List;
