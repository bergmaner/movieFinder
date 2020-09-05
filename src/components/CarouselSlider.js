import React from "react";
import styled from "styled-components";
import useInterval from "../hooks/useInterval";
import { MoviesContext } from "../App";
import { breakpoint } from "../helpers/mediaQueries";
import { IMAGE_URL, BACKDROP_SIZE } from "../config";

const HeroHeader = styled.div`
  height: 70vh;
  white-space: nowrap;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: inline-block;
  background-size: 100%, cover !important;
  background-position: 50%, 50% !important;
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
  transform: translateX(${(props) => props.translate}%);
  transition: 0.6s all ease;
  background: linear-gradient(
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.image}), rgb(28, 28, 28);
  h1 {
    margin: 0px;
  }
`;

const Description = styled.div`
  white-space: normal;
  position: absolute;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px 30px;
  @media ${breakpoint.sm} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  div {
    text-align: left;
  }
`;

const SlideControls = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  text-align: center !important;
  label:nth-child(${(props) => props.actualBackground + 1}) {
    background: #fff;
  }

  label {
    cursor: pointer;
    border-radius: 5px;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 2px;
    background: #bbb;
    transition: all 0.3s;

    &:hover {
      background: #eee;
      border-color: #777;
    }
  }
`;
const CarouselSlider = () => {
  const { state, dispatch } = React.useContext(MoviesContext);
 const {setLive} = useInterval(
    () => {
      dispatch({
        type: "SET_ACTUAL_BACKGROUND",
        payload:
          state.actualBackground + 1 === 5 ? 0 : state.actualBackground + 1,
      });
    },
    3000
  );

  const handleClick = (result) => {
    dispatch({
      type: "SET_ACTUAL_BACKGROUND",
      payload: result,
    });
    setLive(false);
  };

  return (
    <HeroHeader>
      {state.slides.map((item, i) => (
        <SlideWrapper
          translate={state.actualBackground * -100}
          key={i}
          image={IMAGE_URL + BACKDROP_SIZE + state.slides[i]?.backdrop_path}
        >
          <Description>
            <h1>{item.title}</h1>
            <div>{item.overview}</div>
            <SlideControls actualBackground={state.actualBackground}>
              {state.slides.map((slide, j) => (
                <label onClick={() => handleClick(j)} />
              ))}
            </SlideControls>
          </Description>
        </SlideWrapper>
      ))}
    </HeroHeader>
  );
};
export default CarouselSlider;
