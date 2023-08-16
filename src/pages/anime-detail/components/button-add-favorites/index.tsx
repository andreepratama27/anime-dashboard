import type { Anime } from "../../../../lib/api/type";
import { useStore } from "../../../../lib/store";

export default function ButtonAddFavorite({ anime }: { anime: Anime }) {
  const { addFavorite, isFavorited, removeFavorite } = useStore();
  const isAdded = isFavorited(anime);

  const handleAddToFavorite = () => {
    addFavorite(anime);
  };

  const removeFromFavorite = () => {
    removeFavorite(anime);
  };

  if (isAdded) {
    return (
      <button
        className="px-2 py-1 text-sm text-white bg-gray-500 button"
        onClick={removeFromFavorite}
      >
        Remove from favorite
      </button>
    );
  }

  return (
    <button
      className="px-2 py-1 text-sm text-white bg-pink-400 button"
      onClick={handleAddToFavorite}
    >
      Add as Favorite
    </button>
  );
}
