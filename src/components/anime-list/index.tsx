import { Anime } from "../../lib/api/type";
import AnimeBox from "../anime-box";

export default function AnimeList({ list }: { list: Anime[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:px-4 md:px-0 sm:grid-cols-2 md:grid-cols-3 anime-grid">
      {list?.map((item) => (
        <AnimeBox item={item} key={item.mal_id} />
      ))}
    </div>
  );
}
