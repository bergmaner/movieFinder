import React from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import Spinner from "./Spinner";
import Button from "./Button";

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
  console.log("load",data.loading)
  return (
    <Container>
      {data.loading ? (
          <Spinner />
      ) : (
        <MoviesContainer>
          {data.movies?.map((movie) =>
           <MoviePoster key={movie.id} movie={movie} />
          )}
        </MoviesContainer>
      )}
                   <Button onClick ={ () =>(dispatch({
        type: "SEARCH_REQUEST",
      }), dispatch({
        type: "SET_PAGE",
        payload: data.actualPage+1,
      }))}>Load More</Button> 
    </Container>
  );
};
export default MovieList;
