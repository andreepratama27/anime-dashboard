import { describe, test } from "vitest";
import { fetchAnime } from "./../anime.service";

global.fetch = vi.fn();

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("AnimeService", () => {
  test("Fetch All Anime", async () => {
    const response = [{ id: 1 }];
    fetch.mockResolvedValue(createFetchResponse(response));

    const animeList = await fetchAnime();

    expect(animeList).toStrictEqual(response);
  });

  test("Fetch Anime by ID", () => {});

  test("Fetch Anime by Query String", () => {});
});
