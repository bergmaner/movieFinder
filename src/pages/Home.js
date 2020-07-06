import React, { useEffect, useState, useReducer } from "react";
import { TMDB_URL, IMAGE_URL, API_KEY, BACKDROP_SIZE } from "../Config";
import Background from "../components/Background";
import MovieList from "../containers/MovieList";

const Home = ({ data, dispatch }) => {
  useEffect(() => {
    const fetchMovies = async () => {
      dispatch({
        type: "MOVIES_REQUEST",
        payload: "",
      });
      
      fetch(`${TMDB_URL}movie/popular?api_key=${API_KEY}&page=1`)
        .then((result) => result.json())
        .then((result) => {
          dispatch({
            type: "DISPLAY_POPULAR_MOVIES",
            payload: result,
          });
        });
    };
    fetchMovies();
  },[]);
  console.log("home", data);
  return (
    <div>
      <Background
        image={`${
          IMAGE_URL + BACKDROP_SIZE + data.backgroundImage.backdrop_path
        }`}
        title={data.backgroundImage.title}
        overview={data.backgroundImage.overview}
      />
      <MovieList movies={data.movies} loading={data.loading} />
    </div>
  );
};
export default Home;
