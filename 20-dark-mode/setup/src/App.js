import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme") === "dark-theme") {
    theme = "dark-theme";
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getTheme());

  const handleToggle = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.firstElementChild.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <React.Fragment>
      <nav className="nav-center">
        <h1>Overreacted</h1>
        <button className="btn" onClick={handleToggle}>
          Toggle
        </button>
      </nav>
      <div className="articles">
        {data.map((item) => {
          return <Article key={item.id} item={item} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
