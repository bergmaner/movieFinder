import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const SearchBar = styled.div`
  background: rgba(150,150,150,0.8);
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  :hover > input{
      width: 210px;
  }
`;
const SearchIcon = styled(MdSearch)`
  float: right;
  color: black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchInput = styled.input`
border: none;
outline: none;
cursor: text;
padding: 0px;
background: none;
color: black;
font-size: 30px;
line-height: 40px;
transition: width 0.4s;
width: 0px;`;

const Searchbar = () =>{
    return(
        <SearchBar>
        <SearchInput />
        <SearchIcon />
      </SearchBar>
    )
}
export default Searchbar;