import { useEffect, useState } from "react";
import { fetchAnime } from "./lib/services/anime.service";
import { useInfiniteQuery } from "react-query";
import AppWrapper from "./components/app-wrapper";
import { useInView } from "react-intersection-observer";
import { debounce } from "./utils";

function App() {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  const { data, fetchNextPage } = useInfiniteQuery(
    ["animeInfinite"],
    async () => {
      const response = await fetchAnime({ page, filter });
      const objResponse = {
        ...response,
        pagination: { ...response.pagination, page },
      };

      return objResponse;
    },
    {
      enabled: !!filter,
      getNextPageParam: (lastPage) => {
        return lastPage.pagination.page;
      },
    }
  );

  const renderContent = () => {
    return (
      <div className="grid grid-cols-3 gap-4 anime-grid">
        {data?.pages?.map((page) => {
          return page?.data?.map((item) => (
            <div className="grid w-full" key={item.mal_id}>
              <img
                src={item.images.webp.image_url}
                className="h-full"
                loading="lazy"
              />

              <div className="flex items-center px-2 h-14 min-h-10 img-title">
                <a href={`/detail/${item.mal_id}`}>{item.title}</a>
              </div>
            </div>
          ));
        })}
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
      <>
        <section className="pt-8 my-4 main-content">
          <div className="title">
            <p className="mb-4 text-xl font-bold">Anime Lists</p>
          </div>

          {renderContent()}

          <div ref={ref}></div>
        </section>
      </>
    </AppWrapper>
  );
}

export default App;
