import React, { useEffect, useState } from "react";
import { TMDB_URL, IMAGE_URL, API_KEY, BACKDROP_SIZE } from "../Config";
import Background from "../components/Background";
import MovieList from "../containers/MovieList";

const Home = () => {
  const [data, setData] = useState({
    movies: [],
    backgroundImage: "",
    loading: false,
    actualPage: 0,
    totalPages: 0,
    searchQuery: "",
  });
  useEffect(() => {
    setData((prev) => ({
      ...prev,
      loading: true,
    }));
    fetch(
      `${TMDB_URL}movie/popular?api_key=${API_KEY}&page=1`
    )
      .then((result) => result.json())
      .then((result) => {
        setData((prev) => ({
          ...prev,
          movies: result.results,
          loading: false,
          actualPage: result.page,
          totalPages: result.total_pages,
          backgroundImage: data.backgroundImage || result.results[2],
        }));
      });
  }, []);

  return (
    <div>
      <Background
        image={`${IMAGE_URL + BACKDROP_SIZE + data.backgroundImage.backdrop_path}`}
        title={data.backgroundImage.title}
        overview={data.backgroundImage.overview}
      />
      <MovieList movies={data.movies} loading={data.loading} />
    </div>
  );
};
export default Home;
