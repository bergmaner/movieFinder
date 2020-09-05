import React, { Children, useRef, useEffect } from "react";
import styled from "styled-components";
import SlideButton from "./SlideButton";
import useInterval from "../hooks/useInterval";
import useSliding from "../hooks/useSliding.js";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

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
    maxDistance,
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

    const handlePrevSlide = () =>{
      hasPrev ? handlePrev() : handleResetDistance();
      setLive(false);
    }

    const handleNextSlide = () =>{
      hasNext ? handleNext() : handleResetDistance();
      setLive(false);
    }
    useEffect(() => {
      console.log("maxDistance",maxDistance)
      Draggable.create(containerRef.current, {
        type: "x",
        bounds: {
          minX: maxDistance,
          maxX: 0
        }
      });
    }, [maxDistance]);
  return (
    <SliderWrapper >
      <div>
        <Container onMouseOver={ () => setLive(false) } ref={containerRef} {...slideProps}>
           {children}
        </Container>
      </div>
    <SlideButton onClick={() => handlePrevSlide()} type="prev" />
    <SlideButton onClick={() => handleNextSlide()} type="next" />
      </SliderWrapper>
  );
};

export default Slider;
