import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [foods, setFoods] = useState(items);

  let categories = items.map((item) => item.category);
  categories = [...new Set(categories)];
  categories.unshift("all");

  const filterFoods = (category) => {
    if (category === "all") {
      setFoods(items);
    } else {
      const filteredFoods = items.filter((food) => food.category === category);
      setFoods(filteredFoods);
    }
  };

  return (
    <React.Fragment>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterFoods={filterFoods} />
          <div className="section-center">
            {foods.map((food) => {
              return <Menu food={food} key={food.id} />;
            })}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
