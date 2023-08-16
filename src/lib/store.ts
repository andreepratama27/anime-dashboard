import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Anime } from "./api/type";

interface FavoriteStore {
  favorites: Anime[];
  addFavorite: (item: Anime) => void;
  removeFavorite: (item: Anime) => void;
  isFavorited: (item: Anime) => Anime;
}

export const useStore = create<FavoriteStore>(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (item) => {
        set((state) => ({
          favorites: [...state.favorites, item],
        }));
      },
      removeFavorite: (item: Anime) => {
        const filter = get().favorites.filter((x) => x.mal_id !== item?.mal_id);
        set((state) => ({
          favorites: [...filter],
        }));
      },
      isFavorited: (item: Anime) => {
        const filter = get().favorites.filter((x) => x.mal_id === item?.mal_id);
        return !!filter.length;
      },
    }),
    {
      name: "favorite-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
