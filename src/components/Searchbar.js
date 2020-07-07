import React, { useEffect } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { TMDB_URL, API_KEY } from "../Config";
import {breakpoint} from "../helpers/mediaQueries";

const SearchBar = styled.div`
  background: rgba(150, 150, 150, 0.8);
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  :hover > input {
    width: 210px;
    @media ${breakpoint.sm}{
      width:130px;
    }
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
  :focus {
    width: 210px;
    @media ${breakpoint.sm}{
      width:130px;
    }
  }
  border: none;
  outline: none;
  cursor: text;
  padding: 0px;
  background: none;
  color: black;
  font-size: 30px;
  line-height: 40px;
  transition: width 0.4s;
  width: 0px;
`;

const Searchbar = ({state,dispatch}) => {
  
  
  useEffect(() => {
    const fetchMovies = async () => {
      if(state.searchQuery !== ""){
      fetch(`${TMDB_URL}search/movie?api_key=${API_KEY}&query=${state.searchQuery}`)
        .then((result) => result.json())
        .then((result) => {
            dispatch({
              type: "SEARCH_MOVIES",
              payload: result,
            });
        });
      }
    };
    fetchMovies();
  }, [state.searchQuery]);
  return (
    <SearchBar>
      <SearchInput onChange={(e) =>  dispatch({
        type: "MOVIES_REQUEST",
        payload: e.target.value
      })} />
      <SearchIcon />
    </SearchBar>
  );
};
export default Searchbar;
