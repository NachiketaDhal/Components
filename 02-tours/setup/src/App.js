import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./index.css";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState();
  const [loading, setLoading] = useState(true);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const fetchedTours = await fetch(url);
      const fetchedToursJSON = await fetchedTours.json();
      setTours(fetchedToursJSON);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="tile">
          <h1>No Tours Left</h1>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <React.Fragment>
      <Tours tours={tours} deleteTour={deleteTour} />
    </React.Fragment>
  );
}

export default App;
