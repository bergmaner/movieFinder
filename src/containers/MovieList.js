import React from "react";
import styled from "styled-components";
import MoviePoster from "../components/MoviePoster";
import Spinner from "../components/Spinner";

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
  console.log("load", data.loading, data.movies);
  return (
    <Container>
      {data.loading && data.searchQuery !=="" ? (
        <MoviesContainer>
          <Spinner />
        </MoviesContainer>
      ) : (
        <MoviesContainer>
          {data.movies?.map((movie, i) =>
            movie.poster_path ? <MoviePoster key={i} movie={movie} /> : null
          )}
        </MoviesContainer>
      )}
    </Container>
  );
};
export default MovieList;
