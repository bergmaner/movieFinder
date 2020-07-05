import React, { useState } from "react";
import styled from "styled-components";
import MoviePoster from "../components/MoviePoster";

const Header = styled.h1`
  font-size: 40px;
  margin: 0px;
  padding: 30px;
  color: white;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 15px;
`;

const Container = styled.div`
  background: #333231;
`;

const MovieList = ({ movies, loading }) => {
  return (
    <Container>
      <Header>Popular Movies</Header>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <MoviesContainer>
          {movies.map((movie, i) => (
            <MoviePoster key={i} movie={movie} />
          ))}
        </MoviesContainer>
      )}
    </Container>
  );
};
export default MovieList;
