import React from "react";
import styled from "styled-components";
import {breakpoint} from "../helpers/mediaQueries";

const HeroHeader = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: 100%, cover !important;
  background-position: 50%, 50% !important;
  width: 100%;
  height: 70vh;
  position: relative;
  color: white;
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
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 30px;
  @media ${breakpoint.sm}{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  div {
    text-align: left;
  }
`;

const Background = ({ image, title, overview }) => {
  return (
    <HeroHeader image={image}>
      <Description>
        <h1>{title}</h1>
        <div>{overview}</div>
      </Description>
    </HeroHeader>
  );
};
export default Background;
