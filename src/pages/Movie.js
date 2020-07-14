import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { TMDB_URL, API_KEY, IMAGE_URL, MOVIE_CARD_SIZE,BACKDROP_SIZE } from "../config";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `${TMDB_URL}movie/${id}?api_key=${API_KEY}&append_to_response=credits`
    )
      .then((result) => result.json())
      .then((result) => {
        setMovie(result);
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
        <MovieCard loading={loading} movie={movie} poster={`${IMAGE_URL + MOVIE_CARD_SIZE + movie.poster_path}`} backdrop={`${IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}`}/>
    </div>
  );
};
export default Movie;
