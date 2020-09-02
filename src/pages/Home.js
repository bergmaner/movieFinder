import React, { useEffect } from "react";
import styled from "styled-components";
import { TMDB_URL, API_KEY} from "../config";
import CarouselSlider from "../components/CarouselSlider";
import Spinner from "../components/Spinner"
import Discover from "../components/Discover";
import Button from "../components/Button";
import MovieList from "../components/MovieList";

const Container = styled.div`
background: #333231;
`;

const SpinnerContainer = styled.div`
background: #333231;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`


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
        fetch(`${TMDB_URL}movie/now_playing?api_key=${API_KEY}&page=${data.actualPage}`)
        .then((result) => result.json())
        .then((result) => {
          result.results = [...data.movies, ...result.results];
          dispatch({
            type: "DISPLAY_NOW_PLAYING",
            payload: result,
          });
        });
        fetch(`${TMDB_URL}movie/top_rated?api_key=${API_KEY}&page=${data.actualPage}`)
        .then((result) => result.json())
        .then((result) => {
          result.results = [...data.movies, ...result.results];
          dispatch({
            type: "DISPLAY_TOP_RATED",
            payload: result,
          });
        });
    };

    if(data.discover)
      {
        fetchMovies();
      }
  },[data.actualPage]);
  return (
    data.loading ? <SpinnerContainer><Spinner/></SpinnerContainer> :
    <Container>
      <CarouselSlider
      dispatch={dispatch}
      data={data}
      />
{ data.discover ? <Discover data={data}/>
:  <MovieList data={data} dispatch={dispatch} /> } 
    </Container>
  );
};
export default Home;
