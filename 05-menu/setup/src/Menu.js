import React from "react";

const Menu = ({ food }) => {
  return (
    <React.Fragment>
      <article className="menu-item">
        <img src={food.img} alt={food.title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{food.title}</h4>
            <h4 className="price">${food.price}</h4>
          </header>
          <p className="item-text">{food.desc}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Menu;
