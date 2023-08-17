import { describe, test, expect, vi } from "vitest";
import { fetchAnime, fetchAnimeDetail } from "../anime.service";

// eslint-disable-next-line no-undef
global.fetch = vi.fn();

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("AnimeService", () => {
  test("Fetch All Anime", async () => {
    const response = [{ id: 1 }];
    fetch.mockResolvedValue(createFetchResponse(response));

    const animeList = await fetchAnime({ page: 1 });

    expect(animeList).toStrictEqual(response);
  });

  test("Fetch Anime by ID", async () => {
    const response = [{ id: 1 }];
    fetch.mockResolvedValue(createFetchResponse(response));

    const animeList = await fetchAnimeDetail({ id: 1 });

    expect(animeList).toStrictEqual(response);
  });
});
