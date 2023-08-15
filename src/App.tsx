import { useEffect, useRef, useState } from "react";
import { fetchAnime } from "./lib/api";
import type { Anime } from "./lib/api/type";
import AppWrapper from "./components/app-wrapper";
import SearchInput from "./components/search-input";

function App() {
  const observerTarget = useRef(null);
  const [anime, setAnime] = useState<Anime[]>([]);
  const [pageInformation, setPageInformation] = useState<unknown>(null);

  const fetchData = async () => {
    const result = await fetchAnime();

    setAnime(result.data);
    setPageInformation(result.pagination);
  };

  const fetchMore = async () => {
    const result = await fetchAnime();
    setAnime((prevState) => [...prevState, ...result.data]);
  };

  const renderContent = () => {
    return (
      <div className="grid grid-cols-3 gap-4 anime-grid">
        {anime?.map((item, key) => (
          <div className="grid w-full" key={key}>
            <img src={item.images.webp.image_url} className="h-full" />

            <div className="flex items-center px-2 h-14 min-h-10 img-title">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMore();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) observer.unobserve(observerTarget.current);
    };
  }, [observerTarget]);

  return (
    <AppWrapper>
      <>
        <SearchInput />

        <section className="my-4 main-content">
          <div className="title">
            <p className="mb-4 font-bold">Anime Lists</p>
          </div>

          {renderContent()}

          <div ref={observerTarget}></div>
        </section>
      </>
    </AppWrapper>
  );
}

export default App;
