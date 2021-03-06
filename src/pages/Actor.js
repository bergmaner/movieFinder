import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActorCard from "../components/ActorCard";
import { TMDB_URL, API_KEY, IMAGE_URL } from "../config";
import Footer from "../components/Footer";

const Actor = () => {
  const { id } = useParams();
  const [actor, setActor] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `${TMDB_URL}person/${id}?api_key=${API_KEY}&append_to_response=movie_credits`
    )
      .then((result) => result.json())
      .then((result) => {
        setActor(result);
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
        <ActorCard loading={loading} actor={actor} poster={`${IMAGE_URL}w185${actor.profile_path}`}/>
        <Footer/>
    </div>
  );
};
export default Actor;
