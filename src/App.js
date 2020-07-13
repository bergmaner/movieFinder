import React, { useReducer, createContext } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actor from "./pages/Actor";
import { reducer } from "./reducer";
import "./App.css";

const MoviesContext = createContext(null);

const App = () => {
  const data = {
    movies: [],
    backgroundImage: "",
    loading: false,
    actualPage: 1,
    totalPages: 0,
    searchQuery: "",
  };

  const [state, dispatch] = useReducer(reducer, data);
  return (
    <MoviesContext.Provider value={dispatch}>
      <div className="App">
        <Router>
          <Navbar state={state} dispatch={dispatch} />
          <Route exact path="/">
            <Home data={state} dispatch={dispatch} />
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
