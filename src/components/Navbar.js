import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { breakpoint } from "../helpers/mediaQueries";

const Header = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 999;
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
@media ${breakpoint.sm}{
  font-size:24px;
}
  a {
    color: white;
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <Header>
      <Title>
        <Link to="/">Movie Finder</Link>
      </Title>
      <div>
        <Searchbar />
      </div>
    </Header>
  );
};
export default Navbar;
