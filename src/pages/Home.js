import React, { useEffect } from "react";
import styled from "styled-components";
import { TMDB_URL, API_KEY } from "../config";
import CarouselSlider from "../components/CarouselSlider";
import Spinner from "../components/Spinner";
import Discover from "../components/Discover";
import MovieList from "../components/MovieList";
import Genres from "../components/Genres";
import { MoviesContext } from "../App";

const Container = styled.div`
  background: #333231;
`;

const SpinnerContainer = styled.div`
  background: #333231;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const { state, dispatch } = React.useContext(MoviesContext);
  const displayMovies = async (movie_type, page) => {
    let url = `&include_adult=false&include_video=false&page=${page}`;

    dispatch({
      type: "MOVIES_REQUEST",
      payload: "",
    });
    fetch(`${TMDB_URL}movie/${movie_type}?api_key=${API_KEY}${url}`)
      .then((response) => response.json())
      .then((res) => {
        switch (movie_type) {
          case "popular":
            dispatch({
              type: "DISPLAY_POPULAR_MOVIES",
              payload: res,
            });
            break;
          case "top_rated":
            dispatch({
              type: "DISPLAY_TOP_RATED",
              payload: res,
            });
            break;
          case "now_playing":
            dispatch({
              type: "DISPLAY_NOW_PLAYING",
              payload: res,
            });
            break;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  useEffect(() => {
    const fetchMovies = async () => {
      await displayMovies("popular", state.actualPage);
      await displayMovies("top_rated", state.actualPage);
      await displayMovies("now_playing", state.actualPage);
    };

    if (state.type === "DISCOVER") {
      fetchMovies();
    }
  }, [state.actualPage]);
  return state.loading ? (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  ) : (
    <Container>
      <CarouselSlider/>
      <Genres/>
      {state.type === "DISCOVER" ? (
        <Discover/>
      ) : (
        <MovieList/>
      )}
    </Container>
  );
};
export default Home;
