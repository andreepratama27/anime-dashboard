/* eslint-disable no-useless-catch */
import { ApiUrl } from "./constants";
import { AnimeResponse } from "./type";

export const fetchAnime = async (): Promise<AnimeResponse> => {
  try {
    const response = await fetch(`${ApiUrl}/anime`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};
