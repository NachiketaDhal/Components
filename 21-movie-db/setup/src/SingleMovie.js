import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const SingleMovie = () => {
  const movieId = useParams().id;
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    let url;
    const idUrl = `&i=${movieId}`;
    url = `${API_ENDPOINT}${idUrl}`;
    try {
      setLoading(true);
      const fetchedMovie = await fetch(url);
      const fetchedMovieJSON = await fetchedMovie.json();
      // console.log(url);
      // console.log(fetchedMovieJSON);
      setMovie(fetchedMovieJSON);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }

  const { Poster, Title, Year, Plot } = movie;

  return (
    <section className="single-movie">
      <img src={Poster} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
