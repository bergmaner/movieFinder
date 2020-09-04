import { useState, useRef, useEffect } from "react";

const useSliding = (elementWidth, countElements) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth;
    if(((containerWidth / elementWidth)) > countElements) setHasNext(false);
    setContainerWidth(containerWidth);
    setTotalInViewport(containerWidth / elementWidth);
  }, [containerRef.current]);

  const handlePrev = () => {
      setHasNext(true);
      if(distance + containerWidth >= 0)setHasPrev(false)
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
   setHasPrev(true);
    if( viewed + (2*totalInViewport) >= countElements) setHasNext(false);
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const handleResetDistance = () => {
    setHasPrev(false);
    setHasNext(true);
    setDistance(0);
    setViewed(0);
  }

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  return { handlePrev, handleNext, handleResetDistance, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;
