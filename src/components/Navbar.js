import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";

const Header = styled.div`
  background: black;
  color: white;
  box-sizing: border-box;
  height: 10vh;
  font-size: 30px;
  padding-left:30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
`;

const Navbar = () => {
  return (
    <Header>
      <Title>Movie Finder</Title>
      <div>
       <Searchbar/>
      </div>
    </Header>
  );
};
export default Navbar;
