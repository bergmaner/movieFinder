import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Header = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 3;
  background: black;
  color: white;
  box-sizing: border-box;
  height: 10vh;
  font-size: 30px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Navbar = ({ state, dispatch }) => {
  console.log("state", state);
  return (
    <Header>
      <Title>
        <Link to="/">Movie Finder</Link>
      </Title>
      <div>
        <Searchbar state={state} dispatch={dispatch} />
      </div>
    </Header>
  );
};
export default Navbar;
