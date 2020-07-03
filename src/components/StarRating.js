import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Star = styled(BsStarFill)`
  padding: 1px;
  color: yellow;
  font-size: 24px;
`;

const HalfStar = styled(BsStarHalf)`
  padding: 1px;
  color: yellow;
  font-size: 24px;
`;

const BlankStar = styled(BsStar)`
  padding: 1px;
  color: yellow;
  font-size: 24px;
`;
const Rating = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;
const StarRating = ({ rating }) => {
  const [stars, setStars] = useState([]);
  const [starsCount, setStarsCount] = useState(0);
  const maxStars = 5;
  useEffect(() => {
    const array = [];
    let starsAmount = 0;
    for (let i = 0; i < maxStars; i++) {
      if (rating >= 2) {
        array.push(<Star />);
        starsAmount++;
      } else if (rating > 1 && rating < 2) {
        array.push(<HalfStar />);
        starsAmount += 0.5;
      } else array.push(<BlankStar />);
      rating -= 2;
    }
    setStarsCount(starsAmount);
    setStars(array);
  }, [rating]);
  return (
      <Rating>
          <div>
        {stars.map((star, i) => (
          <span key={i}>{star}</span>
        ))}
        </div>
        <div style={{fontSize: "18px", height: "26px"}}>{starsCount} / {maxStars}</div>
      </Rating>
  );
};

export default StarRating;
