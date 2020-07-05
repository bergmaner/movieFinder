import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { TMDB_URL, API_KEY, IMAGE_URL, MOVIE_CARD_SIZE } from "../Config";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(
      `${TMDB_URL}movie/${id}?api_key=${API_KEY}&append_to_response=credits`
    )
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        setMovie(result);
      });
  }, []);
  console.log("m", movie.backdrop_path);
  return (
    <div>
        <MovieCard movie={movie} image={`${IMAGE_URL + MOVIE_CARD_SIZE + movie.poster_path}`}/>
    </div>
  );
};
export default Movie;
