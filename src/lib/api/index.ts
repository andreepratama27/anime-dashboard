// /* eslint-disable no-useless-catch */
// import { ApiUrl } from "./constants";
// import { Anime, AnimeResponse } from "./type";

// export const fetchAnime = async (): Promise<AnimeResponse> => {
//   try {
//     const response = await fetch(`${ApiUrl}/anime?page=1&limit=10`, {
//       cache: "no-cache",
//     });
//     const result = await response.json();

//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchAnimeDetail = async ({
//   id,
// }: {
//   id: number;
// }): Promise<Anime> => {
//   try {
//     const response = await fetch(`${ApiUrl}/anime/${id}`);
//     const result = await response.json();

//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchAnimeByQuery = async ({ search }: { search: string }) => {
//   try {
//     const response = await fetch(`${ApiUrl}/anime?q=${search}`);
//     const result = await response.json();

//     return result;
//   } catch (error) {
//     throw error;
//   }
// };
