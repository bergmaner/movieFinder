import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";
import { IMAGE_URL, LOGO_SIZE, PROFILE_SIZE } from "../Config";

const Card = styled.div`
  width: 100vw;
  height:90vh;
  background: transparent;
  display: flex;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
`;
const LeftCard = styled.div`
  width: 400px;
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
  width: calc(100% - 300px);
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
  padding: 7px;
  border-right: ${(props) => (props.last ? "none" : "1px solid white")};
`;

const ShortInfo = styled.div`
  width: 100%;
  display: flex;
  color: white;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
display: flex;
margin: 0px 5px;
height: 100px;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

const Image = styled.img`
margin: 5px;
max-height: 100%;
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
        <ShortInfo>
          <div>{movie.release_date}</div>
          <div>{movie.runtime} min</div>
          <Genres>
            {movie?.genres?.map((genre, i) => (
              <Genre last={i === movie.genres.length - 1 ? true : false}>
                {genre.name}{" "}
              </Genre>
            ))}
          </Genres>
        </ShortInfo>
        <StarRating rating={movie.vote_average} />
        <p>{movie.overview}</p>
        <Wrapper>{movie?.production_companies?.map((company, i) => (
             company.logo_path ? <Image src = {`${IMAGE_URL + LOGO_SIZE + company.logo_path}`}/> : null
            ))}</Wrapper>
              <Wrapper>{movie?.credits?.cast?.filter((actor,i)=> {return i < 5 ?  actor : null } ).map((actor, i) => (
             actor.profile_path ? <Image circle src = {`${IMAGE_URL + PROFILE_SIZE + actor.profile_path}`}/> : null
            ))}</Wrapper>
  
      </RightCard>
    </Card>
  );
};
export default MovieCard;
