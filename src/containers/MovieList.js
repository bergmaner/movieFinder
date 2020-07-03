import React from "react";
import styled from "styled-components"
import MoviePoster from "../components/MoviePoster";

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
      {movies.map((movie,i) => (
        <MoviePoster key={i} id={movie.id} />
      ))}
      </MoviesContainer>
    </div>
  );
};
export default MovieList;
