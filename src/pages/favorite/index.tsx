import AnimeList from "../../components/anime-list";
import AppWrapper from "../../components/app-wrapper";
import { useStore } from "../../lib/store";

export default function Favorite() {
  const { favorites } = useStore();

  return (
    <AppWrapper>
      <main>
        <div className="pt-8 app-title">
          <p className="text-xl font-bold">Your Favorite Anime</p>
        </div>

        <div className="mt-4 anime-grid">
          <AnimeList list={favorites} />
        </div>
      </main>
    </AppWrapper>
  );
}
