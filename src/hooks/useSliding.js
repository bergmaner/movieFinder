import { useState, useRef, useEffect } from "react";

const useSliding = (elementWidth, countElements) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [maxDistance, setMaxDistance] = useState(0);
  const [viewed, setViewed] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth;
    if (containerWidth / elementWidth > countElements) setHasNext(false);
    setContainerWidth(containerWidth);
    setTotalInViewport(containerWidth / elementWidth);
    setMaxDistance(-(elementWidth * countElements) + containerWidth);
  }, [containerRef.current]);

  const handlePrev = () => {
    setHasNext(true);
    setViewed(viewed - totalInViewport);
    if (distance + containerWidth >= 0) {
      setHasPrev(false);
      setDistance(0);
    }
    else
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setHasPrev(true);
    if (viewed + 3 * totalInViewport >= countElements) {
      setHasNext(false);
      setDistance(maxDistance);
     
    } else  setDistance(distance - containerWidth);
  };

  const handleResetDistance = () => {
    if(hasPrev){
      setHasPrev(false);
      setHasNext(true);
      setDistance(0);
      setViewed(0);
    }
    else if(hasNext){
      setHasPrev(true);
      setHasNext(false);
      setDistance(maxDistance);
      setViewed(countElements);
    }
  };

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  return {
    handlePrev,
    handleNext,
    handleResetDistance,
    slideProps,
    maxDistance,
    containerRef,
    hasPrev,
    hasNext,
  };
};

export default useSliding;
