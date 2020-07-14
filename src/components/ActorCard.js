import React from "react";
import styled from "styled-components";
import {breakpoint} from "../helpers/mediaQueries";
import Spinner from "../components/Spinner";
import Slider from "../components/Slider";
import SlideItem from "./SlideItem";
import { IMAGE_URL } from "../Config";

const Poster = styled.img`
@media${breakpoint.sm}{
   width: 250px;
    }
`;
const Card = styled.div`
color: white;
  width: 100%;
  min-height: 90vh;
  background: #333231;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
`;
const Header = styled.div`
display: flex;
height: 278px;
padding-bottom: 20px;
@media${breakpoint.sm}{
flex-direction: column;
height: auto;
}
`;

const Details = styled.div`
width: calc(100vw - 225px);
color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 20px;
@media ${breakpoint.sm} {
font-size: 14px;
width: 100%;
}
`;

const Detail = styled.div`
margin: 5px;
text-align: left;
`;

const Biography = styled.div`
text-align: left;
padding: 20px;
@media ${breakpoint.sm} {
    font-size: 14px;
    }
`;

const ActorCard = ({ loading, poster, backdrop, actor }) =>{
    return(
        <div>
{loading ? (
        <Card style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Spinner />
        </Card>
      ) : (
        <Card>
            <Header>
            <Poster src={poster} />
      <Details>
          <Detail>Name: {actor.name}</Detail>
          <Detail>Birthday: {actor.birthday}</Detail>
          <Detail>Place of birth: {actor.place_of_birth}</Detail>
          <Detail>Known for: {actor.known_for_department}</Detail>
          <Slider height="100px">{actor?.movie_credits?.cast?.map((movie, i) =>
                  movie.poster_path ? (
                   <SlideItem
                      path={`/movie/${movie.id}`}
                      image={`${IMAGE_URL}w185${movie.poster_path}`}
                    />
                  ) : null
                )}</Slider>
      </Details>
            </Header>
            <Biography>
                <h1>Biography</h1>
                <p>{actor.biography}</p>
            </Biography>
          {/* <RightCard>
          {/* */}
            {" "}
            {/* <div>{movie.title}</div> */}
            <div>
              {/* <div>{movie.release_date}</div>
              <div>{movie.runtime} min</div> */}
              {/* <div>
                {movie?.genres?.map((genre, i) => (
                  <div last={i === movie.genres.length - 1 ? true : false}>
                    {genre.name}{" "}
                  </div>
                ))}
              </div> */}
            </div>
            {/* <StarRating
              justifyContent="flex-start"
              rating={movie.vote_average}
            /> */}
            {/* <Overview>{movie.overview}</Overview> */}
            {/* <div>
              {movie?.production_companies?.map((company, i) =>
                company.logo_path ? (
                  <img
                  size = {"40px"}
                    key={i}
                    src={`${IMAGE_URL + LOGO_SIZE + company.logo_path}`}
                  />
                ) : null
              )}
            </div> */}
            {/* <Slider>{movie?.credits?.cast?.map((actor, i) =>
                  actor.profile_path ? (
                   <SlideItem
                      image={`${IMAGE_URL + PROFILE_SIZE + actor.profile_path}`}
                    />
                  ) : null
                )}</Slider>
          </RightCard> */}
        </Card>
      )}
        </div>
    )
}
export default ActorCard;