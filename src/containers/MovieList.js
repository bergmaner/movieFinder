import React, { useState } from "react";
import styled from "styled-components";
import MoviePoster from "../components/MoviePoster";
import Spinner from "../components/Spinner";

const Header = styled.h1`
  font-size: 40px;
  margin: 0px;
  padding: 39px;
  color: white;
`;

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

const MovieList = ({ movies, loading }) => {
  console.log("load", loading, movies);
  return (
    <Container>
      {loading ? (
        <MoviesContainer>
          <Spinner />
        </MoviesContainer>
      ) : (
        <MoviesContainer>
          {movies?.map((movie, i) =>
            movie.poster_path ? <MoviePoster key={i} movie={movie} /> : null
          )}
        </MoviesContainer>
      )}
    </Container>
  );
};
export default MovieList;
