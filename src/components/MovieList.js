import React, { useEffect } from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import Spinner from "./Spinner";
import Button from "./Button";
import { API_KEY } from "../config";

const MoviesContainer = styled.div`
  background: #333231;
  display: flex;
  flex-wrap: wrap;
  min-height: 200px;
  justify-content: center;
  padding: 0px 15px;
`;

const Container = styled.div`
  background: #333231;
`;

const MovieList = ({ data, dispatch }) => {
  console.log("load", data.loading);

  useEffect(() => {
    console.log("data",data)
    if(data.type === "FILTER")
    {
   let url = `&include_adult=false&include_video=false&page=${data.actualPage}&with_genres=${data.genre}`;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}${url}`)
    .then(response => response.json())
    .then(res => {
      res.results = [...data.movies, ...res.results];
      dispatch({
        type: "FILTER_BY_GENRES",
        payload: res,
      })
    })
  }
  },[data.genre,data.actualPage])
  return (
    <Container>
      {data.loading ? (
        <Spinner />
      ) : (
        <MoviesContainer>
          {data.movies?.map((movie) => (
            <MoviePoster key={movie.id} movie={movie} />
          ))}
        </MoviesContainer>
      )}
      <Button
        onClick={() => (
        
          dispatch({
            type: "SET_PAGE",
            payload: data.actualPage + 1,
          })
        )}
      >
        Load More
      </Button>
    </Container>
  );
};
export default MovieList;
