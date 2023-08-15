import { useEffect, useState } from "react";
import { fetchAnime } from "./api";
import type { AnimeResponse } from "./api/type";
import AppWrapper from "./components/app-wrapper";

function App() {
  const [anime, setAnime] = useState<AnimeResponse | null>(null);
  const fetchData = async () => {
    const result = await fetchAnime();
    setAnime(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppWrapper>
      <>
        <div className="mt-24 mb-8 content-search">
          <input
            type="text"
            placeholder="Search Anime and more..."
            className="w-full p-4 bg-gray-100 rounded"
          />
        </div>

        <section className="my-4 main-content">
          <div className="title">
            <p className="mb-4 font-bold">Anime Lists</p>
          </div>

          <div className="grid grid-cols-3 gap-4 anime-grid">
            {anime?.data?.map((item) => (
              <div className="grid w-full">
                <img src={item.images.webp.image_url} className="h-full" />

                <div className="flex items-center px-2 h-14 min-h-10 img-title">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    </AppWrapper>
  );
}

export default App;
