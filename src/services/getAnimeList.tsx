type AnimeListProps = {
  name: string;
  offset: number;
  limit: number;
  order: string;
  sorting: string;
};
const api = "https://kitsu.io/api/edge/";

export async function getAnimeList({
  name,
  offset,
  limit,
  order,
  sorting,
}: AnimeListProps) {
  try {
    const response = await fetch(
      name === ""
        ? `${api}anime?page[limit]=${limit}]&page[offset]=${offset}&sort=${
            sorting === "" ? "" : order
          }${sorting}`
        : `${api}anime?filter[text]=${name}&page[limit]=${limit}]&page[offset]=${offset}&sort=${
            sorting === "" ? "" : order
          }${sorting}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
