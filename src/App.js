import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <Movie />
        </Route>
      </Router>
    </div>
  );
};

export default App;
