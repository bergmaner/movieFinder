import React, { useEffect } from "react";
import styled from "styled-components";
import { TMDB_URL, API_KEY } from "../config";
import CarouselSlider from "../components/CarouselSlider";
import Button from "../components/Button";
import MovieList from "../components/MovieList";

const Container = styled.div`
background: #333231;
`;

const Home = ({ data, dispatch }) => {
  useEffect(() => {
    const fetchMovies = async () => {
      dispatch({
        type: "MOVIES_REQUEST",
        payload: "",
      });
      
      fetch(`${TMDB_URL}movie/popular?api_key=${API_KEY}&page=${data.actualPage}`)
        .then((result) => result.json())
        .then((result) => {
          result.results = [...data.movies, ...result.results];
          dispatch({
            type: "DISPLAY_POPULAR_MOVIES",
            payload: result,
          });
        });
    };
    if(data.searchQuery === "")
      {
        fetchMovies();
      }
  },[data.actualPage]);
  return (
    <Container>
      <CarouselSlider
      dispatch={dispatch}
      data={data}
      />
      <MovieList data={data} />
      <Button onClick ={ () => dispatch({
        type: "SET_PAGE",
        payload: data.actualPage+1,
      })}>Load More</Button>
    </Container>
  );
};
export default Home;
