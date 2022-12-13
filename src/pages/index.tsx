import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../components/pagination";
import { getAnimeList } from "../services/getAnimeList";

type HomeProps = {
  text: string;
};
export default function Home({ text }: HomeProps) {
  const [animeList, setAnimeList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [sorting, setSorting] = useState("");
  const [order, setOrder] = useState("-");
  const [total, setTotal] = useState(0);
  const limit = 20;

  const sortingDesc = [
    { name: "", value: "Sem ordem" },
    { name: "userCount", value: "Popularidade" },
    { name: "startDate", value: "Data de Lançamento" },
    { name: "ratingRank", value: "Ranking" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnimeList({
        name: text,
        offset,
        limit,
        order,
        sorting,
      });
      return setAnimeList(response.data), setTotal(response.meta.count);
    };
    fetchData();
  }, [text, offset, sorting, order]);

  return (
    <section className="bg-gray-500 flex flex-col gap-y-10 items-center rounded p-10 m-10">
      <h1 className="text-3xl font-bold text-white">Animes</h1>
      <div className="flex flex-col self-start text-white p-2 rounded">
        <div className="flex gap-x-px">
          Ordenando por:
          <select
            name="sortBy"
            className="font-bold focus:outline-none bg-white bg-opacity-0 cursor-pointer"
            onChange={(e) =>
              setSorting(sortingDesc[Number(e.target.value)].name)
            }
          >
            {sortingDesc.map((item, k) => (
              <option key={k} value={k} className="text-black">
                {item.value}
              </option>
            ))}
          </select>
        </div>
        {sorting !== "" && (
          <p className="">
            em ordem:
            <select
              onChange={(e) => setOrder(e.target.value)}
              className="font-bold focus:outline-none bg-white bg-opacity-0 cursor-pointer"
            >
              <option value="-" className="text-black">
                Decrescente
              </option>
              <option value="" className="text-black">
                Crescente
              </option>
            </select>
          </p>
        )}
      </div>
      <div className="grid gap-10 grid-cols-5">
        {text && !animeList && <div>Carregando...</div>}
        {animeList?.map((anime: any, k: number) => (
          <div key={k} className="grid grid-col-1">
            <Link to={`/anime/${anime.id}`}>
              <img
                className="row-start-1 row-end-3 col-[1]"
                src={anime.attributes.posterImage?.small}
                alt={anime.attributes.canonicalTitle}
              />
            </Link>
            <h1 className="text-white bg-black bg-opacity-80 row-[2] col-[1]">
              {anime.attributes.canonicalTitle}
            </h1>
          </div>
        ))}
      </div>
      <Pagination
        offset={offset}
        limit={limit}
        setOffset={setOffset}
        total={total}
      />
    </section>
  );
}
