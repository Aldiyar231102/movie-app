import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

const API_KEY = "6dd92701d90d1611da339e7211434bea";

function MovieDetail() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
      });

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setCast(data.cast);
      });
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  const { title, overview, vote_average, poster_path, runtime } = movieData;

  return (
    <div className="container">
      <div className="movieInfoBlock">
        <div className="imageBlock">
          <img
            className="image"
            src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
            alt={title}
          />
        </div>
        <div className="movieTextBlock">
          <h2 className="movieTitle">{title}</h2>
          <p className="movieOverview">{overview}</p>
          <p className="movieRating">Rating: {vote_average}</p>
          <p className="movieTime">Running Time: {runtime} minutes</p>
        </div>
      </div>
      <div className="castBlock">
        <h3 className="castTitle">Cast:</h3>
        <div className="castList">
          {cast.map((actor) => (
            <div key={actor.id} className="actorItem">
              <img
                src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                alt={actor.name}
                className="actorImage"
              />
              <p className="actorName">{actor.name}</p>
              <p className="characterName">as {actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
