import React, { useEffect, useState } from "react";
import { API_KEY, TMDB_URL } from "../config";
import { MoviesContext } from "../App"
import Spinner from "./Spinner";
import styled from "styled-components";

const GenresContainer = styled.div`
dislay: flex;
justify-content: center;
text-align: left;
margin: 20px;

`

const Genre = styled.div`
display: inline-block;
padding: 0 5px;
margin: 5px 0;
border-right: 1px solid #fff;
color: #fff;
transition: 0.2s color ease;
cursor: pointer;
:hover{
color: #000;
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
      
  return loading ? <Spinner/> : <GenresContainer>{state.genres.map((genre) => <Genre onClick={() =>   dispatch({
    type: "DISPLAY_GENRE",
    payload: genre.id,
  })} key={genre.id}>{genre.name}</Genre>)}</GenresContainer>;
};
export default Genres;
