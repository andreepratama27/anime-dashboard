import { Anime } from "../../lib/api/type";
import AnimeBox from "../anime-box";

export default function AnimeList({ list }: { list: Anime[] }) {
  return list?.map((item) => <AnimeBox item={item} key={item.mal_id} />);
}
