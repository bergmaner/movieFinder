import React from "react";
import styled from "styled-components";
import { breakpoint } from "../helpers/mediaQueries";
import Spinner from "../components/Spinner";
import Slider from "../components/Slider";
import SlideItem from "./SlideItem";
import NoImage from "./NoImage";
import { IMAGE_URL, POSTER_SIZE } from "../config";

const Poster = styled.div`
  width: 185px !important;
  @media${breakpoint.lg} {
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
  @media${breakpoint.lg} {
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

const SlideContainer = styled.div`
  width: 60%;
  box-sizing: border-box;
  padding: 0 20px;
  @media${breakpoint.lg} {
    width: 100%;
    padding: 0;
  }
`;

const Biography = styled.div`
  text-align: left;
  padding: 20px;
  @media ${breakpoint.sm} {
    font-size: 14px;
  }
`;

const CharacterContainer = styled.div`
display: flex;
width: 40%;
@media${breakpoint.lg} {
  width: 100%;
}
@media${breakpoint.sm} {
  flex-Direction: column;
}
`

const ActorCard = ({ loading, poster, actor }) => {
  return (
    <div>
      {loading ? (
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </Card>
      ) : (
        <Card>
          <Header>
            <CharacterContainer>
              <Poster>
                {actor.profile_path ? <img src={poster} /> : <NoImage />}
              </Poster>
              <Details>
                <Detail>Name: {actor.name}</Detail>
                <Detail>Birthday: {actor.birthday}</Detail>
                <Detail>Place of birth: {actor.place_of_birth}</Detail>
                <Detail>Known for: {actor.known_for_department}</Detail>
              </Details>
            </CharacterContainer>
            <SlideContainer>
              <Slider autoplay>
                {actor?.movie_credits?.cast?.map((movie) => (
                  <SlideItem
                    name={movie.title}
                    path={`/movie/${movie.id}`}
                    image={`${IMAGE_URL + POSTER_SIZE + movie.poster_path}`}
                    isExist={movie?.poster_path}
                    key={movie.id}
                  />
                ))}
              </Slider>
            </SlideContainer>
          </Header>

          <Biography>
            <h1>Biography</h1>
            <p>{actor.biography}</p>
          </Biography>
        </Card>
      )}
    </div>
  );
};
export default ActorCard;
