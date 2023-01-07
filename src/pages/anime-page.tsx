import { useState } from "react";
import { getAnimeInfos } from "../services/getAnimeInfos";

export default function AnimePage() {
  const [animeInfos, setAnimeInfos]: any = useState([]);
  const id = Number(location.pathname.replace("/anime/", ""));

  const fetchData = async () => {
    const response = await getAnimeInfos({
      id,
    });
    return setAnimeInfos(response.data.attributes);
  };
  fetchData();

  return (
    <section className="bg-gray-500 flex flex-col gap-y-10 items-center rounded p-10 m-10">
      <h1 className="text-3xl font-bold text-white">
        {animeInfos?.canonicalTitle}
      </h1>
      <img src={animeInfos?.posterImage?.medium} />
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold text-white">Sinopse</h2>
          <p className="text-white">{animeInfos?.synopsis}</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold text-white">Informações</h2>
          <p className="text-white">Episódios: {animeInfos?.episodeCount}</p>
          <p className="text-white">
            Duração: {animeInfos?.episodeLength} minutos
          </p>
          <p className="text-white">Status: {animeInfos?.status}</p>
          <p className="text-white">
            Data de Lançamento: {animeInfos?.startDate}
          </p>
          <p className="text-white">
            Classificação: {animeInfos?.ageRatingGuide}
          </p>
        </div>
      </div>
    </section>
  );
}
