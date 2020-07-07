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
  justify-content: ${props => props.justifyContent || "center"};
  align-items: center;
`;
const StarRating = ({ justifyContent, rating }) => {
  const [stars, setStars] = useState([]);
  const maxStars = 5;
  useEffect(() => {
    const array = [];
    for (let i = 0; i < maxStars; i++) {
      if (rating >= 2) {
        array.push(<Star />);
      } else if (rating > 1 && rating < 2) {
        array.push(<HalfStar />);
      } else array.push(<BlankStar />);
      rating -= 2;
    }
    setStars(array);
  }, [rating]);
  return (
    <Rating justifyContent={justifyContent}>
      <div>
        {stars.map((star, i) => (
          <span key={i}>{star}</span>
        ))}
      </div>
    </Rating>
  );
};

export default StarRating;
