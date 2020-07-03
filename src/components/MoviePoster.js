import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StarRating from "./StarRating";

const Details = styled.div`
  position: absolute;
  bottom: -57%;
  left: 0px;
  width: 100%;
  height: 84%;
  color: #fff;
  z-index: 2;
  transition: all 0.4s;
`;

const Poster = styled.div`
  margin: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 5px 10x rgba(0, 0, 0);
  :hover:before {
    bottom: 0px;
  }
  :hover ${Details} {
    bottom: 0px;
  }
  :hover img {
    filter: blur(5px);
  }
  :before {
    content: "";
    position: absolute;
    bottom: -57%;
    overflow: hidden;
    left: 0;
    width: 100%;
    height: 84%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 90%, transparent);
    transition: all 0.4s;
    z-index: 1;
  }
`;
const Header = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 13px;
`;
const Overview = styled.div`
  font-size: 13px;
`;
const Image = styled.img`
  transition: all 0.4s;
`;

const MoviePoster = ({ id }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1a65d41cd57fab7537d17820063e63df`
    )
      .then((result) => result.json())
      .then((result) => {
        setMovie(result);
      });
  }, []);
  console.log("m", movie);
  return (
    <Poster>
      <div>
        <Image src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
      </div>
      <Details>
        <Header>
          <Title>{movie.title}</Title>
          <StarRating rating={movie.vote_average} />
        </Header>
        <Overview>{movie.overview}</Overview>
      </Details>
    </Poster>
  );
};
export default MoviePoster;
