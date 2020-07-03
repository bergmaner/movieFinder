import React from "react"
import styled from "styled-components"
import StarRating from "./StarRating";
const Poster = styled.img`
margin:20px;
`;


const Movie = ({movie}) =>{
    return(
        <div><Poster src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
        <StarRating rating={movie.vote_average}/></div>
    )
}
export default Movie;