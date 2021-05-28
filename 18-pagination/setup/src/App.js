import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const [page, setPage] = useState(1);

  const { loading, data } = useFetch();
  const itemsPerPage = 10;
  const newData = data.filter(
    (item, index) =>
      index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
  );

  let btnArray = [];
  // data.length / newData.length = 100 / 10 = 10
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    btnArray.push(i);
  }

  // console.log(Math.ceil(data.length / itemsPerPage));

  const changePageOnButtonClick = (e) => {
    // console.log(typeof e.target.textContent);
    setPage(parseInt(e.target.textContent));
  };

  const prevButtonHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(Math.ceil(data.length / itemsPerPage));
    }
  };

  const nextButtonHandler = () => {
    if (page < Math.ceil(data.length / itemsPerPage)) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading...</h1>;
      </div>
    );
  }

  return (
    <main>
      <div className="section-title">
        <h1>Pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {newData.map((item) => (
            <Follower key={item.id} item={item} />
          ))}
        </div>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevButtonHandler}>
            Prev
          </button>

          {btnArray.map((btn, i) => {
            return (
              <button
                key={i}
                className={`page-btn ${page === btn && "active-btn"}`}
                onClick={changePageOnButtonClick}
              >
                {btn}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextButtonHandler}>
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
