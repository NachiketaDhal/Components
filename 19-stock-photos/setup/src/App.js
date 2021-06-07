import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

// https://api.unsplash.com/search/photos/?client_id=NG6cqORlmd4QMO1ThoBPJ7fer1ZsBfhGRBiMD_4hRyM&query=cars
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    let url;
    setLoading(true);
    const pageUrl = `&page=${page}`;
    const queryUrl = `&query=${inputValue}`;

    if (inputValue) {
      url = `${searchUrl}${clientID}${pageUrl}${queryUrl}`;
    } else {
      url = `${mainUrl}${clientID}${pageUrl}`;
    }
    try {
      const fetchedImages = await fetch(url);
      const fetchedImagesJSON = await fetchedImages.json();
      // console.log(fetchedImagesJSON);
      setImages((prevValue) => {
        if (inputValue && page === 1) {
          return fetchedImagesJSON.results;
        } else if (inputValue) {
          return [...prevValue, ...fetchedImagesJSON.results];
        } else {
          return [...prevValue, ...fetchedImagesJSON];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImages();
    setPage(1);
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((prevValue) => prevValue + 1);
      }
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line
  }, []);

  // if (loading) {
  //   return (
  //     <div style={{ height: "80vh", display: "grid", placeItems: "center" }}>
  //       <h2>Loading...</h2>
  //     </div>
  //   );
  // }

  return (
    <React.Fragment>
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {images.map((image, index) => {
            return <Photo key={index} image={image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </React.Fragment>
  );
}

export default App;
