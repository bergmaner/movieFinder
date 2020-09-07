import React, { useEffect, useState } from "react";
import { API_KEY, TMDB_URL } from "../config";
import { MoviesContext } from "../App"
import Spinner from "./Spinner";
import styled from "styled-components";

const GenresContainer = styled.div`
dislay: flex;
justify-content: center;
align+items: center;
margin: 20px;

`

const Genre = styled.div`
display: inline-block;
padding: 0 5px;
margin: 5px 0;
position: relative;
color: #fff;
transition: 0.4s color ease;
cursor: pointer;
:after{
  position: absolute;
    left: 5px;
    content: "";
    width: 30px;
    height: 2px;
    background-color: #000;
    bottom: -5px;
    transition: 0.75s all ease;
}
:hover{
color: #000;
:after{
  width: calc(100% - 10px);
  background-color: #fff;
}
}
`

const Genres = () => {
  const { state, dispatch } = React.useContext(MoviesContext);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch(`${TMDB_URL}genre/movie/list?api_key=${API_KEY}`)
          .then((response) => response.json())
          .then((res) => {
              setLoading(false);
            dispatch({
              type: "DISPLAY_GENRES",
              payload: res,
            });
          })
          .catch((error) => {
            throw error;
          });
      }, []);
      
  return loading ? <Spinner/> : <GenresContainer>{state.genres.map((genre, i) => i < 10 ? <Genre onClick={() =>   dispatch({
    type: "DISPLAY_GENRE",
    payload: genre.id,
  })} key={genre.id}>{genre.name}</Genre>: null)}</GenresContainer> ;
};
export default Genres;
