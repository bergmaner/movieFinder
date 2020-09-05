import React from "react";
import styled from "styled-components";
import { IMAGE_URL, POSTER_SIZE, DISCOVER_LIST } from "../config";
import { MoviesContext } from "../App";
import Slider from "./Slider";
import SlideItem from "./SlideItem";
import {breakpoint} from "../helpers/mediaQueries";

const Header = styled.h1`
  color: #fff;
  text-align: left;
  font-size: 40px;
  padding-left: 20px;
  @media ${breakpoint.md}{
    font-size: 30px;
  }
`;

const Discover = () => {
  const { state } = React.useContext(MoviesContext);
  return (
    <div>
      {Object?.keys(state.discoverList)?.map(function (key,i) {
        return (
          <div>
            <Header>{DISCOVER_LIST[i]}</Header>
            <Slider autoplay>
              {state.discoverList[key].map((movie) => (
                <SlideItem
                  name={movie.title}
                  path={`/movie/${movie.id}`}
                  image={`${IMAGE_URL + POSTER_SIZE + movie.poster_path}`}
                  isExist={movie?.poster_path}
                  key={movie.id}
                />
              ))}
            </Slider>
          </div>
        );
      })}
    </div>
  );
};
export default Discover;
