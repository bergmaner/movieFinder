import React, { useEffect, useState } from "react";
import { MoviesContext } from "../App";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { TMDB_URL, API_KEY } from "../config";
import { breakpoint } from "../helpers/mediaQueries";

const SearchBar = styled.div`
  background: rgba(150, 150, 150, 0.8);
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover > input {
    width: 210px;
    @media ${breakpoint.sm} {
      width: 130px;
    }
  }
`;
const SearchIcon = styled(MdSearch)`
  cursor: pointer;
  float: right;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const SearchInput = styled.input`
  :focus {
    width: 210px;
    @media ${breakpoint.sm} {
      width: 130px;
    }
  }
  border: none;
  outline: none;
  cursor: text;
  padding: 0px;
  background: none;
  color: white;
  font-size: 30px;
  line-height: 40px;
  transition: width 0.4s;
  width: 0px;
`;

const List = styled.nav`
  position: absolute;
  margin: 0 15px;
  background: black;
  top: 9vh;
  z-index: 20;
  right: 10px;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  display: ${(props) =>
    props.focus && props.searchQuery !== "" ? "flex" : "none"};

  @media ${breakpoint.sm} {
    width: 150px;
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  background: rgba(150, 150, 150, 0.8);
  font-family: "Montserrat", sans-serif;
  z-index: 20;
  padding: 5px;
  border-bottom: solid #000 1px;
  font-size: 17px;
  text-align: left;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
  @media ${breakpoint.sm} {
    font-size: 14px;
  }
`;

const Searchbar = () => {
  const { state, dispatch } = React.useContext(MoviesContext);
  const [focus, setFocus] = useState(false);
  const [onList, setOnList] = useState(false);
  let history = useHistory();

  const pushTo = (path) => {
    history.push(path);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (state.searchQuery !== "") {
        fetch(
          `${TMDB_URL}search/movie?api_key=${API_KEY}&query=${state.searchQuery}`
        )
          .then((result) => result.json())
          .then((result) => {
            dispatch({
              type: "DISPLAY_RESULTS",
              payload: result,
            });
          });
      }
    };
    fetchMovies();
  }, [state.searchQuery]);

  const handleClick = () => {
    if (history.location.pathname !== "/") {
      history.push("/");
    }
    if (state.searchQuery !== "") {
      dispatch({
        type: "SEARCH_REQUEST",
      });
      fetch(
        `${TMDB_URL}search/movie?api_key=${API_KEY}&query=${state.searchQuery}&page=${state.actualPage}`
      )
        .then((result) => result.json())
        .then((result) => {
          dispatch({
            type: "SEARCH_MOVIES",
            payload: result,
          });
        });
    }
  };

  useEffect(() => {
    if (state.searchQuery !== "") {
      fetch(
        `${TMDB_URL}search/movie?api_key=${API_KEY}&query=${state.searchQuery}&page=${state.actualPage}`
      )
        .then((result) => result.json())
        .then((result) => {
          result.results = [...state.movies, ...result.results];
          dispatch({
            type: "SEARCH_MOVIES",
            payload: result,
          });
        });
    }
  }, [state.actualPage]);

  const handleFocus = () => {
    if (state.searchQuery !== "") {
      setFocus(true);
    }
  };
  const handleFocusOut = () => {
    if (onList === false) {
      setFocus(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <SearchBar>
          <SearchInput
            onFocus={() => handleFocus()}
            onBlur={() => handleFocusOut()}
            onChange={(e) => (
              setFocus(true),
              dispatch({
                type: "MOVIES_REQUEST",
                payload: e.target.value,
              })
            )}
          />
          <button
            style={{
              background: "transparent",
              outline: "none",
              border: "none",
              padding: "0px",
            }}
          >
            <SearchIcon />
          </button>
        </SearchBar>
      </form>
      <List
        onMouseEnter={() => setOnList(true)}
        onMouseLeave={() => setOnList(false)}
        searchQuery={state.searchQuery}
        focus={focus}
      >
        {state?.results?.map((movie) => (
          <ListItem
            key={movie.id}
            onClick={() => (setFocus(false), pushTo(`/movie/${movie.id}`))}
          >
            {movie.title}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default Searchbar;
