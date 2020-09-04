import React, { useEffect } from "react";
import styled from "styled-components";
import { TMDB_URL, API_KEY} from "../config";
import CarouselSlider from "../components/CarouselSlider";
import Spinner from "../components/Spinner"
import Discover from "../components/Discover";
import Button from "../components/Button";
import MovieList from "../components/MovieList";
import Genres from "../components/Genres";

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
console.log("gg",data.movies)
  const displayMovies = async( movie_type, page ) => {
    let url = `&include_adult=false&include_video=false&page=${page}`;

    dispatch({
      type: "MOVIES_REQUEST",
      payload: "",
    });
     fetch(`https://api.themoviedb.org/3/movie/${movie_type}?api_key=${API_KEY}${url}`)
        .then(response => response.json())
        .then(res => {
          console.log("res",res)
          switch(movie_type){
            case "popular" :  dispatch({
              type: "DISPLAY_POPULAR_MOVIES",
              payload: res,
            });
            break;
            case "top_rated" : 
            dispatch({
              type: "DISPLAY_TOP_RATED",
              payload: res,
            });
            break;
            case "now_playing" : 
            dispatch({
              type: "DISPLAY_NOW_PLAYING",
              payload: res,
            });
            break;
          }
         
        })
        .catch(error => {
          throw(error);
        });
  };
  useEffect(() => {
    const fetchMovies = async () => {
     
     await displayMovies("popular", data.actualPage)
     await displayMovies("top_rated", data.actualPage)
     await displayMovies("now_playing", data.actualPage)
    };
   
    if(data.type === "DISCOVER")
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
      <Genres data={data} dispatch={dispatch}/>
{ data.type==="DISCOVER" ? <Discover data={data}/>
:  <MovieList data={data} dispatch={dispatch} /> } 
    </Container>
  );
};
export default Home;
