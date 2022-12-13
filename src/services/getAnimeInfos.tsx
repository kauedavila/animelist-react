type AnimeInfoProps = {
  id: number;
};
const api = "https://kitsu.io/api/edge/";

export async function getAnimeInfos({ id }: AnimeInfoProps) {
  try {
    const response = await fetch(`${api}anime/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
