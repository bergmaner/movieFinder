import React, { Children } from "react";
import styled from "styled-components";
import SlideButton from "./SlideButton";
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

const Slider = ({ children }) => {
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useSliding(187, Children.count(children));

  return (
    <SliderWrapper>
      <div>
        <Container ref={containerRef} {...slideProps}>
           {children}
        </Container>
      </div>
      {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
  );
};

export default Slider;
