import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { IMAGE_URL, POSTER_SIZE } from "../config";
import StarRating from "./StarRating";

const Details = styled.div`
  position: absolute;
  transform: translateY(-34%);
  left: 0px;
  width: 100%;
  height: 84%;
  color: #fff;
  z-index: 2;
  transition: all 0.4s;
`;

const Poster = styled.div`
min-width: 185px;
  margin: 20px;
  cursor: pointer;
  background: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 5px 10x rgba(0, 0, 0);
  :hover:before {
    transform: translateY(29%);
  }
  :hover ${Details} {
    transform: translateY(-85%);
  }
  :hover img {
    filter: blur(5px);
  }
  :before {
    content: "";
    position: absolute;
    transform: translateY(87%);
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
  text-align: left;
  padding: 0px 7px;
`;
const Image = styled.img`
  transition: all 0.4s;
`;


const MoviePoster = ({ movie }) => {
  const history = useHistory();

  const pushTo = (path) => {
    history.push(path);
  };

  return (
    <Poster onClick={() => pushTo(`/movie/${movie.id}`)}>
      <div>
        <Image src={`${IMAGE_URL + POSTER_SIZE + movie.poster_path}`} />
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
