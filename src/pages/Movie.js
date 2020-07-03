import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1a65d41cd57fab7537d17820063e63df`
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
        <MovieCard movie={movie} image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}/>
    </div>
  );
};
export default Movie;
