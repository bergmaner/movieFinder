import React, { useEffect, useState } from "react";
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
      `https://api.themoviedb.org/3/movie/popular?api_key=1a65d41cd57fab7537d17820063e63df&page=1`
    )
      .then((result) => result.json())
      .then((result) => {
        setData((prev) => ({
          ...prev,
          movies: result.results,
          loading: false,
          actualPage: result.page,
          totalPages: result.total_pages,
          backgroundImage: result.results[0],
        }));
      });
  }, []);
  console.log(data);
  return <div>Home</div>;
};
export default Home;
