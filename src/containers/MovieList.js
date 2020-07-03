import React from "react";
import styled from "styled-components"
import Movie from "../components/Movie";

const Header = styled.h1`
font-size: 40px;
`;

const MoviesContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 0px 15px;

`;

const MovieList = ({ movies }) => {
  return (
    <div>
        <Header>Popular Movies</Header>
        <MoviesContainer>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
      </MoviesContainer>
    </div>
  );
};
export default MovieList;
