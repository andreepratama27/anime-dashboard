import { useEffect, useState } from "react";
import { fetchAnime } from "./lib/services/anime.service";
import { useInfiniteQuery } from "react-query";
import AppWrapper from "./components/app-wrapper";
import { useInView } from "react-intersection-observer";
import AnimeList from "./components/anime-list";
import Shimmer from "./components/shimmer";

function App() {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);

  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ["animeInfinite"],
    async () => {
      const response = await fetchAnime({ page });
      const objResponse = {
        ...response,
        pagination: { ...response.pagination, page },
      };

      return objResponse;
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.pagination.page;
      },
    }
  );

  const renderContent = () => {
    if (isLoading) return <Shimmer length={6} />;
    return (
      <div className="grid grid-cols-3 gap-4 anime-grid">
        {data?.pages?.map((page, key) => (
          <AnimeList list={page.data} key={key} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (inView) {
      setPage(page + 1);
      fetchNextPage();
    }
  }, [inView]);

  return (
    <AppWrapper>
      <section className="pt-8 my-4 main-content">
        <div className="title">
          <p className="mb-4 text-xl font-bold">Anime Lists</p>
        </div>

        {renderContent()}

        <div ref={ref}>
          <Shimmer />
        </div>
      </section>
    </AppWrapper>
  );
}

export default App;
