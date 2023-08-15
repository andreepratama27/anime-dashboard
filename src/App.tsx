import { useEffect, useState } from "react";
import { fetchAnime } from "./api";
import type { AnimeResponse } from "./api/type";

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
    <main className="">
      <nav className="fixed top-0 w-full py-4 bg-violet-800">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg font-bold text-white">AnimeTha</p>
        </div>
      </nav>

      <div className="container max-w-2xl mx-auto mt-24">
        <div className="mb-8 content-search">
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
      </div>
    </main>
  );
}

export default App;
