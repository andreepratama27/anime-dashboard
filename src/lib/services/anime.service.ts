/* eslint-disable no-useless-catch */
import { ApiUrl } from "../api/constants";
import type { AnimeDetailResponse, AnimeResponse } from "../api/type";

export const fetchAnime = async ({
  page = 1,
  filter = "",
}: {
  page?: number;
  filter?: string;
}): Promise<AnimeResponse> => {
  try {
    const response = await fetch(
      `${ApiUrl}/anime?page=${page}&limit=9&q=${filter}`,
      {
        cache: "no-cache",
      }
    );
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};

export const fetchAnimeDetail = async ({
  id,
}: {
  id: number;
}): Promise<AnimeDetailResponse> => {
  try {
    const response = await fetch(`${ApiUrl}/anime/${id}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};

export const fetchAnimeByQuery = async ({ search }: { search: string }) => {
  try {
    const response = await fetch(`${ApiUrl}/anime?q=${search}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};
