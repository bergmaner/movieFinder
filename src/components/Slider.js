import React, { useState, Children } from "react";
import styled from "styled-components";
import { IMAGE_URL, PROFILE_SIZE } from "../Config";
import SlideButton from "./SlideButton";
import useSliding from "../hooks/useSliding.js";
import useSizeElement from "../hooks/useSizeElement";
import SliderContext from "./context";

const SliderWrapper = styled.div`
  height: 68px;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
display: flex;
transition: transform 300ms ease 100ms;
z-index: 3;
width: 100%;
`;

const Slider = ({ children }) => {
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useSliding(width, Children.count(children));


  const contextValue = {
    elementRef,
  };

  return (
    <SliderContext.Provider value={contextValue}>
    <SliderWrapper>
      <div>
        <Container ref={containerRef} {...slideProps}>
           {children}
        </Container>
      </div>
      {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
      </SliderContext.Provider>
  );
};

export default Slider;
