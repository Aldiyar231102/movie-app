import React, { useEffect, useState } from "react";
import "./MovieList.css";
import MovieSearch from "../MovieSearchInput/MovieSearch";
import { Link } from 'react-router-dom';

const API_KEY = "6dd92701d90d1611da339e7211434bea";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = (page) => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }
      });
  };

  const handleSearch = (searchTerm) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <MovieSearch onSearch={handleSearch} />
      <h1>Popular Movies</h1>
      <div className="movieList">
        {movies.map((movie) => (
          <div key={movie.id} className="movieItem">
            <Link to={`/movie/${movie.id}`}>
              <img
                className="imageMovie"
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </div>
      <button className="loadMoreButton" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
}

export default MovieList;
