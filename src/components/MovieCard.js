import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

const Card = styled.div`
  width: 100vw;
  background: transparent;
  display: flex;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
`;
const LeftCard = styled.div`
  width: 30%;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  height: auto;
  background: transparent;
  img {
    width: 100%;
    height: 100% !important;
    position: relative;
  }
`;
const RightCard = styled.div`

  width: 70%;
  background: #333231;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 40px;
  h1 {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 40px;
    margin: 30px 0 0 0;
    letter-spacing: 1px;
  }
  ul {
    list-style-type: none;
    margin: 10px 0 0 0;
    li {
      display: inline;
      color: #e3e3e3;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 16px;
      padding: 0 40px 0 0;
    }
  }
  p {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    letter-spacing: 1px;
    margin: 10px 0 10px 0;
    text-align: left;
  }
`;
const Genres = styled.li`
display: flex;
`;
const Genre = styled.div`
display: inline-block;
padding: 2px;
border-right: 1px solid white;
`;


const MovieCard = ({ image, movie }) => {
  console.log("mff", movie);
  return (
    <Card>
      <LeftCard>
        <img src={image} />
      </LeftCard>
      <RightCard>
        {" "}
        <h1>{movie.title}</h1>
        <ul>
          <li>{movie.release_date}</li>
          <li>{movie.runtime} min</li>
          <Genres>
          {movie?.genres?.map((genre) => (
            <Genre>{genre.name} </Genre>
          ))}
          </Genres>
        </ul>
        <StarRating rating={movie.vote_average} />
        <p>{movie.overview}</p>
      </RightCard>
    </Card>
  );
};
export default MovieCard;
