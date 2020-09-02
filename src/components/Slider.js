import React, { Children } from "react";
import styled from "styled-components";
import SlideButton from "./SlideButton";
import useInterval from "../hooks/useInterval";
import useSliding from "../hooks/useSliding.js";

const SliderWrapper = styled.div`
  width: 100%;
overflow:hidden;
  position: relative;
`;

const Container = styled.div`
height: 100%;
display: flex;
transition: transform 300ms ease 100ms;
z-index: 3;
width: 100%;
`;

const Slider = ({ children, autoplay }) => {
  const {
    handlePrev,
    handleNext,
    handleResetDistance,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useSliding(185, Children.count(children));

  const {setLive} = useInterval(
    () => {
      hasNext ? handleNext() : handleResetDistance();
    },
    autoplay ? 3000 : null
  );

  return (
    <SliderWrapper>
      <div>
        <Container ref={containerRef} {...slideProps}>
           {children}
        </Container>
      </div>
      {hasPrev && <SlideButton onClick={() => (handlePrev(), setLive(false))} type="prev" />}
        {hasNext && <SlideButton onClick={() => (handleNext(), setLive(false))} type="next" />}
      </SliderWrapper>
  );
};

export default Slider;
