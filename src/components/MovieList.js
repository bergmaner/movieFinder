import React from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import Spinner from "./Spinner";

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

const MovieList = ({ data }) => {
  return (
    <Container>
      {data.loading && data.searchQuery !=="" ? (
        <MoviesContainer>
          <Spinner />
        </MoviesContainer>
      ) : (
        <MoviesContainer>
          {data.movies?.map((movie) =>
           <MoviePoster key={movie.id} movie={movie} />
          )}
        </MoviesContainer>
      )}
    </Container>
  );
};
export default MovieList;
