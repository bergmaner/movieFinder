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

const StarRating = ({ rating }) => {
  const rate = Math.floor(rating / 2);
  const [object, setObject] = useState([]);
  useEffect(() => {
    const array = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= 2) array.push(<Star />);
      else if (rating > 1 && rating < 2) array.push(<HalfStar />);
      else array.push(<BlankStar/>)
      rating -= 2;
    }
    console.log("rate", rate, "rating", rating, array);
    setObject(array);
  }, [rating]);
  return (
    <div>
      <div>
        {object.map((star, i) => (
          <span key={i}>{star}</span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
