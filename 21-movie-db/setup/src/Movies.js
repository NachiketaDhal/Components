import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
// import SingleMovie from "./SingleMovie";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, loading, inputValue } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (!inputValue) {
    return (
      <section className="movies">
        <div className="error">Incorrect IMDB Id</div>
      </section>
    );
  }

  return (
    <section className="movies">
      {movies ? (
        movies.map((movie) => {
          const { Title, Year, Poster, imdbID } = movie;
          return (
            <Link className="movie" to={`movies/${imdbID}`} key={imdbID}>
              <article>
                <img src={(Poster && Poster) || url} alt={Title} />
                <div className="movie-info">
                  <h4>{Title}</h4>
                  <p>{Year}</p>
                </div>
              </article>
            </Link>
          );
        })
      ) : (
        <div className="error">No Movies Found!</div>
      )}
    </section>
  );
};

export default Movies;
