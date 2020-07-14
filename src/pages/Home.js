import React, { useEffect } from "react";
import styled from "styled-components";
import { TMDB_URL, IMAGE_URL, API_KEY, BACKDROP_SIZE } from "../Config";
import Background from "../components/Background";
import Button from "../components/Button";
import MovieList from "../containers/MovieList";

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
          result.results = [...data.movies, ...result.results.filter((movie)=>{if(movie.poster_path)return movie})];
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
      <Background
        image={`${
          IMAGE_URL + BACKDROP_SIZE + data.backgroundImage.backdrop_path
        }`}
        title={data.backgroundImage.title}
        overview={data.backgroundImage.overview}
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
