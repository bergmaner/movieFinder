import React from "react"
import styled from "styled-components"
import { IMAGE_URL, POSTER_SIZE } from "../config";
import Slider from "./Slider";
import SlideItem from "./SlideItem";

const Header = styled.h1`
color: #fff;
text-align: left;
font-size: 40px;
padding-left: 20px;
` 

const Discover = ({data}) => {
    return(
        <div>
      <Header>Popular</Header>
      <Slider autoplay>
                {data.popularMovies.map((movie) => (
                  <SlideItem
                    name={movie.title}
                    path={`/movie/${movie.id}`}
                    image={`${IMAGE_URL + POSTER_SIZE + movie.poster_path}`}
                    isExist={movie?.poster_path}
                    key={movie.id}
                  />
                ))}
              </Slider>
              <Header>Top Rated</Header>
      <Slider autoplay>
                {data.topRatedMovies.map((movie) => (
                  <SlideItem
                    name={movie.title}
                    path={`/movie/${movie.id}`}
                    image={`${IMAGE_URL + POSTER_SIZE + movie.poster_path}`}
                    isExist={movie?.poster_path}
                    key={movie.id}
                  />
                ))}
              </Slider>
              <Header>Now Playing</Header>
      <Slider autoplay>
                {data.nowPlayingMovies.map((movie) => (
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
    )
}
export default Discover;