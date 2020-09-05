import React, { useReducer, createContext } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actor from "./pages/Actor";
import { reducer } from "./store/reducer";
import "./App.css";

export const MoviesContext = createContext();

const App = () => {
  const data = {
    movies: [],
    discoverList: {},
    genres: [],
    genre: "",
    slides: [],
    type: "DISCOVER",
    loading: true,
    actualPage: 1,
    totalPages: 0,
    searchQuery: "",
    actualBackground: 0,
  };

  const [state, dispatch] = useReducer(reducer, data);
  return (
    <MoviesContext.Provider value={{
      state,
      dispatch
    }}>
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/actor/:id">
            <Actor />
          </Route>
        </Router>
      </div>
    </MoviesContext.Provider>
  );
};

export default App;
