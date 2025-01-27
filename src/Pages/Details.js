import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  const handleAnime = (current_anime) => {
    setAnime(current_anime);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${id}`, options)
      .then((res) => res.json())
      .then((data) => handleAnime(data));

    handleLoading();
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>Chargement...</h1>
      ) : (
        <div class="h-screen">
          <div class="w-full flex space-x-4 p-4">
            <img
              src={anime.image}
              alt={anime.title}
              class="h-full aspect-auto"
            />
            <div class="flex-col">
              <h1 class="font-bold text-xl">{anime.title}</h1>
              {anime.synopsis ? (
                <p class="my-4 text-justify">{anime.synopsis}</p>
              ) : (
                <p class="my-4 text-justify">Pas de synopsis disponible</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
