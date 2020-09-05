import React, { useEffect } from "react";
import styled from "styled-components";
import { MoviesContext } from "../App";
import MoviePoster from "./MoviePoster";
import Spinner from "./Spinner";
import Button from "./Button";
import { API_KEY, TMDB_URL } from "../config";

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

const MovieList = () => {
  const { state, dispatch } = React.useContext(MoviesContext);
  useEffect(() => {
    if (state.type === "FILTER") {
      let url = `&include_adult=false&include_video=false&page=${state.actualPage}&with_genres=${state.genre}`;
      fetch(`${TMDB_URL}discover/movie?api_key=${API_KEY}${url}`)
        .then((response) => response.json())
        .then((res) => {
          res.results = [...state.movies, ...res.results];
          dispatch({
            type: "FILTER_BY_GENRES",
            payload: res,
          });
        });
    }
  }, [state.genre, state.actualPage]);
  return (
    <Container>
      {state.loading ? (
        <Spinner />
      ) : (
        <MoviesContainer>
          {state.movies?.map((movie) => (
            <MoviePoster key={movie.id} movie={movie} />
          ))}
        </MoviesContainer>
      )}
      <Button
        onClick={() =>
          dispatch({
            type: "SET_PAGE",
            payload: state.actualPage + 1,
          })
        }
      >
        Load More
      </Button>
    </Container>
  );
};
export default MovieList;
