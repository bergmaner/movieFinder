import React from "react";
import styled from "styled-components";
import StarRating from "./StarRating";
import Spinner from "./Spinner";
import Slider from "./Slider";
import SlideItem from "./SlideItem";
import NoImage from "./NoImage";
import { IMAGE_URL, LOGO_SIZE, POSTER_SIZE } from "../config";
import { breakpoint } from "../helpers/mediaQueries";


const Card = styled.div`
  width: 100%;
  min-height: 90vh;
  background: #333231;
  display: flex;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
  @media ${breakpoint.md} {
    flex-direction: column;
    height: auto;
  }
`;
const LeftCard = styled.div`
  width: 342px;
  height: 100% !important;
  margin: 0px;
  padding: 0px;
  background: transarent;
  @media ${breakpoint.md} {
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
`;
const RightCard = styled.div`
width: calc(100vw - 362px);
box-sizing: border-box;
  background: #333231;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 40px; 
  @media ${breakpoint.md} {
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
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
  min-height: 70px;
  margin: 0px 5px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const Image = styled.img`
  margin: 5px;
  max-height: 100px;
  @media ${breakpoint.lg}{
    max-height: ${props => props.size || "100px"}
  }
`;

const Poster = styled.img`

`;

const Backdrop = styled.img`
width: 100%;
height: 100% !important;
`;

const Overview = styled.p`
color: white;
font-family: "Montserrat", sans-serif;
font-size: 18px;
letter-spacing: 1px;
margin: 10px 0 10px 0;
text-align: left;
@media ${breakpoint.lg} {
  font-size: 15px;
}
`;

const Title = styled.h1`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-align: left;
  font-size: 40px;
  margin: 30px 0 0 0;
  letter-spacing: 1px;
  @media ${breakpoint.lg}{
    font-size: 25px;
  }
`;

const PosterContainer = styled.div`
height: 100% !important;
div{
  height: 542px !important;
}
@media ${breakpoint.md} {
  display: none;
}
`

const BackdropContainer = styled.div`
display: none;
  @media ${breakpoint.md} {
    display: inline-block;
    div{
      width: 100vw !important;
      height: 100% !important;
    }
  }
`

const MovieCard = ({ loading, poster, backdrop, movie }) => {
  return (
    <div>
      {loading ? (
        <Card style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Spinner />
        </Card>
      ) : (
        <Card>
          <LeftCard>
      <PosterContainer>{ movie.poster_path ? <Poster src={poster} /> : <NoImage/>}</PosterContainer>
      <BackdropContainer> { movie.backdrop_path ? <Backdrop src={backdrop} /> : <NoImage/>}</BackdropContainer>
          </LeftCard>
          <RightCard>
            {" "}
            <Title>{movie.title}</Title>
            <ShortInfo>
              <div>{movie.release_date}</div>
              <div>{movie.runtime} min</div>
              <Genres>
                {movie?.genres?.map((genre, i) => (
                  <Genre key={i} last={i === movie.genres.length - 1 ? true : false}>
                    {genre.name}{" "}
                  </Genre>
                ))}
              </Genres>
            </ShortInfo>
            <StarRating
              justifyContent="flex-start"
              rating={movie.vote_average}
            />
            <Overview>{movie.overview}</Overview>
            <Wrapper>
              {movie?.production_companies?.map((company, i) =>
                company.logo_path ? (
                  <Image
                  size = {"40px"}
                    key={i}
                    src={`${IMAGE_URL + LOGO_SIZE + company.logo_path}`}
                  />
                ) : null
              )}
            </Wrapper>
            <Slider autoplay>{movie?.credits?.cast?.map((actor) =>
                   <SlideItem
                      path={`/actor/${actor.id}`}
                      isExist={actor?.profile_path}
                      name={actor.name}
                      image={`${IMAGE_URL + POSTER_SIZE + actor.profile_path}`}
                      key={actor.id}
                    />
                )}</Slider>
          </RightCard>
        </Card>
      
      )}
    </div>
  );
};
export default MovieCard;
