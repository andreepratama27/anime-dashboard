import { Anime } from "../../lib/api/type";
import { useStore } from "../../lib/store";

export default function AnimeBox({ item }: { item: Anime }) {
  const { isFavorited, addFavorite, removeFavorite } = useStore();

  const handleRemove = () => removeFavorite(item);

  const handleAdd = () => addFavorite(item);

  const renderButton = () => {
    if (isFavorited(item)) {
      return (
        <div className="absolute bottom-0 right-0 flex items-end justify-end w-full h-full opacity-0 favorite-button hover:opacity-100 hover:cursor-pointer">
          <button
            className="relative w-20 text-sm text-white bg-red-500 outline bottom-2 right-2"
            onClick={handleRemove}
          >
            Remove ❌
          </button>
        </div>
      );
    }

    return (
      <div className="absolute bottom-0 right-0 flex items-end justify-end w-full h-full opacity-0 favorite-button hover:opacity-100 hover:cursor-pointer">
        <button
          className="relative px-2 text-sm text-white bg-green-500 min-w-20 outline bottom-2 right-2"
          onClick={handleAdd}
        >
          Add to Favorite ✅
        </button>
      </div>
    );
  };

  return (
    <div className="grid w-full" key={item.mal_id}>
      <div className="relative w-full h-72">
        <img
          src={item.images.webp.image_url}
          className="w-full h-full"
          loading="lazy"
        />

        {renderButton()}
      </div>

      <div className="flex items-center h-20 px-2 min-h-14 img-title">
        <a href={`/detail/${item.mal_id}`}>{item.title}</a>
      </div>
    </div>
  );
}
