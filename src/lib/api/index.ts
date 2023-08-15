/* eslint-disable no-useless-catch */
import { ApiUrl } from "./constants";
import { AnimeResponse } from "./type";

export const fetchAnime = async (): Promise<AnimeResponse> => {
  try {
    const response = await fetch(`${ApiUrl}/anime?page=1&limit=10`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};
